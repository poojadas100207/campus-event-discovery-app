// Clash Guard Engine - Campus Facility & Time Overlap Detection

import { CAMPUS_VENUES } from '../data/events.js';

export const timeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

export const minutesToTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}`;
};

export const formatTimeDisplay = (timeStr) => {
  if (!timeStr) return '';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 || 12;
  const pad = (n) => String(n).padStart(2, '0');
  return `${displayHour}:${pad(minutes)} ${ampm}`;
};

/**
 * Check if a proposed event clashes with any existing campus event.
 * @param {Object} proposed - { title, date, startTime, endTime, venue, id? }
 * @param {Array} existingEvents - List of all existing campus events
 * @returns {Object} clash analysis result
 */
export const analyzeClashes = (proposed, existingEvents = []) => {
  if (!proposed.date || !proposed.startTime || !proposed.endTime || !proposed.venue) {
    return {
      hasClash: false,
      reason: 'Incomplete parameters'
    };
  }

  const propStart = timeToMinutes(proposed.startTime);
  const propEnd = timeToMinutes(proposed.endTime);

  if (propEnd <= propStart) {
    return {
      hasClash: true,
      type: 'INVALID_DURATION',
      message: 'End time must be after start time',
      conflicts: []
    };
  }

  const conflicts = [];

  for (const event of existingEvents) {
    // Ignore self if editing
    if (proposed.id && event.id === proposed.id) continue;

    // Must be same date to clash physically
    if (event.date !== proposed.date) continue;

    // Check same venue collision
    const isSameVenue = (event.venue && proposed.venue && event.venue.trim().toLowerCase() === proposed.venue.trim().toLowerCase()) ||
                        (event.venueId && proposed.venueId && event.venueId === proposed.venueId);

    if (isSameVenue) {
      const exStart = timeToMinutes(event.startTime);
      const exEnd = timeToMinutes(event.endTime);

      // Overlap condition
      const hasOverlap = propStart < exEnd && propEnd > exStart;

      if (hasOverlap) {
        const overlapStart = Math.max(propStart, exStart);
        const overlapEnd = Math.min(propEnd, exEnd);
        const overlapDurationMinutes = overlapEnd - overlapStart;

        conflicts.push({
          event,
          overlapStart: minutesToTime(overlapStart),
          overlapEnd: minutesToTime(overlapEnd),
          overlapDurationMinutes,
          severity: overlapDurationMinutes >= 60 ? 'HIGH' : 'MEDIUM'
        });
      }
    }
  }

  if (conflicts.length === 0) {
    return {
      hasClash: false,
      message: 'Zero conflicts detected. Venue is completely free for this window.',
      conflicts: []
    };
  }

  // Conflict exists! Generate intelligent recommendations for [pick a slot]
  const recommendations = generateAlternativeSlots(proposed, existingEvents, conflicts);

  return {
    hasClash: true,
    type: 'VENUE_COLLISION',
    conflicts,
    recommendations,
    message: `Scheduling clash detected! ${conflicts.length} existing event(s) occupy ${proposed.venue} during this timeframe.`
  };
};

/**
 * Generate smart alternative slots and alternative venues.
 */
export const generateAlternativeSlots = (proposed, existingEvents, conflicts) => {
  const recommendations = {
    timeSlots: [],
    alternativeVenues: []
  };

  const propStart = timeToMinutes(proposed.startTime);
  const propEnd = timeToMinutes(proposed.endTime);
  const duration = propEnd - propStart;

  // 1. Check earlier slot on the same day in same venue
  // Find minimum start time among conflicts
  const minConflictStart = Math.min(...conflicts.map(c => timeToMinutes(c.event.startTime)));
  if (minConflictStart - 9 * 60 >= duration) { // Assuming campus opens at 9:00 AM (540 min)
    const proposedEarlierEnd = minConflictStart - 15; // 15 min buffer
    const proposedEarlierStart = proposedEarlierEnd - duration;
    if (proposedEarlierStart >= 8 * 60) {
      recommendations.timeSlots.push({
        type: 'SAME_VENUE_EARLIER',
        label: `Morning Window (${formatTimeDisplay(minutesToTime(proposedEarlierStart))} – ${formatTimeDisplay(minutesToTime(proposedEarlierEnd))})`,
        startTime: minutesToTime(proposedEarlierStart),
        endTime: minutesToTime(proposedEarlierEnd),
        date: proposed.date,
        venue: proposed.venue,
        venueId: proposed.venueId,
        advantage: 'Keeps your requested venue with zero overlap'
      });
    }
  }

  // 2. Check later slot on the same day in same venue
  const maxConflictEnd = Math.max(...conflicts.map(c => timeToMinutes(c.event.endTime)));
  const campusClosing = 22 * 60; // 10:00 PM
  if (campusClosing - (maxConflictEnd + 30) >= duration) {
    const proposedLaterStart = maxConflictEnd + 30; // 30 min buffer for venue cleanup
    const proposedLaterEnd = proposedLaterStart + duration;
    recommendations.timeSlots.push({
      type: 'SAME_VENUE_LATER',
      label: `Evening Window (${formatTimeDisplay(minutesToTime(proposedLaterStart))} – ${formatTimeDisplay(minutesToTime(proposedLaterEnd))})`,
      startTime: minutesToTime(proposedLaterStart),
      endTime: minutesToTime(proposedLaterEnd),
      date: proposed.date,
      venue: proposed.venue,
      venueId: proposed.venueId,
      advantage: 'High student attendance post-lectures'
    });
  }

  // 3. Alternative campus venues available during the EXACT requested time window!
  for (const venue of CAMPUS_VENUES) {
    if (venue.name.trim().toLowerCase() === proposed.venue.trim().toLowerCase()) continue;

    // Check if this venue has any event overlapping during propStart -> propEnd on proposed.date
    const venueClashes = existingEvents.filter(e => {
      if (e.date !== proposed.date) return false;
      const isThisVenue = (e.venue && e.venue.trim().toLowerCase() === venue.name.trim().toLowerCase()) ||
                          (e.venueId && e.venueId === venue.id);
      if (!isThisVenue) return false;

      const eStart = timeToMinutes(e.startTime);
      const eEnd = timeToMinutes(e.endTime);
      return propStart < eEnd && propEnd > eStart;
    });

    if (venueClashes.length === 0) {
      recommendations.alternativeVenues.push({
        venue: venue.name,
        venueId: venue.id,
        capacity: venue.capacity,
        building: venue.building,
        room: venue.room,
        startTime: proposed.startTime,
        endTime: proposed.endTime,
        date: proposed.date,
        label: `${venue.name} (Cap: ${venue.capacity})`,
        advantage: `Completely free during your exact desired time (${formatTimeDisplay(proposed.startTime)} – ${formatTimeDisplay(proposed.endTime)})`
      });
    }
  }

  return recommendations;
};
