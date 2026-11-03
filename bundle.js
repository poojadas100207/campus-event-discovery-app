/* Campus Pulse Combined Bundle */
(function(){

/* --- src/data/events.js --- */
// Campus Pulse - Event Discovery & Clash Guard Data Store (Modern Campus Theme)

const INTEREST_TAGS = [
  { id: 'tech', label: 'Tech & AI', icon: '💻', category: 'Academic' },
  { id: 'hackathons', label: 'Hackathons', icon: '⚡', category: 'Competition' },
  { id: 'music', label: 'Music & Concerts', icon: '🎵', category: 'Cultural' },
  { id: 'sports', label: 'Sports & Athletics', icon: '🏆', category: 'Athletics' },
  { id: 'design', label: 'Arts & Design', icon: '🎨', category: 'Creative' },
  { id: 'career', label: 'Career & Startups', icon: '💼', category: 'Professional' },
  { id: 'drama', label: 'Drama & Theatre', icon: '🎭', category: 'Cultural' },
  { id: 'social', label: 'Community & Mixers', icon: '☕', category: 'Social' },
  { id: 'workshops', label: 'Workshops', icon: '📚', category: 'Skill Building' },
  { id: 'wellness', label: 'Wellness & Health', icon: '🌿', category: 'Health' },
  { id: 'gaming', label: 'Esports & Gaming', icon: '🎮', category: 'Esports' },
  { id: 'science', label: 'Science & Research', icon: '🔬', category: 'Innovation' }
];

const CAMPUS_VENUES = [
  {
    id: 'auditorium',
    name: 'Main Campus Auditorium',
    building: 'Central Academic Block',
    room: 'Hall A (Ground Floor)',
    capacity: 500,
    equipment: ['Stage', 'Projection Screen', 'Acoustic Sound', 'Live-stream Desk'],
    badge: 'Main Hall'
  },
  {
    id: 'tech_hub_302',
    name: 'Tech Innovation Hub - Lab 302',
    building: 'Engineering & Computing Tower',
    room: '3rd Floor, West Wing',
    capacity: 80,
    equipment: ['Workstations', 'High-Speed Wi-Fi', 'Smart Whiteboard'],
    badge: 'Computing Lab'
  },
  {
    id: 'quad_grounds',
    name: 'Student Quad Grounds',
    building: 'Central Campus Lawn',
    room: 'Open Air Amphitheatre',
    capacity: 1000,
    equipment: ['Outdoor Stage', 'Floodlights', 'Food Stalls Area'],
    badge: 'Outdoor Zone'
  },
  {
    id: 'seminar_b',
    name: 'Executive Seminar Hall B',
    building: 'Management & Humanities Block',
    room: '2nd Floor, Room 204',
    capacity: 120,
    equipment: ['Tiered Seating', 'Podium Mic', 'Video Display'],
    badge: 'Seminar Hall'
  },
  {
    id: 'sports_arena',
    name: 'Sports Complex & Indoor Arena',
    building: 'Campus Recreation Center',
    room: 'Court 1 & Pavilion',
    capacity: 350,
    equipment: ['Scoreboard', 'Bleacher Seating', 'Locker Access'],
    badge: 'Sports Arena'
  }
];

const getFutureDate = (offsetDays) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
};

const INITIAL_EVENTS = [
  {
    id: 'evt-01',
    title: 'HackPulse 2026: 24h AI & Campus Hackathon',
    tagline: 'Collaborative problem solving and prototype building for student innovators.',
    organizer: 'Campus Tech & AI Society',
    organizerEmail: 'techsociety@campus.edu',
    date: getFutureDate(1),
    startTime: '10:00',
    endTime: '22:00',
    venue: 'Tech Innovation Hub - Lab 302',
    venueId: 'tech_hub_302',
    tags: ['Tech & AI', 'Hackathons', 'Science & Research'],
    capacity: 80,
    registeredCount: 68,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    description: 'Join fellow students across departments for the annual collegiate hackathon. Build software prototypes, receive direct mentorship from alumni engineers, and showcase your team project to a panel of campus faculty and guests.',
    agenda: [
      { time: '10:00 AM', title: 'Welcome Address & Problem Track Announcement' },
      { time: '11:30 AM', title: 'Hacking Commences & Team Matching' },
      { time: '02:00 PM', title: 'Mentor Check-in Round' },
      { time: '07:00 PM', title: 'Dinner Break & Networking' },
      { time: '09:00 PM', title: 'Final Project Demonstrations' }
    ],
    perks: ['Meal passes included', 'Certificate of Participation', 'Project feedback from mentors'],
    requirements: ['Laptop and power adapter', 'Valid Student ID card'],
    isFeatured: true
  },
  {
    id: 'evt-02',
    title: 'Acoustic Sunset: Live Student Ensemble',
    tagline: 'An evening of live unplugged music and student indie performances under the open sky.',
    organizer: 'Campus Music Council',
    organizerEmail: 'music@campus.edu',
    date: getFutureDate(2),
    startTime: '18:00',
    endTime: '21:30',
    venue: 'Student Quad Grounds',
    venueId: 'quad_grounds',
    tags: ['Music & Concerts', 'Drama & Theatre', 'Community & Mixers'],
    capacity: 900,
    registeredCount: 740,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    description: 'Relax after a week of classes at our outdoor student music showcase. Featuring original singer-songwriters, instrumental duos, and the campus jazz collective. Light refreshments available.',
    agenda: [
      { time: '06:00 PM', title: 'Open Lawn Seating & Acoustic Opening' },
      { time: '07:15 PM', title: 'Student Songwriter Showcase' },
      { time: '08:30 PM', title: 'Campus Jazz & Percussion Jam' }
    ],
    perks: ['Free admission', 'Student cafe snack vouchers for first 100 check-ins'],
    requirements: ['Bring a blanket or outdoor seating mat'],
    isFeatured: true
  },
  {
    id: 'evt-03',
    title: 'Design Systems & Figma Prototyping Workshop',
    tagline: 'Practical interactive user interface design methods for web and mobile products.',
    organizer: 'Design & UX Guild',
    organizerEmail: 'design@campus.edu',
    date: getFutureDate(3),
    startTime: '14:00',
    endTime: '17:00',
    venue: 'Executive Seminar Hall B',
    venueId: 'seminar_b',
    tags: ['Arts & Design', 'Workshops', 'Tech & AI'],
    capacity: 100,
    registeredCount: 88,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    description: 'A hands-on, practical studio workshop covering design tokens, layout grids, components, and interactive prototypes. Perfect for students interested in product design, engineering, or portfolio building.',
    agenda: [
      { time: '02:00 PM', title: 'Foundations of Design Tokens & Components' },
      { time: '03:15 PM', title: 'Interactive State Prototyping in Figma' },
      { time: '04:30 PM', title: 'Group Review and Design Critique' }
    ],
    perks: ['Figma design system kit', 'Course summary handbook'],
    requirements: ['Laptop with Figma desktop application or web browser account'],
    isFeatured: false
  },
  {
    id: 'evt-04',
    title: 'Inter-College Esports Tournament Finals',
    tagline: 'Cheer on department teams in the semester esports championship.',
    organizer: 'Campus Gaming & Esports League',
    organizerEmail: 'esports@campus.edu',
    date: getFutureDate(4),
    startTime: '13:00',
    endTime: '18:00',
    venue: 'Main Campus Auditorium',
    venueId: 'auditorium',
    tags: ['Sports & Athletics', 'Esports & Gaming', 'Community & Mixers'],
    capacity: 450,
    registeredCount: 390,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description: 'The final matches of our multi-department esports league. Spectator seating, live commentator commentary, and audience game quizzes during intermissions.',
    agenda: [
      { time: '01:00 PM', title: 'Doors Open & Auditorium Seating' },
      { time: '01:30 PM', title: 'Semifinal Match Series' },
      { time: '04:00 PM', title: 'Grand Final & Trophy Presentation' }
    ],
    perks: ['Audience trivia prizes', 'Event souvenir lanyard'],
    requirements: ['Student ID required for auditorium entry'],
    isFeatured: true
  },
  {
    id: 'evt-05',
    title: 'Campus Founder Day & Student Project Showcase',
    tagline: 'Ten student teams present their products and research to campus alumni and mentors.',
    organizer: 'Entrepreneurship & Incubation Cell',
    organizerEmail: 'ecell@campus.edu',
    date: getFutureDate(5),
    startTime: '15:00',
    endTime: '18:00',
    venue: 'Executive Seminar Hall B',
    venueId: 'seminar_b',
    tags: ['Career & Startups', 'Workshops'],
    capacity: 110,
    registeredCount: 65,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    description: 'Meet student teams who have launched ventures and technical projects this semester. Includes brief 5-minute project presentations followed by a structured networking mixer over tea.',
    agenda: [
      { time: '03:00 PM', title: 'Opening Remarks from Incubation Mentors' },
      { time: '03:30 PM', title: 'Team Showcase Presentations' },
      { time: '05:00 PM', title: 'Informal Networking & Feedback Mixer' }
    ],
    perks: ['Networking directory', 'Direct mentor connections'],
    requirements: ['Neat casual or business attire recommended'],
    isFeatured: false
  },
  {
    id: 'evt-06',
    title: 'Morning 5K Campus Run & Recovery Stretch',
    tagline: 'A community 5K jogging loop around campus grounds followed by guided stretching.',
    organizer: 'Athletics & Recreation Board',
    organizerEmail: 'athletics@campus.edu',
    date: getFutureDate(6),
    startTime: '06:30',
    endTime: '09:00',
    venue: 'Sports Complex & Indoor Arena',
    venueId: 'sports_arena',
    tags: ['Sports & Athletics', 'Wellness & Health'],
    capacity: 250,
    registeredCount: 195,
    isFree: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    description: 'A friendly, non-timed community run open to all running levels. Concludes with a 30-minute recovery stretching session led by certified fitness coaches and fresh fruit refreshments.',
    agenda: [
      { time: '06:30 AM', title: 'Check-in & Warm-up Routine' },
      { time: '07:00 AM', title: 'Campus Perimeter 5K Run' },
      { time: '08:15 AM', title: 'Arena Stretch & Refreshment Bar' }
    ],
    perks: ['Commemorative finish pin', 'Post-run fruit and hydration'],
    requirements: ['Running shoes and athletic clothing'],
    isFeatured: false
  }
];

const STORAGE_KEYS = {
  EVENTS: 'campus_pulse_events',
  USER_PREFERENCES: 'campus_pulse_user_prefs',
  REGISTRATIONS: 'campus_pulse_registrations',
  BOOKMARKS: 'campus_pulse_bookmarks'
};

const getStoredEvents = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVENTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(INITIAL_EVENTS));
      return INITIAL_EVENTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_EVENTS;
  }
};

const saveStoredEvents = (events) => {
  try {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  } catch (e) {
    console.error('Failed to save events to localStorage', e);
  }
};


/* --- src/services/clashGuard.js --- */
// Clash Guard Engine - Campus Facility & Time Overlap Detection


const timeToMinutes = (timeStr) => {
  if (!timeStr) return 0;
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutesToTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}`;
};

const formatTimeDisplay = (timeStr) => {
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
const analyzeClashes = (proposed, existingEvents = []) => {
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
const generateAlternativeSlots = (proposed, existingEvents, conflicts) => {
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


/* --- src/services/calendarService.js --- */
// Calendar & Sharing Utility Service

const createGoogleCalendarUrl = (event) => {
  // Format date and time for Google Calendar: YYYYMMDDTHHmmSSZ
  const formatDateForGoogle = (dateStr, timeStr) => {
    const [year, month, day] = dateStr.split('-');
    const [hour, minute] = (timeStr || '10:00').split(':');
    return `${year}${month}${day}T${hour}${minute}00`;
  };

  const startIso = formatDateForGoogle(event.date, event.startTime);
  const endIso = formatDateForGoogle(event.date, event.endTime || event.startTime);

  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(
    `${event.description || ''}\n\nOrganizer: ${event.organizer || 'Campus Club'}\nPass & Info: Campus Pulse App`
  );
  const location = encodeURIComponent(event.venue || 'Campus Grounds');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
};

const downloadIcsFile = (event) => {
  const formatIcsDate = (dateStr, timeStr) => {
    const cleanDate = dateStr.replace(/-/g, '');
    const cleanTime = (timeStr || '10:00').replace(/:/g, '') + '00';
    return `${cleanDate}T${cleanTime}`;
  };

  const start = formatIcsDate(event.date, event.startTime);
  const end = formatIcsDate(event.date, event.endTime || event.startTime);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CampusPulse//Campus Event Discovery//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:campuspulse-${event.id}-${Date.now()}@campus.edu`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString().split('T')[0], '12:00')}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n').replace(/,/g, '\\,')}`,
    `LOCATION:${(event.venue || '').replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Campus Event Starting in 1 Hour!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `${event.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};

const getWhatsAppShareUrl = (event) => {
  const text = encodeURIComponent(
    `🔥 Hey! Check out "${event.title}" happening on ${event.date} at ${event.venue}!\n\n` +
    `👉 Join me via Campus Pulse: ${window.location.origin || 'http://localhost:3000'}`
  );
  return `https://api.whatsapp.com/send?text=${text}`;
};

const copyEventLink = async (event) => {
  const url = `${window.location.origin || 'http://localhost:3000'}?event=${event.id}`;
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch (e) {
      return fallbackCopyText(url);
    }
  }
  return fallbackCopyText(url);
};

const fallbackCopyText = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  const successful = document.execCommand('copy');
  document.body.removeChild(textArea);
  return successful;
};


/* --- src/components/Icons.js --- */
// Campus Pulse - Inline SVG Icons (Zero External Dependency)

const Icons = {
  Sparkles: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
  Calendar: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  Clock: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  MapPin: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  Users: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  Search: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  Filter: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`,
  ShieldCheck: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  AlertTriangle: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
  CheckCircle2: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  ChevronRight: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  ArrowLeft: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  Plus: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  Share2: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
  Bell: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  Bookmark: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="${props?.filled ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`,
  QrCode: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="17" y1="7" x2="17.01" y2="7"></line><line x1="7" y1="17" x2="7.01" y2="17"></line><line x1="17" y1="17" x2="17.01" y2="17"></line></svg>`,
  Zap: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  Ticket: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 7v2a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 0 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2 2"></line></svg>`,
  Compass: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  Layers: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  Phone: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
  Laptop: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>`,
  Info: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  Wand2: (props) => `<svg class="${props?.class || 'w-5 h-5'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"></path><path d="m5 2 5 5"></path><path d="m2 5 5 5"></path><path d="m22 19-3-3"></path></svg>`
};


/* --- src/components/UserFlowBar.js --- */
// Campus Pulse - Navigation Bar (Modern Campus Theme)


const renderUserFlowBar = (currentScreen, userRole, deviceMode, registeredCount = 0) => {
  const steps = [
    { id: 'splash', label: 'Splash', num: '0', path: 'both' },
    { id: 'onboarding', label: 'Onboarding (3+ Tags)', num: '1', path: 'both' },
    { id: 'feed', label: 'Discovery Feed', num: '2', path: 'student' },
    { id: 'details', label: 'Event Details', num: '3', path: 'student' },
    { id: 'confirmation', label: 'Pass Confirmation', num: '4', path: 'student' },
    { id: 'form', label: 'Event Form', num: '5', path: 'organizer' },
    { id: 'clashguard', label: 'Clash Guard Check', num: '6', path: 'organizer' },
  ];

  return `
    <header class="sticky top-0 z-40 bg-white border-b border-[#E8D8C5] px-4 py-2.5 shadow-subtle">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        <!-- Logo & Flow Pathway Indicator -->
        <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button id="btn-flow-home" class="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none">
            <div class="w-8 h-8 rounded-xl bg-[#263D52] flex items-center justify-center shadow-sm group-hover:bg-[#202B36] transition-colors">
              <span class="text-[#D9825B] text-sm font-bold font-display tracking-tight">CP</span>
            </div>
            <div>
              <div class="font-bold text-[#202B36] text-sm tracking-tight flex items-center gap-1.5 font-display">
                Campus Pulse
                <span class="text-[10px] bg-[#E8D8C5]/60 text-[#263D52] font-semibold px-2 py-0.5 rounded-full border border-[#E8D8C5]">Mobile App</span>
              </div>
              <div class="text-[11px] text-[#777D80] flex items-center gap-1 font-sans">
                <span>Pathway:</span>
                <span class="text-[#263D52] font-semibold capitalize">${userRole} Stream</span>
              </div>
            </div>
          </button>

          <!-- Flow Diagram Inspection Trigger -->
          <button id="btn-open-diagram" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer" title="View Full Flow Diagram Pathway">
            ${Icons.Layers({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
            <span class="hidden sm:inline">Flow Diagram</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#D9825B]"></span>
          </button>
        </div>

        <!-- Flow Navigation Steps (Strict Pathway Guidance) -->
        <nav class="hidden lg:flex items-center gap-1 bg-[#F8F7F4] p-1 rounded-xl border border-[#E8D8C5]">
          ${steps.map((step, idx) => {
            const isActive = currentScreen === step.id;
            const isRelevant = step.path === 'both' || step.path === userRole;
            const isOrganizer = step.path === 'organizer';

            return `
              <button
                class="btn-flow-step flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#263D52] text-white shadow-sm'
                    : isRelevant
                      ? 'text-[#202B36] hover:bg-white hover:text-[#263D52]'
                      : 'text-[#777D80] opacity-50 hover:opacity-80'
                }"
                data-step="${step.id}"
                title="${step.label}"
              >
                <span class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-[#D9825B] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
                }">
                  ${step.num}
                </span>
                <span>${step.label}</span>
                ${isOrganizer ? '<span class="text-[9px] text-[#D9825B] font-bold ml-0.5">ORG</span>' : ''}
              </button>
              ${idx < steps.length - 1 ? '<span class="text-[#A9BEC4] text-xs">→</span>' : ''}
            `;
          }).join('')}
        </nav>

        <!-- Right Controls: Role Toggle, My Passes, Venues, Device Mockup -->
        <div class="flex items-center gap-2 w-full md:w-auto justify-end">
          
          <!-- Role Switcher -->
          <div class="flex items-center bg-[#F8F7F4] rounded-xl p-0.5 border border-[#E8D8C5]">
            <button
              id="btn-switch-student"
              class="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                userRole === 'student'
                  ? 'bg-[#263D52] text-white shadow-xs'
                  : 'text-[#777D80] hover:text-[#202B36]'
              }"
            >
              Student
            </button>
            <button
              id="btn-switch-organizer"
              class="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                userRole === 'organizer'
                  ? 'bg-[#D9825B] text-white shadow-xs'
                  : 'text-[#777D80] hover:text-[#202B36]'
              }"
            >
              Organizer
            </button>
          </div>

          <!-- My Passes Trigger -->
          <button
            id="btn-open-passes"
            class="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Registered Event Passes"
          >
            ${Icons.Ticket({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
            <span class="hidden sm:inline">Passes</span>
            ${registeredCount > 0 ? `<span class="bg-[#D9825B] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">${registeredCount}</span>` : ''}
          </button>

          <!-- Venues Trigger -->
          <button
            id="btn-open-map"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Campus Facilities"
          >
            ${Icons.MapPin({ class: 'w-3.5 h-3.5 text-[#263D52]' })}
            <span class="hidden sm:inline">Venues</span>
          </button>

          <!-- Device Mode Preview Toggle (Phone Frame vs Desktop) -->
          <button
            id="btn-toggle-device"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Toggle Phone Mockup Preview"
          >
            ${deviceMode === 'mobile' ? Icons.Laptop({ class: 'w-3.5 h-3.5 text-[#A9BEC4]' }) : Icons.Phone({ class: 'w-3.5 h-3.5 text-[#A9BEC4]' })}
            <span class="hidden md:inline">${deviceMode === 'mobile' ? 'Desktop' : 'Phone Frame'}</span>
          </button>
        </div>

      </div>
    </header>
  `;
};


/* --- src/components/SplashScreen.js --- */
// Screen 0: App Launch / Splash Screen (Modern Campus Theme)


const renderSplashScreen = () => {
  return `
    <div class="min-h-[82vh] flex flex-col items-center justify-center p-4">
      
      <!-- Startup Mobile App Shell Card -->
      <div class="w-full max-w-lg mx-auto bg-white rounded-3xl p-7 sm:p-10 border border-[#E8D8C5] shadow-card text-center relative animate-fade-in">
        
        <!-- App Icon Badge -->
        <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-[#263D52] flex items-center justify-center mb-5 shadow-sm">
          <span class="text-white text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#D9825B]">CP</span>
        </div>

        <!-- Category Tag Pill -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/50 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold mb-3">
          ${Icons.Sparkles({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
          <span>Collegiate Event Discovery & Clash Guard</span>
        </div>

        <!-- Typography -->
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-2.5 leading-snug">
          Discover Campus Events. <br />
          <span class="text-[#D9825B]">Zero Scheduling Clashes.</span>
        </h1>

        <p class="text-[#777D80] text-sm leading-relaxed max-w-sm mx-auto mb-7 font-sans">
          Curated student discovery feeds, single-tap calendar sync, and clash-proof facility scheduling for campus organizers.
        </p>

        <!-- Feature Pillars in Modern Campus Palette -->
        <div class="grid grid-cols-3 gap-2.5 mb-7 text-left max-w-md mx-auto">
          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#A9BEC4] flex items-center justify-center mb-1.5">
              ${Icons.Sparkles({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Curated Feed</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">3+ Interest Tags</span>
          </div>

          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#D9825B] flex items-center justify-center mb-1.5">
              ${Icons.Ticket({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Digital Passes</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">Calendar Sync</span>
          </div>

          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#E8D8C5] flex items-center justify-center mb-1.5">
              ${Icons.ShieldCheck({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Clash Guard</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">Facility Defense</span>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-2.5">
          <button
            id="btn-start-flow"
            class="w-full py-3.5 rounded-xl bg-[#D9825B] hover:bg-[#c8734c] text-white font-semibold text-sm shadow-subtle flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Begin Guided Onboarding</span>
            <span>→</span>
          </button>

          <div class="grid grid-cols-2 gap-2">
            <button
              id="btn-quick-student"
              class="w-full py-2.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-subtle"
            >
              <span>Student Stream</span>
            </button>

            <button
              id="btn-quick-organizer"
              class="w-full py-2.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#263D52] text-[#263D52] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Organizer Demo</span>
            </button>
          </div>
        </div>

        <!-- Flow Notice -->
        <div class="mt-6 pt-4 border-t border-[#E8D8C5] flex items-center justify-center gap-2 text-xs text-[#777D80]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D9825B]"></span>
          <span>Mapped strictly to the hand-drawn <strong>User Flow Diagram</strong></span>
        </div>

      </div>
    </div>
  `;
};


/* --- src/components/OnboardingScreen.js --- */
// Screen 1: Onboarding (Modern Campus Theme)
// Mandatory: Pick at least 3 Interest Tags



const renderOnboardingScreen = (selectedTags = [], chosenPath = 'student') => {
  const count = selectedTags.length;
  const isUnlocked = count >= 3;
  const needed = Math.max(0, 3 - count);

  return `
    <div class="max-w-2xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Flow Breadcrumb Indicator -->
      <div class="flex items-center justify-between mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/60 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold">
          Screen 1 • Onboarding
        </span>
        <span class="text-xs text-[#777D80] font-medium">Step 1 of 4</span>
      </div>

      <!-- Header & Requirement Alert -->
      <div class="mb-6">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-2">
          Select Your Campus Interests
        </h2>
        <p class="text-[#777D80] text-sm leading-relaxed">
          Choose topics you want in your discovery stream and clash prevention notifications.
        </p>

        <!-- Mandatory 3 Tags Counter Banner -->
        <div class="mt-4 p-4 rounded-2xl ${
          isUnlocked
            ? 'bg-white border-2 border-[#263D52] text-[#202B36]'
            : 'bg-[#F2EFEB] border border-[#E8D8C5] text-[#202B36]'
        } transition-all duration-200 flex items-center justify-between shadow-subtle">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl ${isUnlocked ? 'bg-[#263D52] text-[#D9825B]' : 'bg-[#E8D8C5] text-[#263D52]'} flex items-center justify-center font-bold text-xs">
              ${isUnlocked ? '✓' : '!'}
            </div>
            <div>
              <div class="text-xs font-bold uppercase tracking-wider ${isUnlocked ? 'text-[#263D52]' : 'text-[#D9825B]'}">
                ${isUnlocked ? 'Requirement Satisfied' : 'Mandatory Selection'}
              </div>
              <div class="text-xs text-[#777D80]">
                ${
                  isUnlocked
                    ? `You selected ${count} tags. You can add more or proceed.`
                    : `Pick at least <strong class="text-[#202B36] font-semibold">3 interest tags</strong> to continue (${needed} more needed).`
                }
              </div>
            </div>
          </div>
          <div class="text-right pl-2">
            <span class="text-xl font-bold font-display ${isUnlocked ? 'text-[#263D52]' : 'text-[#D9825B]'}">
              ${count}<span class="text-xs text-[#777D80] font-normal">/3</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Tags Grid: Soft Beige/Dusty Blue unselected, Coral selected -->
      <div class="mb-7">
        <div class="flex items-center justify-between mb-3 text-xs text-[#777D80]">
          <span>Campus Topics (${INTEREST_TAGS.length})</span>
          <span>Tap to select or deselect</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          ${INTEREST_TAGS.map((tag) => {
            const isSelected = selectedTags.includes(tag.label);
            return `
              <button
                type="button"
                class="tag-toggle-btn p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#D9825B] border-[#D9825B] text-white shadow-sm ring-1 ring-[#D9825B]'
                    : 'bg-white border-[#E8D8C5] text-[#263D52] hover:bg-[#F2EFEB] hover:border-[#A9BEC4]'
                }"
                data-tag="${tag.label}"
              >
                <div class="flex items-center gap-2.5 truncate">
                  <span class="text-lg">${tag.icon}</span>
                  <div class="truncate">
                    <div class="text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#202B36]'}">
                      ${tag.label}
                    </div>
                    <div class="text-[10px] capitalize truncate ${isSelected ? 'text-[#F8F7F4]/90' : 'text-[#777D80]'}">
                      ${tag.category}
                    </div>
                  </div>
                </div>

                <div class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] ml-1.5 shrink-0 font-bold ${
                  isSelected
                    ? 'bg-white text-[#D9825B]'
                    : 'border border-[#E8D8C5] text-transparent'
                }">
                  ✓
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Choose Pathway Branch (Student vs Organizer) -->
      <div class="mb-7 pt-4 border-t border-[#E8D8C5]">
        <label class="block text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3">
          Choose Your Pathway to Enter
        </label>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- Student Path Card -->
          <label class="path-select-card p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            chosenPath === 'student'
              ? 'bg-white border-2 border-[#263D52] shadow-sm'
              : 'bg-[#F2EFEB]/60 border-[#E8D8C5] hover:bg-white text-[#777D80]'
          }">
            <input type="radio" name="onboardingPath" value="student" class="sr-only" ${chosenPath === 'student' ? 'checked' : ''}>
            <div class="flex items-start justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-[#263D52] text-white flex items-center justify-center font-bold text-xs">
                STU
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                chosenPath === 'student' ? 'bg-[#263D52] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
              }">
                Screen 2 Flow
              </span>
            </div>
            <div>
              <div class="text-sm font-bold text-[#202B36] mb-1">Student Attendee</div>
              <p class="text-xs text-[#777D80] leading-relaxed">
                Explore personalized feeds, RSVP to events, add to calendars, and access digital check-in passes.
              </p>
            </div>
          </label>

          <!-- Organizer Path Card -->
          <label class="path-select-card p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            chosenPath === 'organizer'
              ? 'bg-white border-2 border-[#D9825B] shadow-sm'
              : 'bg-[#F2EFEB]/60 border-[#E8D8C5] hover:bg-white text-[#777D80]'
          }">
            <input type="radio" name="onboardingPath" value="organizer" class="sr-only" ${chosenPath === 'organizer' ? 'checked' : ''}>
            <div class="flex items-start justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-[#D9825B] text-white flex items-center justify-center font-bold text-xs">
                ORG
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                chosenPath === 'organizer' ? 'bg-[#D9825B] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
              }">
                Screen 5 Flow
              </span>
            </div>
            <div>
              <div class="text-sm font-bold text-[#202B36] mb-1">Campus Organizer</div>
              <p class="text-xs text-[#777D80] leading-relaxed">
                Submit campus event proposals with automated Clash Guard facility detection and slot re-assignment.
              </p>
            </div>
          </label>
        </div>
      </div>

      <!-- Continue Action Button -->
      <div>
        <button
          id="btn-continue-onboarding"
          ${!isUnlocked ? 'disabled' : ''}
          class="w-full py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer ${
            isUnlocked
              ? 'bg-[#263D52] hover:bg-[#202B36] text-white shadow-subtle'
              : 'bg-[#E8D8C5] text-[#777D80] cursor-not-allowed border border-[#E8D8C5]'
          }"
        >
          <span>${
            chosenPath === 'student'
              ? 'Enter Discovery Feed (Screen 2)'
              : 'Open Event Creation Form (Screen 5)'
          }</span>
          <span>→</span>
        </button>

        ${
          !isUnlocked
            ? `<div class="text-center text-xs text-[#D9825B] mt-2 font-medium">
                Pick at least 3 interest tags above to activate the stream
              </div>`
            : ''
        }
      </div>

    </div>
  `;
};


/* --- src/components/DiscoveryFeedScreen.js --- */
// Screen 2: Discovery Feed (Modern Campus Theme)
// Personalized Stream, Search, Filter Pills & Event Cards



const renderDiscoveryFeedScreen = (events = [], userPreferences = {}, activeFilter = 'all', searchQuery = '', bookmarks = []) => {
  const userTags = userPreferences.interestTags || [];

  // Filter events by search query and category filter
  let filtered = events.filter(event => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchVenue = event.venue.toLowerCase().includes(q);
      const matchOrg = event.organizer.toLowerCase().includes(q);
      const matchTag = (event.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchVenue && !matchOrg && !matchTag) return false;
    }

    if (activeFilter === 'personalized') {
      return (event.tags || []).some(t => userTags.includes(t));
    } else if (activeFilter === 'free') {
      return event.isFree;
    } else if (activeFilter === 'bookmarked') {
      return bookmarks.includes(event.id);
    }
    return true;
  });

  const getEventMatchScore = (event) => {
    return (event.tags || []).filter(t => userTags.includes(t)).length;
  };

  filtered.sort((a, b) => {
    const scoreA = getEventMatchScore(a);
    const scoreB = getEventMatchScore(b);
    if (scoreB !== scoreA) return scoreB - scoreA;
    return new Date(a.date) - new Date(b.date);
  });

  const featuredEvent = events.find(e => e.isFeatured) || events[0];

  return `
    <div class="max-w-5xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Top Stream Header Panel -->
      <div class="bg-white rounded-3xl p-5 sm:p-6 mb-6 border border-[#E8D8C5] shadow-card">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/60 text-[#263D52] text-xs font-semibold">
                Screen 2 • Discovery Feed
              </span>
              <span class="text-xs text-[#777D80]">Curated Stream</span>
            </div>
            <h2 class="text-2xl font-bold text-[#202B36] font-display tracking-tight">
              Events Tailored For You
            </h2>
            <div class="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span class="text-xs text-[#777D80]">Selected Interests:</span>
              ${userTags.map(tag => `
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] text-xs font-medium">
                  ${tag}
                </span>
              `).join('')}
              <button id="btn-edit-interests" class="text-xs text-[#D9825B] hover:underline font-semibold ml-1 cursor-pointer">
                Edit Tags
              </button>
            </div>
          </div>

          <!-- Quick Action: Host Event -->
          <div class="flex items-center gap-2 shrink-0">
            <button id="btn-feed-to-organizer" class="px-4 py-2.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-subtle">
              ${Icons.Plus({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
              <span>Host an Event</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Search Bar & Category Filters -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        
        <!-- Search Input (Clean White with Subtle Grey Border) -->
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777D80]">
            ${Icons.Search({ class: 'w-4 h-4' })}
          </div>
          <input
            type="text"
            id="input-feed-search"
            value="${searchQuery}"
            placeholder="Search events by title, club, tag, or venue..."
            class="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
          >
          ${searchQuery ? `
            <button id="btn-clear-search" class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777D80] hover:text-[#202B36] text-xs">
              ✕
            </button>
          ` : ''}
        </div>

        <!-- Category Filters: Soft Beige & Dusty Blue backgrounds, Navy text, Coral selected -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-white text-[#263D52] hover:bg-[#F2EFEB] border border-[#E8D8C5]'
            }"
            data-filter="all"
          >
            All Events (${events.length})
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
              activeFilter === 'personalized'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-[#E8D8C5]/50 text-[#263D52] hover:bg-[#E8D8C5] border border-[#E8D8C5]'
            }"
            data-filter="personalized"
          >
            <span>★ For You</span>
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'free'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-[#A9BEC4]/20 text-[#263D52] hover:bg-[#A9BEC4]/40 border border-[#A9BEC4]/40'
            }"
            data-filter="free"
          >
            Free Pass
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
              activeFilter === 'bookmarked'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-white text-[#263D52] hover:bg-[#F2EFEB] border border-[#E8D8C5]'
            }"
            data-filter="bookmarked"
          >
            <span>Saved (${bookmarks.length})</span>
          </button>
        </div>
      </div>

      <!-- Spotlight Hero Event (If Available) -->
      ${featuredEvent && !searchQuery && activeFilter === 'all' ? `
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2.5 text-xs">
            <span class="font-bold text-[#202B36] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              ${Icons.Sparkles({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
              Campus Spotlight
            </span>
            <span class="text-[#D9825B] text-xs font-semibold">Flagship Event</span>
          </div>

          <div class="bg-white rounded-3xl overflow-hidden border border-[#E8D8C5] shadow-card group transition-shadow hover:shadow-card-hover">
            <div class="grid grid-cols-1 md:grid-cols-12">
              <div class="md:col-span-7 relative h-60 sm:h-72 overflow-hidden bg-[#202B36]">
                <img src="${featuredEvent.image}" alt="${featuredEvent.title}" class="w-full h-full object-cover event-img-zoom">
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                  <span class="px-2.5 py-1 rounded-full bg-[#D9825B] text-white text-[10px] font-bold uppercase tracking-wider">
                    Spotlight
                  </span>
                  <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#202B36] text-[10px] font-bold">
                    ${featuredEvent.date}
                  </span>
                </div>
              </div>

              <div class="md:col-span-5 p-6 flex flex-col justify-between">
                <div>
                  <div class="text-[11px] font-semibold text-[#D9825B] uppercase tracking-wider mb-1">
                    ${featuredEvent.venue}
                  </div>
                  <h3 class="text-xl font-bold text-[#202B36] font-display mb-2 leading-tight">
                    ${featuredEvent.title}
                  </h3>
                  <p class="text-xs text-[#777D80] line-clamp-3 leading-relaxed mb-4">
                    ${featuredEvent.tagline || featuredEvent.description}
                  </p>
                </div>

                <div class="pt-3 border-t border-[#E8D8C5] flex items-center justify-between">
                  <span class="text-xs text-[#777D80]">
                    By <strong class="text-[#202B36]">${featuredEvent.organizer}</strong>
                  </span>
                  <button
                    class="btn-view-details px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    data-event-id="${featuredEvent.id}"
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Feed Grid Section -->
      <div class="mb-4 flex items-center justify-between text-xs text-[#777D80]">
        <span class="font-bold text-[#202B36] text-sm">
          ${filtered.length} Event${filtered.length === 1 ? '' : 's'} Found
        </span>
        <span>Tap any card to view event specifications</span>
      </div>

      ${filtered.length === 0 ? `
        <div class="bg-white rounded-3xl p-10 text-center border border-[#E8D8C5]">
          <div class="text-3xl mb-2 text-[#777D80]">🔍</div>
          <h3 class="text-base font-bold text-[#202B36] mb-1">No Matching Events Found</h3>
          <p class="text-xs text-[#777D80] max-w-sm mx-auto mb-4">
            Try adjusting your search query, selecting different topic filters, or hosting an event.
          </p>
          <button id="btn-reset-filters" class="px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold cursor-pointer">
            Reset Filters
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(event => {
            const matchCount = getEventMatchScore(event);
            const isBookmarked = bookmarks.includes(event.id);
            const capacityRatio = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
            const spotsRemaining = Math.max(0, event.capacity - event.registeredCount);

            return `
              <div class="campus-card flex flex-col justify-between group overflow-hidden">
                <div>
                  <!-- Card Image Header -->
                  <div class="relative h-44 overflow-hidden bg-[#202B36]">
                    <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover event-img-zoom">

                    <!-- Top Pill Badges -->
                    <div class="absolute top-3 inset-x-3 flex items-center justify-between">
                      <div class="flex items-center gap-1.5">
                        <span class="px-2.5 py-1 rounded-lg bg-white/95 text-[11px] font-bold text-[#202B36] shadow-xs">
                          ${event.date}
                        </span>
                        ${matchCount > 0 ? `
                          <span class="px-2 py-0.5 rounded-lg bg-[#263D52] text-[10px] font-bold text-white shadow-xs">
                            ★ Tag Match
                          </span>
                        ` : ''}
                      </div>

                      <!-- Bookmark Button -->
                      <button
                        class="btn-toggle-bookmark w-8 h-8 rounded-lg bg-white/90 text-[#202B36] hover:text-[#D9825B] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                        data-event-id="${event.id}"
                        title="Bookmark event"
                      >
                        ${Icons.Bookmark({ class: 'w-4 h-4', filled: isBookmarked })}
                      </button>
                    </div>

                    <!-- Bottom Bar on Image -->
                    <div class="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-xs text-white">
                      <span class="px-2 py-0.5 rounded-md bg-[#202B36]/80 text-[11px] font-medium backdrop-blur-xs flex items-center gap-1">
                        ${Icons.Clock({ class: 'w-3 h-3 text-[#A9BEC4]' })}
                        ${formatTimeDisplay(event.startTime)} – ${formatTimeDisplay(event.endTime)}
                      </span>
                      <span class="px-2 py-0.5 rounded-md bg-white text-[#263D52] text-[10px] font-bold uppercase shadow-xs">
                        ${event.isFree ? 'Free Pass' : `₹${event.price}`}
                      </span>
                    </div>
                  </div>

                  <!-- Card Body -->
                  <div class="p-4 sm:p-5">
                    <!-- Title & Tagline -->
                    <h4 class="text-base font-bold text-[#202B36] group-hover:text-[#263D52] transition-colors line-clamp-1 mb-1 font-display">
                      ${event.title}
                    </h4>
                    <p class="text-xs text-[#777D80] line-clamp-2 mb-3 leading-relaxed">
                      ${event.tagline || event.description}
                    </p>

                    <!-- Venue & Organizer -->
                    <div class="space-y-1 mb-3 text-xs text-[#777D80]">
                      <div class="flex items-center gap-1.5 truncate">
                        ${Icons.MapPin({ class: 'w-3.5 h-3.5 text-[#D9825B] shrink-0' })}
                        <span class="truncate text-[#202B36] font-medium">${event.venue}</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        ${Icons.Users({ class: 'w-3.5 h-3.5 text-[#263D52] shrink-0' })}
                        <span>By <strong>${event.organizer}</strong></span>
                      </div>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1 mb-3">
                      ${(event.tags || []).slice(0, 3).map(t => {
                        const isMatch = userTags.includes(t);
                        return `
                          <span class="px-2 py-0.5 rounded-md text-[10px] font-medium ${
                            isMatch
                              ? 'bg-[#E8D8C5] text-[#263D52] font-semibold border border-[#E8D8C5]'
                              : 'bg-[#F8F7F4] text-[#777D80] border border-[#E8D8C5]'
                          }">
                            ${t}
                          </span>
                        `;
                      }).join('')}
                    </div>

                    <!-- Capacity Progress -->
                    <div class="pt-2.5 border-t border-[#E8D8C5]">
                      <div class="flex items-center justify-between text-[11px] mb-1">
                        <span class="text-[#777D80]">Capacity Status</span>
                        <span class="font-semibold ${spotsRemaining <= 15 ? 'text-[#D9825B]' : 'text-[#202B36]'}">
                          ${event.registeredCount} / ${event.capacity} spots
                        </span>
                      </div>
                      <div class="w-full h-1.5 bg-[#F2EFEB] rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all duration-300 ${
                          capacityRatio > 85 ? 'bg-[#D9825B]' : 'bg-[#263D52]'
                        }" style="width: ${capacityRatio}%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card Footer Button -->
                <div class="p-4 sm:p-5 pt-0">
                  <button
                    class="btn-view-details w-full py-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#263D52] text-[#263D52] hover:text-white border border-[#E8D8C5] hover:border-[#263D52] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    data-event-id="${event.id}"
                  >
                    <span>View Event Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

    </div>
  `;
};


/* --- src/components/EventDetailsScreen.js --- */
// Screen 3: Event Details (Modern Campus Theme)
// Time, Venue, Agenda Schedule, [Add to Calendar] & [Register]



const renderEventDetailsScreen = (event, isRegistered = false, isBookmarked = false) => {
  if (!event) {
    return `
      <div class="max-w-2xl mx-auto py-12 px-4 text-center">
        <h3 class="text-xl font-bold text-[#202B36] mb-2">Event Not Found</h3>
        <button id="btn-back-to-feed" class="px-4 py-2 bg-[#263D52] text-white rounded-xl text-xs font-semibold cursor-pointer">
          Back to Discovery Feed
        </button>
      </div>
    `;
  }

  const spotsRemaining = Math.max(0, event.capacity - event.registeredCount);
  const capacityPct = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));

  return `
    <div class="max-w-4xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Top Navigation & Flow Breadcrumb -->
      <div class="flex items-center justify-between mb-4">
        <button
          id="btn-back-to-feed"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F2EFEB] border border-[#E8D8C5] text-[#263D52] text-xs font-semibold transition-colors cursor-pointer shadow-subtle"
        >
          ${Icons.ArrowLeft({ class: 'w-3.5 h-3.5' })}
          <span>Back to Feed (Screen 2)</span>
        </button>

        <div class="flex items-center gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/60 text-[#263D52] text-xs font-semibold">
            Screen 3 • Event Details
          </span>
          <button
            class="btn-toggle-bookmark p-2 rounded-xl bg-white hover:bg-[#F2EFEB] border border-[#E8D8C5] text-[#202B36] hover:text-[#D9825B] transition-colors cursor-pointer shadow-subtle"
            data-event-id="${event.id}"
            title="Bookmark Event"
          >
            ${Icons.Bookmark({ class: 'w-4 h-4', filled: isBookmarked })}
          </button>
        </div>
      </div>

      <!-- Hero Banner & Information Card -->
      <div class="bg-white rounded-3xl overflow-hidden border border-[#E8D8C5] mb-6 shadow-card">
        <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-[#202B36]">
          <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#202B36] via-[#202B36]/40 to-transparent"></div>

          <!-- Top Status Pills -->
          <div class="absolute top-4 inset-x-4 flex items-center justify-between">
            <span class="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#202B36] shadow-xs">
              Campus Verified Event
            </span>
            <span class="px-3 py-1 rounded-full ${
              spotsRemaining <= 15 ? 'bg-[#D9825B] text-white' : 'bg-[#263D52] text-white'
            } text-xs font-bold uppercase tracking-wider shadow-xs">
              ${spotsRemaining <= 15 ? `${spotsRemaining} spots remaining` : 'Registrations Open'}
            </span>
          </div>

          <!-- Bottom Title Bar on Image -->
          <div class="absolute bottom-4 inset-x-4 sm:inset-x-6">
            <div class="flex flex-wrap gap-1.5 mb-2">
              ${(event.tags || []).map(t => `
                <span class="px-2.5 py-0.5 rounded-md bg-white/90 text-[#263D52] text-xs font-bold shadow-xs">
                  ${t}
                </span>
              `).join('')}
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
              ${event.title}
            </h1>
          </div>
        </div>

        <!-- Quick Info Ribbon -->
        <div class="p-5 sm:p-6 bg-[#F8F7F4] border-t border-[#E8D8C5] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Date & Time -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-[#E8D8C5] text-[#D9825B] flex items-center justify-center shrink-0 shadow-subtle">
              ${Icons.Calendar({ class: 'w-5 h-5' })}
            </div>
            <div>
              <div class="text-[11px] text-[#777D80] uppercase font-bold tracking-wider">Date & Time</div>
              <div class="text-xs font-bold text-[#202B36]">${event.date}</div>
              <div class="text-[11px] text-[#777D80]">
                ${formatTimeDisplay(event.startTime)} – ${formatTimeDisplay(event.endTime)}
              </div>
            </div>
          </div>

          <!-- Campus Venue -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-[#E8D8C5] text-[#263D52] flex items-center justify-center shrink-0 shadow-subtle">
              ${Icons.MapPin({ class: 'w-5 h-5' })}
            </div>
            <div>
              <div class="text-[11px] text-[#777D80] uppercase font-bold tracking-wider">Campus Venue</div>
              <div class="text-xs font-bold text-[#202B36] truncate max-w-[180px]">${event.venue}</div>
              <button id="btn-view-venue-map" class="text-[11px] text-[#D9825B] hover:underline font-semibold cursor-pointer">
                View Facility Location
              </button>
            </div>
          </div>

          <!-- Host / Organizer -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-[#E8D8C5] text-[#263D52] flex items-center justify-center shrink-0 shadow-subtle">
              ${Icons.Users({ class: 'w-5 h-5' })}
            </div>
            <div>
              <div class="text-[11px] text-[#777D80] uppercase font-bold tracking-wider">Organized By</div>
              <div class="text-xs font-bold text-[#202B36] truncate max-w-[180px]">${event.organizer}</div>
              <div class="text-[11px] text-[#777D80]">${event.organizerEmail || 'campus.club@campus.edu'}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Panel: Strictly [Add to Calendar] & [Register] -->
      <div class="bg-white rounded-2xl p-5 mb-6 border border-[#E8D8C5] shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="w-full sm:w-auto">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-xs text-[#777D80]">RSVP Availability:</span>
            <span class="text-xs font-bold text-[#202B36]">${event.registeredCount} / ${event.capacity} booked</span>
            <span class="text-[10px] bg-[#E8D8C5]/50 text-[#263D52] px-2 py-0.5 rounded-full font-bold">
              ${capacityPct}% Filled
            </span>
          </div>
          <div class="w-full sm:w-64 h-2 bg-[#F2EFEB] rounded-full overflow-hidden">
            <div class="h-full bg-[#263D52] rounded-full transition-all duration-300" style="width: ${capacityPct}%"></div>
          </div>
        </div>

        <!-- The Two Main Flow Buttons from Diagram -->
        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          
          <!-- [Add to Calendar] Action -->
          <div class="relative group w-full sm:w-auto">
            <button
              id="btn-calendar-dropdown-toggle"
              class="w-full sm:w-auto px-4 py-3 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#263D52] text-[#263D52] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-subtle"
            >
              ${Icons.Calendar({ class: 'w-4 h-4 text-[#D9825B]' })}
              <span>[Add to Calendar]</span>
              <span class="text-[10px] text-[#777D80]">▼</span>
            </button>

            <!-- Dropdown Menu -->
            <div id="calendar-dropdown-menu" class="hidden absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-[#E8D8C5] shadow-modal p-2 z-50 animate-slide-up">
              <a
                id="link-google-calendar"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#202B36] hover:bg-[#F2EFEB] transition-colors cursor-pointer font-medium"
              >
                <span>📅 Google Calendar</span>
              </a>
              <button
                id="btn-download-ics"
                class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#202B36] hover:bg-[#F2EFEB] transition-colors text-left cursor-pointer font-medium"
              >
                <span>🍏 Apple / Outlook (.ics)</span>
              </button>
            </div>
          </div>

          <!-- [Register] Action (Muted Coral CTA) -->
          <button
            id="btn-open-register-modal"
            class="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs transition-colors shadow-subtle flex items-center justify-center gap-2 cursor-pointer ${
              isRegistered
                ? 'bg-[#263D52] hover:bg-[#202B36] text-white'
                : 'bg-[#D9825B] hover:bg-[#c8734c] text-white'
            }"
          >
            ${isRegistered ? Icons.CheckCircle2({ class: 'w-4 h-4' }) : Icons.Ticket({ class: 'w-4 h-4' })}
            <span>${isRegistered ? 'Registered • View Pass' : '[Register Now]'}</span>
            <span>→</span>
          </button>

        </div>
      </div>

      <!-- Main Event Description & Hourly Agenda -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Left 2 Cols: Description & Agenda -->
        <div class="md:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8D8C5] shadow-card">
            <h3 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3 flex items-center gap-2">
              ${Icons.Info({ class: 'w-4 h-4 text-[#D9825B]' })}
              About This Event
            </h3>
            <p class="text-xs sm:text-sm text-[#777D80] leading-relaxed whitespace-pre-line">
              ${event.description}
            </p>
          </div>

          <!-- Hourly Agenda Schedule -->
          ${event.agenda && event.agenda.length > 0 ? `
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8D8C5] shadow-card">
              <h3 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-4 flex items-center gap-2">
                ${Icons.Clock({ class: 'w-4 h-4 text-[#263D52]' })}
                Official Event Schedule
              </h3>

              <div class="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E8D8C5]">
                ${event.agenda.map((item, idx) => `
                  <div class="relative flex items-start gap-3.5 text-xs">
                    <div class="w-7 h-7 rounded-full bg-[#F8F7F4] border-2 border-[#263D52] text-[#263D52] flex items-center justify-center font-bold text-[10px] shrink-0 z-10">
                      ${idx + 1}
                    </div>
                    <div class="bg-[#F8F7F4] p-3 rounded-xl border border-[#E8D8C5] flex-1">
                      <div class="font-bold text-[#D9825B] text-xs mb-0.5">${item.time}</div>
                      <div class="text-[#202B36] font-semibold text-xs">${item.title}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Right 1 Col: Inclusions & Guidelines -->
        <div class="space-y-4">
          ${event.perks && event.perks.length > 0 ? `
            <div class="bg-white rounded-2xl p-5 border border-[#E8D8C5] shadow-card">
              <h4 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3">
                Included Benefits
              </h4>
              <ul class="space-y-2 text-xs text-[#777D80]">
                ${event.perks.map(p => `
                  <li class="flex items-center gap-2">
                    <span class="text-[#263D52] font-bold">✓</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          ${event.requirements && event.requirements.length > 0 ? `
            <div class="bg-white rounded-2xl p-5 border border-[#E8D8C5] shadow-card">
              <h4 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3">
                Participant Checklist
              </h4>
              <ul class="space-y-2 text-xs text-[#777D80]">
                ${event.requirements.map(r => `
                  <li class="flex items-center gap-2">
                    <span class="text-[#D9825B] font-bold">•</span>
                    <span>${r}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="p-4 rounded-2xl bg-[#E8D8C5]/30 border border-[#E8D8C5] text-xs">
            <div class="font-bold text-[#263D52] mb-1">Pathway Guidance</div>
            <p class="text-[11px] text-[#777D80] leading-relaxed">
              Registering advances you to <strong>Screen 4: Confirmation</strong> where you'll receive your scannable campus pass and reminder options.
            </p>
          </div>
        </div>

      </div>

    </div>
  `;
};


/* --- src/components/ConfirmationScreen.js --- */
// Screen 4: Confirmation (Modern Campus Theme)
// Reminders, Social Share, Dynamic Pass & QR Ticket



const renderConfirmationScreen = (registration, event) => {
  if (!registration || !event) {
    return `
      <div class="max-w-md mx-auto py-12 px-4 text-center">
        <h3 class="text-lg font-bold text-[#202B36] mb-2">No Registration Found</h3>
        <button id="btn-back-to-feed" class="px-4 py-2 bg-[#263D52] text-white rounded-xl text-xs font-semibold cursor-pointer">
          Back to Feed
        </button>
      </div>
    `;
  }

  return `
    <div class="max-w-2xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-center">
      
      <!-- Flow Breadcrumb Indicator -->
      <div class="flex items-center justify-between mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/60 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold">
          Screen 4 • Confirmation
        </span>
        <span class="text-xs text-[#777D80] font-medium">Student Path Complete</span>
      </div>

      <!-- Success Header -->
      <div class="mb-6">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-[#263D52] flex items-center justify-center text-2xl text-[#D9825B] font-bold shadow-subtle mb-3">
          ✓
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-1">
          Registration Confirmed!
        </h2>
        <p class="text-xs sm:text-sm text-[#777D80] max-w-sm mx-auto">
          Your digital campus pass is ready. Add the event to your calendar and share with peers.
        </p>
      </div>

      <!-- Digital Pass Ticket Card in Modern Campus Palette -->
      <div class="ticket-pass max-w-md mx-auto mb-6 text-left p-6 relative">
        <div class="ticket-notch-left"></div>
        <div class="ticket-notch-right"></div>

        <!-- Ticket Header -->
        <div class="flex items-center justify-between border-b border-[#E8D8C5] pb-3.5 mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-[#263D52] flex items-center justify-center text-white font-bold text-xs">
              CP
            </div>
            <div>
              <div class="font-bold text-[#202B36] text-xs uppercase tracking-wider font-display">Campus Pass</div>
              <div class="text-[10px] text-[#D9825B] font-mono font-semibold">${registration.ticketId}</div>
            </div>
          </div>
          <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#263D52] border border-[#E8D8C5] text-[10px] font-bold uppercase">
            Confirmed RSVP
          </span>
        </div>

        <!-- Event Particulars -->
        <div class="mb-4">
          <h3 class="text-base font-bold text-[#202B36] font-display mb-1">
            ${event.title}
          </h3>
          <p class="text-xs text-[#777D80] mb-3">
            Hosted by <strong class="text-[#202B36]">${event.organizer}</strong>
          </p>

          <div class="grid grid-cols-2 gap-3 text-xs bg-[#F8F7F4] p-3 rounded-xl border border-[#E8D8C5]">
            <div>
              <div class="text-[10px] text-[#777D80] uppercase font-semibold">Date & Time</div>
              <div class="font-bold text-[#202B36] text-xs">${event.date}</div>
              <div class="text-[11px] text-[#D9825B] font-medium">${formatTimeDisplay(event.startTime)}</div>
            </div>
            <div>
              <div class="text-[10px] text-[#777D80] uppercase font-semibold">Campus Venue</div>
              <div class="font-bold text-[#202B36] text-xs truncate">${event.venue}</div>
              <div class="text-[11px] text-[#263D52]">Gate Check-in #2</div>
            </div>
          </div>
        </div>

        <!-- Attendee Particulars & Crisp Outline QR Code -->
        <div class="pt-4 border-t border-dashed border-[#E8D8C5] flex items-center justify-between gap-4">
          <div>
            <div class="text-[10px] text-[#777D80] uppercase font-semibold">Pass Holder</div>
            <div class="text-xs font-bold text-[#202B36]">${registration.attendeeName || 'Campus Student'}</div>
            <div class="text-[10px] text-[#777D80] font-mono">${registration.studentId || 'STU-2026-8942'}</div>
          </div>

          <!-- Crisp SVG QR Graphic in Midnight Navy & Charcoal -->
          <div class="p-2 bg-[#F8F7F4] rounded-xl border border-[#E8D8C5] shrink-0">
            <svg class="w-14 h-14" viewBox="0 0 100 100" fill="none">
              <!-- Corner Finder 1 -->
              <rect x="5" y="5" width="28" height="28" fill="#202B36" rx="4"/>
              <rect x="11" y="11" width="16" height="16" fill="white" rx="2"/>
              <rect x="15" y="15" width="8" height="8" fill="#263D52"/>
              <!-- Corner Finder 2 -->
              <rect x="67" y="5" width="28" height="28" fill="#202B36" rx="4"/>
              <rect x="73" y="11" width="16" height="16" fill="white" rx="2"/>
              <rect x="77" y="15" width="8" height="8" fill="#263D52"/>
              <!-- Corner Finder 3 -->
              <rect x="5" y="67" width="28" height="28" fill="#202B36" rx="4"/>
              <rect x="11" y="73" width="16" height="16" fill="white" rx="2"/>
              <rect x="15" y="77" width="8" height="8" fill="#263D52"/>
              <!-- QR Data Matrix Points -->
              <rect x="42" y="8" width="6" height="6" fill="#202B36"/>
              <rect x="52" y="16" width="6" height="6" fill="#D9825B"/>
              <rect x="42" y="26" width="6" height="6" fill="#202B36"/>
              <rect x="8" y="42" width="6" height="6" fill="#202B36"/>
              <rect x="20" y="50" width="6" height="6" fill="#202B36"/>
              <rect x="40" y="40" width="8" height="8" fill="#D9825B"/>
              <rect x="52" y="44" width="6" height="6" fill="#202B36"/>
              <rect x="44" y="56" width="6" height="6" fill="#202B36"/>
              <rect x="64" y="40" width="6" height="6" fill="#202B36"/>
              <rect x="76" y="48" width="6" height="6" fill="#202B36"/>
              <rect x="84" y="58" width="6" height="6" fill="#263D52"/>
              <rect x="44" y="72" width="6" height="6" fill="#202B36"/>
              <rect x="54" y="82" width="6" height="6" fill="#202B36"/>
              <rect x="70" y="76" width="6" height="6" fill="#D9825B"/>
              <rect x="82" y="84" width="6" height="6" fill="#202B36"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Reminders & Share Action Section (Strictly from User Flow Diagram) -->
      <div class="max-w-md mx-auto space-y-3 mb-6 text-left">
        
        <!-- Smart Reminders -->
        <div class="bg-white rounded-2xl p-4 border border-[#E8D8C5] shadow-subtle">
          <div class="flex items-center justify-between mb-2.5">
            <span class="text-xs font-bold text-[#202B36] uppercase tracking-wider flex items-center gap-1.5">
              ${Icons.Bell({ class: 'w-4 h-4 text-[#D9825B]' })}
              Event Reminders
            </span>
            <span class="text-[10px] text-[#263D52] bg-[#E8D8C5]/50 px-2 py-0.5 rounded-full font-bold">Enabled</span>
          </div>

          <div class="space-y-2 text-xs text-[#202B36]">
            <label class="flex items-center justify-between p-2 rounded-xl bg-[#F8F7F4] border border-[#E8D8C5] cursor-pointer">
              <span>24 Hours Prior Notification</span>
              <input type="checkbox" id="toggle-reminder-24h" checked class="rounded text-[#263D52] focus:ring-0">
            </label>
            <label class="flex items-center justify-between p-2 rounded-xl bg-[#F8F7F4] border border-[#E8D8C5] cursor-pointer">
              <span>1 Hour Prior with Campus Directions</span>
              <input type="checkbox" id="toggle-reminder-1h" checked class="rounded text-[#263D52] focus:ring-0">
            </label>
          </div>
        </div>

        <!-- Social Share Actions -->
        <div class="bg-white rounded-2xl p-4 border border-[#E8D8C5] shadow-subtle">
          <span class="text-xs font-bold text-[#202B36] uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
            ${Icons.Share2({ class: 'w-4 h-4 text-[#263D52]' })}
            Share With Classmates
          </span>

          <div class="grid grid-cols-2 gap-2">
            <button
              id="btn-share-whatsapp"
              class="py-2.5 px-3 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/50 border border-[#E8D8C5] text-[#202B36] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>💬 WhatsApp</span>
            </button>
            <button
              id="btn-copy-link"
              class="py-2.5 px-3 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/50 border border-[#E8D8C5] text-[#202B36] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>🔗 Copy Link</span>
            </button>
          </div>
        </div>

        <!-- Calendar Sync Options -->
        <div class="grid grid-cols-2 gap-2">
          <a
            id="btn-confirm-gcal"
            href="#"
            target="_blank"
            class="py-2.5 px-3 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-subtle"
          >
            ${Icons.Calendar({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
            <span>Google Calendar</span>
          </a>
          <button
            id="btn-confirm-ics"
            class="py-2.5 px-3 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#263D52] text-[#263D52] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>🍏 Download .ics</span>
          </button>
        </div>

      </div>

      <!-- Navigation CTAs -->
      <div class="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2">
        <button
          id="btn-back-to-feed"
          class="w-full py-3 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#202B36] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>← Back to Discovery Feed</span>
        </button>

        <button
          id="btn-switch-to-organizer-flow"
          class="w-full py-3 rounded-xl bg-[#D9825B] hover:bg-[#c8734c] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-subtle"
        >
          <span>Explore Organizer Path (Screen 5) →</span>
        </button>
      </div>

    </div>
  `;
};


/* --- src/components/EventFormScreen.js --- */
// Screen 5: Organizer Event Form (Modern Campus Theme)
// Enter title, Time, venue, capacity, etc.



const renderEventFormScreen = (formData = {}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const currentData = {
    title: formData.title || '',
    organizer: formData.organizer || 'Autonomous Robotics & AI Guild',
    organizerEmail: formData.organizerEmail || 'robotics@campus.edu',
    date: formData.date || defaultDate,
    startTime: formData.startTime || '14:00',
    endTime: formData.endTime || '17:00',
    venue: formData.venue || CAMPUS_VENUES[1].name,
    venueId: formData.venueId || CAMPUS_VENUES[1].id,
    capacity: formData.capacity || 75,
    tagline: formData.tagline || 'Autonomous Drone Obstacle Navigation & CV Teardown',
    description: formData.description || 'Hands-on arena test for student-built autonomous quadcopters. Computer vision obstacle detection followed by engineering reviews.',
    tags: formData.tags || ['Tech & AI', 'Science & Research'],
    image: formData.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    isFree: formData.isFree !== undefined ? formData.isFree : true,
    price: formData.price || 0
  };

  return `
    <div class="max-w-3xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Flow Breadcrumb Indicator -->
      <div class="flex items-center justify-between mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/60 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold">
          Screen 5 • Organizer Suite
        </span>
        <span class="text-xs text-[#777D80] font-medium">Step 1 of 2 (Organizer Path)</span>
      </div>

      <!-- Title & Intro -->
      <div class="mb-6">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-1.5">
          Campus Event Creator
        </h2>
        <p class="text-xs sm:text-sm text-[#777D80]">
          Schedule collegiate events with automated Clash Guard facility overlap verification.
        </p>

        <!-- Quick Demo Pre-fill Bar in Modern Campus Palette -->
        <div class="mt-4 p-3.5 rounded-2xl bg-white border border-[#E8D8C5] shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="text-xs text-[#777D80]">
            <span class="font-bold text-[#202B36]">Interactive Test Presets:</span>
            <span>Populate sample scenarios to verify Screen 6</span>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              id="btn-load-clash-demo"
              class="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#D9825B] text-[#D9825B] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              title="Loads an event colliding with HackPulse in Lab 302 tomorrow to test Screen 6 Clash Guard!"
            >
              <span>● Test Clash Scenario</span>
            </button>
            <button
              type="button"
              id="btn-load-clean-demo"
              class="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#263D52] text-[#263D52] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              title="Loads an event in an open slot with zero conflicts"
            >
              <span>○ Test Free Slot</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Event Form -->
      <form id="form-create-event" class="space-y-5">
        
        <!-- Core Event Particulars -->
        <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8D8C5] shadow-card space-y-4">
          <h3 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-2">
            1. Event Overview
          </h3>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Event Title <span class="text-[#D9825B]">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value="${currentData.title}"
              placeholder="e.g. Autonomous Robotics Showcase & Drone Arena"
              class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
            >
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Hosting Organization / Society <span class="text-[#D9825B]">*</span>
              </label>
              <input
                type="text"
                name="organizer"
                required
                value="${currentData.organizer}"
                placeholder="e.g. Robotics & AI Club"
                class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
              >
            </div>
            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Official Contact Email
              </label>
              <input
                type="email"
                name="organizerEmail"
                value="${currentData.organizerEmail}"
                placeholder="robotics@campus.edu"
                class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
              >
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Tagline / Brief Summary
            </label>
            <input
              type="text"
              name="tagline"
              value="${currentData.tagline}"
              placeholder="A concise summary of the event"
              class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
            >
          </div>

          <!-- Interest Category Selector -->
          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1.5">
              Event Categories (Select relevant tags)
            </label>
            <div class="flex flex-wrap gap-1.5" id="form-tag-container">
              ${INTEREST_TAGS.map(t => {
                const isSelected = currentData.tags.includes(t.label);
                return `
                  <button
                    type="button"
                    class="btn-form-tag px-2.5 py-1 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#D9825B] text-white font-semibold shadow-xs'
                        : 'bg-[#F8F7F4] text-[#202B36] border border-[#E8D8C5] hover:border-[#263D52]'
                    }"
                    data-tag="${t.label}"
                  >
                    <span>${t.icon}</span> ${t.label}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Venue & Time Scheduling (Targeted by Clash Guard) -->
        <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8D8C5] shadow-card space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold text-[#202B36] uppercase tracking-wider flex items-center gap-1.5">
              ${Icons.ShieldCheck({ class: 'w-4 h-4 text-[#263D52]' })}
              2. Facility & Time Window (Monitored by Clash Guard)
            </h3>
            <span class="text-[10px] bg-[#E8D8C5]/60 text-[#263D52] font-semibold px-2 py-0.5 rounded-full border border-[#E8D8C5]">
              Active Guard
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Event Date <span class="text-[#D9825B]">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                value="${currentData.date}"
                class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Start Time <span class="text-[#D9825B]">*</span>
              </label>
              <input
                type="time"
                name="startTime"
                required
                value="${currentData.startTime}"
                class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                End Time <span class="text-[#D9825B]">*</span>
              </label>
              <input
                type="time"
                name="endTime"
                required
                value="${currentData.endTime}"
                class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
              >
            </div>
          </div>

          <!-- Campus Venue Selector -->
          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Campus Venue / Room <span class="text-[#D9825B]">*</span>
            </label>
            <select
              name="venue"
              required
              class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52] shadow-subtle"
            >
              ${CAMPUS_VENUES.map(v => `
                <option value="${v.name}" ${v.name === currentData.venue ? 'selected' : ''}>
                  ${v.name} • ${v.building} (Capacity: ${v.capacity})
                </option>
              `).join('')}
            </select>
            <div class="mt-1 text-[11px] text-[#777D80] flex items-center justify-between">
              <span>Clash Guard will check for double-booking at this location.</span>
              <button type="button" id="btn-view-venue-capacities" class="text-[#263D52] hover:underline font-medium">
                View venue specs
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Attendee Capacity Cap
              </label>
              <input
                type="number"
                name="capacity"
                min="10"
                max="2000"
                value="${currentData.capacity}"
                class="w-full px-3.5 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36]"
              >
            </div>

            <div>
              <label class="block text-xs font-bold text-[#202B36] mb-1">
                Pass Type
              </label>
              <div class="flex items-center gap-4 pt-1.5">
                <label class="flex items-center gap-1.5 text-xs text-[#202B36] cursor-pointer">
                  <input type="radio" name="isFree" value="true" checked class="text-[#263D52]">
                  <span>Free Student Pass</span>
                </label>
                <label class="flex items-center gap-1.5 text-xs text-[#202B36] cursor-pointer">
                  <input type="radio" name="isFree" value="false" class="text-[#263D52]">
                  <span>Ticketed (₹)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Description & Media -->
        <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8D8C5] shadow-card space-y-4">
          <h3 class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-2">
            3. Details & Photography
          </h3>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Event Description & Schedule Notes
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Outline event details, topics covered, and agenda."
              class="w-full px-3.5 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
            >${currentData.description}</textarea>
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Cover Image URL (Natural Photography)
            </label>
            <input
              type="url"
              name="image"
              value="${currentData.image}"
              class="w-full px-3.5 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36]"
            >
          </div>
        </div>

        <!-- Submit to Screen 6: Clash Guard -->
        <div class="pt-2">
          <button
            type="submit"
            id="btn-submit-to-clashguard"
            class="w-full py-3.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold text-sm shadow-subtle flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            ${Icons.ShieldCheck({ class: 'w-4 h-4 text-[#D9825B]' })}
            <span>Run Clash Guard Check (Proceed to Screen 6)</span>
            <span>→</span>
          </button>
          
          <div class="text-center text-[11px] text-[#777D80] mt-2">
            Evaluates real-time venue availability against published campus events.
          </div>
        </div>

      </form>

    </div>
  `;
};


/* --- src/components/ClashGuardScreen.js --- */
// Screen 6: Clash Guard (Modern Campus Theme)
// Implements [pick a slot] and [Admin clash] pathways leading to [Event published]



const renderClashGuardScreen = (proposedEvent, clashResult, adminOverride = null, isPublished = false) => {
  const hasClash = clashResult.hasClash && !adminOverride;

  if (isPublished) {
    return `
      <div class="max-w-xl mx-auto py-10 px-4 text-center animate-fade-in">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-[#263D52] flex items-center justify-center text-3xl text-[#D9825B] shadow-subtle mb-4">
          ✓
        </div>

        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/60 border border-[#E8D8C5] text-[#263D52] text-xs font-bold uppercase tracking-wider mb-2">
          [Event Published] • Milestone Complete
        </span>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display mb-2">
          Your Event is Live!
        </h2>
        <p class="text-sm text-[#777D80] max-w-md mx-auto mb-6">
          "<strong>${proposedEvent.title}</strong>" has been verified by Clash Guard and broadcast to students with matching interests.
        </p>

        <!-- Summary Badge Card -->
        <div class="bg-white rounded-2xl p-5 text-left border border-[#E8D8C5] shadow-card max-w-md mx-auto mb-6 space-y-2 text-xs">
          <div class="flex items-center justify-between text-[#777D80]">
            <span>Date & Time:</span>
            <span class="font-bold text-[#202B36]">${proposedEvent.date} (${formatTimeDisplay(proposedEvent.startTime)} – ${formatTimeDisplay(proposedEvent.endTime)})</span>
          </div>
          <div class="flex items-center justify-between text-[#777D80]">
            <span>Venue:</span>
            <span class="font-bold text-[#263D52]">${proposedEvent.venue}</span>
          </div>
          <div class="flex items-center justify-between text-[#777D80]">
            <span>Clash Status:</span>
            <span class="font-bold ${adminOverride ? 'text-[#D9825B]' : 'text-[#263D52]'}">
              ${adminOverride ? 'Authorized via Admin Waiver' : '100% Conflict-Free'}
            </span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="btn-view-published-in-feed"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold text-xs shadow-subtle flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View in Discovery Feed (Screen 2)</span>
            <span>→</span>
          </button>
          <button
            id="btn-create-another-event"
            class="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#202B36] font-semibold text-xs cursor-pointer"
          >
            <span>Create Another Event</span>
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="max-w-3xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Flow Breadcrumb Indicator -->
      <div class="flex items-center justify-between mb-4">
        <button
          id="btn-back-to-form"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F2EFEB] border border-[#E8D8C5] text-[#263D52] text-xs font-semibold cursor-pointer shadow-subtle"
        >
          ${Icons.ArrowLeft({ class: 'w-3.5 h-3.5' })}
          <span>Edit Form (Screen 5)</span>
        </button>

        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full ${
          hasClash ? 'bg-[#D9825B]/15 text-[#D9825B] border border-[#D9825B]/40' : 'bg-[#E8D8C5]/60 text-[#263D52] border border-[#E8D8C5]'
        } text-xs font-semibold uppercase tracking-wider">
          Screen 6 • Clash Guard Engine
        </span>
      </div>

      <!-- Main Status Banner -->
      ${hasClash ? `
        <!-- CONFLICT DETECTED VIEW -->
        <div class="bg-white rounded-3xl p-6 border-2 border-[#D9825B] shadow-card mb-6 relative">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#D9825B]/10 text-[#D9825B] flex items-center justify-center shrink-0 font-bold text-xl">
              !
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-bold uppercase tracking-wider text-[#D9825B]">
                  Scheduling Overlap Detected
                </span>
                <span class="px-2 py-0.2 rounded bg-[#D9825B] text-white font-bold text-[10px] uppercase">
                  Clash Guard Alert
                </span>
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-[#202B36] font-display mb-1.5">
                Facility Overlap at ${proposedEvent.venue}
              </h2>
              <p class="text-xs sm:text-sm text-[#777D80] leading-relaxed">
                Clash Guard flagged a venue collision. Another student organization is already confirmed in this room during your requested window.
              </p>
            </div>
          </div>

          <!-- Comparison Card: Proposed vs Conflicting -->
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E8D8C5]">
            <!-- Your Proposed Event -->
            <div class="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E8D8C5]">
              <div class="text-[10px] text-[#263D52] uppercase font-bold mb-1">Your Proposed Event</div>
              <div class="font-bold text-[#202B36] text-xs mb-1 truncate">${proposedEvent.title}</div>
              <div class="text-xs text-[#777D80] space-y-0.5">
                <div>Date: <strong class="text-[#202B36]">${proposedEvent.date}</strong></div>
                <div>Time: <strong class="text-[#202B36]">${formatTimeDisplay(proposedEvent.startTime)} – ${formatTimeDisplay(proposedEvent.endTime)}</strong></div>
                <div>Venue: <strong class="text-[#202B36]">${proposedEvent.venue}</strong></div>
              </div>
            </div>

            <!-- Existing Conflicting Event -->
            ${clashResult.conflicts.map(c => `
              <div class="p-3.5 rounded-xl bg-white border border-[#D9825B]/60 shadow-subtle">
                <div class="text-[10px] text-[#D9825B] uppercase font-bold mb-1">Conflicting Existing Booking</div>
                <div class="font-bold text-[#202B36] text-xs mb-1 truncate">${c.event.title}</div>
                <div class="text-xs text-[#777D80] space-y-0.5">
                  <div>Host: <strong class="text-[#202B36]">${c.event.organizer}</strong></div>
                  <div>Booked: <strong class="text-[#D9825B]">${formatTimeDisplay(c.event.startTime)} – ${formatTimeDisplay(c.event.endTime)}</strong></div>
                  <div>Overlap: <strong class="text-[#D9825B] font-bold">${c.overlapDurationMinutes} minutes</strong></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- The Two Resolution Pathways strictly from the User Flow Diagram -->
        <div class="mb-6">
          <div class="text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3">
            Available Resolution Pathways (Choose One)
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- BRANCH A: [pick a slot] -->
            <div class="bg-white rounded-2xl p-5 border border-[#E8D8C5] shadow-card flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-lg bg-[#E8D8C5]/50 text-[#263D52] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    ${Icons.Clock({ class: 'w-3.5 h-3.5 text-[#263D52]' })}
                    Pathway A: [Pick a Slot]
                  </span>
                  <span class="text-[10px] text-[#263D52] font-semibold">Recommended</span>
                </div>

                <h3 class="text-sm font-bold text-[#202B36] mb-1.5">
                  Smart Slot & Venue Recommender
                </h3>
                <p class="text-xs text-[#777D80] mb-4 leading-relaxed">
                  Clash Guard discovered open slots and alternative campus facilities. Tap to auto-assign:
                </p>

                <!-- Recommendation Options -->
                <div class="space-y-2 mb-4">
                  ${(clashResult.recommendations?.timeSlots || []).map(slot => `
                    <button
                      type="button"
                      class="btn-apply-slot w-full p-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 border border-[#E8D8C5] text-left transition-colors cursor-pointer flex items-center justify-between group"
                      data-start="${slot.startTime}"
                      data-end="${slot.endTime}"
                      data-venue="${slot.venue}"
                    >
                      <div>
                        <div class="text-xs font-bold text-[#202B36] group-hover:text-[#263D52]">
                          ${slot.label}
                        </div>
                        <div class="text-[10px] text-[#777D80]">${slot.advantage}</div>
                      </div>
                      <span class="text-xs text-[#263D52] font-bold ml-2">Apply →</span>
                    </button>
                  `).join('')}

                  ${(clashResult.recommendations?.alternativeVenues || []).slice(0, 2).map(v => `
                    <button
                      type="button"
                      class="btn-apply-venue w-full p-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 border border-[#E8D8C5] text-left transition-colors cursor-pointer flex items-center justify-between group"
                      data-venue="${v.venue}"
                      data-venue-id="${v.venueId}"
                    >
                      <div>
                        <div class="text-xs font-bold text-[#202B36] group-hover:text-[#263D52]">
                          ${v.label}
                        </div>
                        <div class="text-[10px] text-[#777D80]">${v.advantage}</div>
                      </div>
                      <span class="text-xs text-[#263D52] font-bold ml-2">Switch →</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="text-[11px] text-[#263D52] bg-[#F8F7F4] p-2.5 rounded-xl border border-[#E8D8C5]">
                Applying any recommendation clears the collision immediately.
              </div>
            </div>

            <!-- BRANCH B: [Admin clash] -->
            <div class="bg-white rounded-2xl p-5 border border-[#E8D8C5] shadow-card flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-lg bg-[#E8D8C5]/50 text-[#D9825B] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    ${Icons.ShieldCheck({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
                    Pathway B: [Admin Clash]
                  </span>
                  <span class="text-[10px] text-[#D9825B] font-semibold">Special Permit</span>
                </div>

                <h3 class="text-sm font-bold text-[#202B36] mb-1.5">
                  Administrative Override Waiver
                </h3>
                <p class="text-xs text-[#777D80] mb-4 leading-relaxed">
                  Have special co-hosting permission, or dividing the facility wing? Request an administrative waiver.
                </p>

                <div class="space-y-3 mb-4 text-xs">
                  <div>
                    <label class="block text-[11px] font-bold text-[#202B36] mb-1">
                      Override Rationale:
                    </label>
                    <select id="select-admin-reason" class="w-full p-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36]">
                      <option value="cohost">Joint / Co-hosted Session with Conflicting Club</option>
                      <option value="partition">Physical Partitioning of Facility (Wing A / Wing B)</option>
                      <option value="faculty">University Faculty / Dean Authorized Session</option>
                      <option value="emergency">Rescheduled Academic Session Waiver</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-[11px] font-bold text-[#202B36] mb-1">
                      Waiver Explanation Note:
                    </label>
                    <textarea id="text-admin-note" rows="2" class="w-full p-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36]" placeholder="Provide brief rationale for concurrent occupancy..."></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  id="btn-trigger-admin-clash"
                  class="w-full py-2.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold text-xs shadow-subtle flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Authorize Admin Waiver & Publish</span>
                  <span>✓</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      ` : `
        <!-- NO CONFLICT VIEW (READY TO PUBLISH) -->
        <div class="bg-white rounded-3xl p-6 border-2 border-[#263D52] shadow-card mb-6 relative">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#263D52] text-[#D9825B] flex items-center justify-center shrink-0 text-xl font-bold">
              ✓
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-bold uppercase tracking-wider text-[#263D52]">
                  Clash Guard Verification Status
                </span>
                <span class="px-2 py-0.2 rounded bg-[#263D52] text-white font-bold text-[10px] uppercase">
                  Verified Clean
                </span>
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-[#202B36] font-display mb-1.5">
                Zero Facility Clashes Detected!
              </h2>
              <p class="text-xs sm:text-sm text-[#777D80] leading-relaxed">
                <strong>${proposedEvent.venue}</strong> is completely free on <strong>${proposedEvent.date}</strong> from <strong>${formatTimeDisplay(proposedEvent.startTime)} to ${formatTimeDisplay(proposedEvent.endTime)}</strong>.
              </p>
              ${adminOverride ? `
                <div class="mt-3 p-2.5 rounded-xl bg-[#E8D8C5]/40 border border-[#E8D8C5] text-xs text-[#202B36]">
                  Administrative Override Authorized: <em>${adminOverride.reason}</em>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Event Verification Summary -->
          <div class="mt-5 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E8D8C5] space-y-2 text-xs">
            <div class="text-[#777D80] uppercase font-bold text-[10px] tracking-wider mb-2">Validated Specifications:</div>
            <div class="grid grid-cols-2 gap-3 text-[#202B36]">
              <div>Title: <strong class="text-[#202B36]">${proposedEvent.title}</strong></div>
              <div>Host: <strong class="text-[#202B36]">${proposedEvent.organizer}</strong></div>
              <div>Date: <strong class="text-[#202B36]">${proposedEvent.date}</strong></div>
              <div>Venue: <strong class="text-[#263D52]">${proposedEvent.venue}</strong></div>
              <div>Time: <strong class="text-[#202B36]">${formatTimeDisplay(proposedEvent.startTime)} – ${formatTimeDisplay(proposedEvent.endTime)}</strong></div>
              <div>Capacity: <strong class="text-[#202B36]">${proposedEvent.capacity} attendees</strong></div>
            </div>
          </div>
        </div>

        <!-- Publish Action strictly from User Flow: [Event Published] -->
        <div class="pt-2">
          <button
            type="button"
            id="btn-publish-event"
            class="w-full py-3.5 rounded-xl bg-[#D9825B] hover:bg-[#c8734c] text-white font-semibold text-sm shadow-subtle flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>[Publish Event to Campus Stream]</span>
            <span>→</span>
          </button>
          <div class="text-center text-[11px] text-[#777D80] mt-2">
            This will immediately publish the event to the student feed and notify interested members.
          </div>
        </div>
      `}

    </div>
  `;
};


/* --- src/components/FlowDiagramModal.js --- */
// Flow Diagram Modal - Visual Interactive Pathway Guide (Modern Campus Theme)
// Displays the exact architectural diagram provided by the user with active step tracking


const renderFlowDiagramModal = (currentScreen, userRole) => {
  return `
    <div id="modal-diagram-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-white w-full max-w-3xl rounded-3xl border border-[#E8D8C5] p-6 max-h-[90vh] overflow-y-auto text-left shadow-modal relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8D8C5] mb-5">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-[#263D52] flex items-center justify-center text-[#D9825B] font-bold text-sm">
              🗺️
            </div>
            <div>
              <h3 class="text-base font-bold text-[#202B36] font-display">
                User Flow Diagram Pathway Map
              </h3>
              <p class="text-[11px] text-[#777D80]">
                Architecture directly mapped from your hand-drawn specification
              </p>
            </div>
          </div>
          <button id="btn-close-diagram-modal" class="p-2 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 text-[#202B36] cursor-pointer text-xs font-semibold">
            ✕ Close
          </button>
        </div>

        <!-- Flow Diagram Visualization -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8D8C5] mb-5 font-sans text-xs">
          
          <!-- START / SPLASH -->
          <div class="flex flex-col items-center">
            <div class="px-4 py-1.5 rounded-full bg-[#263D52] text-white font-bold text-[11px] shadow-xs">
              [START]
            </div>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <button
              class="btn-flow-jump p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                currentScreen === 'splash'
                  ? 'bg-white border-2 border-[#D9825B] text-[#202B36] shadow-subtle ring-1 ring-[#D9825B]'
                  : 'bg-white border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
              }"
              data-screen="splash"
            >
              <div class="font-bold text-xs text-[#202B36]">App Launch / Splash</div>
              <div class="text-[10px] text-[#777D80]">Welcome Overview & Role Shortcuts</div>
            </button>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <!-- SCREEN 1: ONBOARDING -->
            <button
              class="btn-flow-jump p-3 rounded-xl border text-center transition-all cursor-pointer max-w-sm ${
                currentScreen === 'onboarding'
                  ? 'bg-white border-2 border-[#D9825B] text-[#202B36] shadow-subtle ring-1 ring-[#D9825B]'
                  : 'bg-white border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
              }"
              data-screen="onboarding"
            >
              <div class="font-bold text-xs text-[#202B36]">Screen 1 : Onboarding</div>
              <div class="text-[10px] text-[#D9825B] font-semibold mt-0.5">
                ★ Mandatory: Pick at least 3 Interest Tags
              </div>
            </button>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <!-- BRANCHING -->
            <div class="w-full max-w-md flex justify-between items-center text-[#A9BEC4] text-xs px-6">
              <span>┌─────────────</span>
              <span class="text-[#263D52] font-bold text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-[#E8D8C5]">Branching Logic</span>
              <span>─────────────┐</span>
            </div>
          </div>

          <!-- DUAL COLUMNS: STUDENT & ORGANIZER PATH -->
          <div class="grid grid-cols-2 gap-4 mt-2">
            
            <!-- STUDENT PATH COLUMN -->
            <div class="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-[#E8D8C5] shadow-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#263D52] font-bold text-[10px] uppercase mb-2">
                [STUDENT PATH]
              </span>
              <div class="h-3 w-0.5 bg-[#E8D8C5] mb-1"></div>

              <!-- Screen 2 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'feed'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="feed"
              >
                <div class="font-bold text-xs">Screen 2: Discovery Feed</div>
                <div class="text-[10px] text-[#777D80]">(Personalized Stream)</div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 3 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'details'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="details"
              >
                <div class="font-bold text-xs">Screen 3: Event Details</div>
                <div class="text-[10px] text-[#777D80]">(Time, Venue, Agenda)</div>
                <div class="mt-1 flex items-center justify-center gap-1 text-[9px]">
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#263D52]">[Calendar]</span>
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#D9825B] font-semibold">[Register]</span>
                </div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 4 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'confirmation'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="confirmation"
              >
                <div class="font-bold text-xs">Screen 4: Confirmation</div>
                <div class="text-[10px] text-[#777D80]">(Reminders & Share, Pass)</div>
              </button>
            </div>

            <!-- ORGANIZER PATH COLUMN -->
            <div class="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-[#E8D8C5] shadow-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#D9825B] font-bold text-[10px] uppercase mb-2">
                [ORGANIZER PATH]
              </span>
              <div class="h-3 w-0.5 bg-[#E8D8C5] mb-1"></div>

              <!-- Screen 5 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'form'
                    ? 'bg-[#D9825B] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#D9825B]'
                }"
                data-screen="form"
              >
                <div class="font-bold text-xs">Screen 5: Event Form</div>
                <div class="text-[10px] text-[#777D80]">(Title, Time, Venue)</div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 6 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'clashguard'
                    ? 'bg-[#D9825B] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#D9825B]'
                }"
                data-screen="clashguard"
              >
                <div class="font-bold text-xs">Screen 6: Clash Guard</div>
                <div class="text-[10px] text-[#777D80]">(Detects Time Overlap)</div>
                <div class="mt-1 flex items-center justify-center gap-1 text-[9px]">
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#263D52]">[Pick a slot]</span>
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#D9825B] font-semibold">[Admin]</span>
                </div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Published -->
              <div class="w-full p-2 rounded-xl bg-[#F8F7F4] border border-[#E8D8C5] text-center text-[#263D52] font-bold text-xs">
                <div>[Event Published]</div>
                <div class="text-[9px] text-[#777D80]">Live in Campus Feed</div>
              </div>
            </div>

          </div>

          <!-- END -->
          <div class="flex flex-col items-center mt-3">
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>
            <div class="px-4 py-1.5 rounded-full bg-[#202B36] text-white font-bold text-[11px]">
              [END]
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between text-xs text-[#777D80]">
          <span>Tap any block above to jump directly to that screen.</span>
          <button id="btn-close-diagram-bottom" class="px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold cursor-pointer">
            Return to App
          </button>
        </div>

      </div>
    </div>
  `;
};


/* --- src/components/MyPassesModal.js --- */
// My Passes Drawer / Modal (Modern Campus Theme)




const renderMyPassesModal = (registrations = [], allEvents = []) => {
  return `
    <div id="modal-passes-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-white w-full max-w-xl rounded-3xl border border-[#E8D8C5] p-6 max-h-[90vh] overflow-y-auto text-left shadow-modal relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8D8C5] mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-[#263D52] flex items-center justify-center text-[#D9825B] font-bold text-sm">
              🎟️
            </div>
            <div>
              <h3 class="text-base font-bold text-[#202B36] font-display">
                My Registered Passes (${registrations.length})
              </h3>
              <p class="text-[11px] text-[#777D80]">
                Your confirmed event RSVPs and check-in credentials
              </p>
            </div>
          </div>
          <button id="btn-close-passes-modal" class="p-2 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 text-[#202B36] cursor-pointer text-xs font-semibold">
            ✕ Close
          </button>
        </div>

        ${registrations.length === 0 ? `
          <div class="text-center py-10">
            <div class="text-3xl mb-2 text-[#777D80]">🎫</div>
            <h4 class="text-sm font-bold text-[#202B36] mb-1">No Passes Claimed Yet</h4>
            <p class="text-xs text-[#777D80] max-w-xs mx-auto mb-4">
              Explore the Discovery Feed (Screen 2) and tap [Register] on any event to claim your pass.
            </p>
            <button id="btn-explore-from-passes" class="px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold cursor-pointer">
              Explore Events
            </button>
          </div>
        ` : `
          <div class="space-y-4">
            ${registrations.map(reg => {
              const event = allEvents.find(e => e.id === reg.eventId) || {
                title: reg.eventTitle || 'Campus Event',
                venue: reg.venue || 'Campus Venue',
                date: reg.date || 'TBD',
                startTime: reg.startTime || '10:00',
                endTime: reg.endTime || '12:00',
                organizer: 'Campus Organization'
              };

              const gcalUrl = createGoogleCalendarUrl(event);

              return `
                <div class="ticket-pass p-4 relative">
                  <div class="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span class="text-[10px] font-mono text-[#D9825B] font-semibold">${reg.ticketId}</span>
                      <h4 class="text-sm font-bold text-[#202B36] font-display">${event.title}</h4>
                      <div class="text-[11px] text-[#777D80]">By ${event.organizer}</div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#263D52] text-[10px] font-bold uppercase shrink-0">
                      Confirmed
                    </span>
                  </div>

                  <div class="grid grid-cols-2 gap-2 text-xs bg-[#F8F7F4] p-2.5 rounded-xl border border-[#E8D8C5] mb-3">
                    <div>
                      <div class="text-[10px] text-[#777D80] uppercase font-semibold">Date & Time</div>
                      <div class="font-bold text-[#202B36] text-xs">${event.date}</div>
                      <div class="text-[10px] text-[#D9825B] font-medium">${formatTimeDisplay(event.startTime)}</div>
                    </div>
                    <div>
                      <div class="text-[10px] text-[#777D80] uppercase font-semibold">Venue</div>
                      <div class="font-bold text-[#202B36] text-xs truncate">${event.venue}</div>
                      <div class="text-[10px] text-[#263D52]">Gate Check-in #2</div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-2 border-t border-[#E8D8C5]">
                    <span class="text-[10px] text-[#777D80]">Pass Holder: <strong class="text-[#202B36]">${reg.attendeeName || 'Student'}</strong></span>
                    <div class="flex items-center gap-2">
                      <a href="${gcalUrl}" target="_blank" class="px-2.5 py-1 rounded-lg bg-[#263D52] text-white hover:bg-[#202B36] text-[11px] font-medium transition-colors">
                        Google Cal
                      </a>
                      <button class="btn-cancel-pass text-[11px] text-[#D9825B] hover:underline cursor-pointer" data-reg-id="${reg.ticketId}">
                        Cancel RSVP
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}

      </div>
    </div>
  `;
};


/* --- src/components/CampusMapModal.js --- */
// Campus Map & Facility Directory Modal


const renderCampusMapModal = (allEvents = []) => {
  return `
    <div id="modal-map-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div class="glass-panel-elevated w-full max-w-2xl rounded-3xl border border-[#E8D8C5] p-6 max-h-[90vh] overflow-y-auto text-left shadow-2xl relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8D8C5] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">📍</span>
            <div>
              <h3 class="text-base font-bold text-[#202B36] font-display">
                Campus Facility & Venue Directory
              </h3>
              <p class="text-[11px] text-[#777D80]">
                5 primary university venues monitored by Clash Guard
              </p>
            </div>
          </div>
          <button id="btn-close-map-modal" class="p-2 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5] text-[#777D80] hover:text-[#202B36] cursor-pointer text-xs">
            ✕ Close
          </button>
        </div>

        <!-- Venue Cards -->
        <div class="space-y-3">
          ${CAMPUS_VENUES.map(venue => {
            const venueEvents = allEvents.filter(e => 
              (e.venue && e.venue.trim().toLowerCase() === venue.name.trim().toLowerCase()) ||
              (e.venueId && e.venueId === venue.id)
            );

            return `
              <div class="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E8D8C5] hover:border-[#A9BEC4] transition-colors">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span class="px-2 py-0.5 rounded-full bg-[#E8D8C5]/60 text-[#263D52] text-[10px] font-bold uppercase">
                      ${venue.badge}
                    </span>
                    <h4 class="text-sm font-bold text-[#202B36] font-display mt-1">${venue.name}</h4>
                    <div class="text-xs text-[#777D80]">${venue.building} • ${venue.room}</div>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="text-xs font-bold text-[#D9825B]">Cap: ${venue.capacity}</span>
                    <div class="text-[10px] text-[#777D80]">${venueEvents.length} active events</div>
                  </div>
                </div>

                <!-- Equipment chips -->
                <div class="flex flex-wrap gap-1 mt-2">
                  ${venue.equipment.map(eq => `
                    <span class="px-2 py-0.5 rounded bg-[#A9BEC4]/40 text-[10px] text-[#263D52]">
                      ${eq}
                    </span>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </div>
  `;
};


/* --- src/components/RegisterModal.js --- */
// Student Event Registration Modal

const renderRegisterModal = (event) => {
  return `
    <div id="modal-register-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div class="glass-panel-elevated w-full max-w-md rounded-3xl border border-[#E8D8C5] p-6 text-left shadow-2xl relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-[#E8D8C5] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">🎟️</span>
            <div>
              <h3 class="text-base font-bold text-white font-display">
                Confirm Campus Registration
              </h3>
              <p class="text-[11px] text-[#777D80] truncate max-w-[240px]">
                ${event.title}
              </p>
            </div>
          </div>
          <button id="btn-close-register-modal" class="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#E8D8C5] text-[#777D80] hover:text-[#202B36] cursor-pointer text-xs">
            ✕
          </button>
        </div>

        <!-- Registration Form -->
        <form id="form-confirm-registration" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Your Full Name <span class="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="input-attendee-name"
              required
              value="Aarav Sharma"
              placeholder="e.g. Alex Morgan"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Campus Student ID / Roll No <span class="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="input-student-id"
              required
              value="STU-2026-8942"
              placeholder="e.g. STU-2026-8942"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Campus Email <span class="text-rose-400">*</span>
            </label>
            <input
              type="email"
              id="input-student-email"
              required
              value="aarav.s@campus.edu"
              placeholder="name@campus.edu"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <!-- Free pass badge -->
          <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
            <span class="text-[#D9825B] font-medium">Free Student RSVP</span>
            <span class="font-bold text-[#D9825B] font-display">₹0.00</span>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Confirm & Generate Digital Pass (Screen 4)</span>
              <span>→</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
};


/* --- src/app.js --- */
// Campus Pulse - Master Application Controller & State Engine




// Screens








// Modals




class CampusPulseApp {
  constructor() {
    this.state = {
      currentScreen: 'splash', // 'splash', 'onboarding', 'feed', 'details', 'confirmation', 'form', 'clashguard'
      userRole: 'student', // 'student' or 'organizer'
      deviceMode: 'desktop', // 'desktop' or 'mobile'
      events: getStoredEvents(),
      selectedTags: this.loadPreferences().interestTags || ['Tech & AI', 'Hackathons', 'Music & Concerts'],
      selectedEventId: 'evt-01',
      activeFilter: 'all',
      searchQuery: '',
      bookmarks: this.loadBookmarks(),
      registrations: this.loadRegistrations(),
      currentRegistration: null,
      
      // Organizer Flow Data
      proposedEvent: {
        title: 'Autonomous Robotics & Drone Showcase',
        organizer: 'Robotics & AI Society',
        organizerEmail: 'robotics@campus.edu',
        date: this.getTomorrowDate(),
        startTime: '14:00',
        endTime: '17:00',
        venue: 'Tech Innovation Hub - Lab 302',
        venueId: 'tech_hub_302',
        capacity: 75,
        tagline: 'Autonomous obstacle course & student drone racing.',
        description: 'Hands-on arena test for student-built autonomous quadcopters with computer vision.',
        tags: ['Tech & AI', 'Science & Robotics'],
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
        isFree: true,
        price: 0
      },
      clashResult: { hasClash: false, conflicts: [] },
      adminOverride: null,
      isPublished: false,

      // Modals
      modals: {
        diagram: false,
        map: false,
        passes: false,
        register: false
      },

      toast: null
    };

    this.init();
  }

  getTomorrowDate() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  loadPreferences() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  savePreferences() {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify({
        interestTags: this.state.selectedTags,
        role: this.state.userRole
      }));
    } catch (e) {
      console.error(e);
    }
  }

  loadBookmarks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return raw ? JSON.parse(raw) : ['evt-01'];
    } catch (e) {
      return ['evt-01'];
    }
  }

  saveBookmarks() {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(this.state.bookmarks));
    } catch (e) {
      console.error(e);
    }
  }

  loadRegistrations() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveRegistrations() {
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(this.state.registrations));
    } catch (e) {
      console.error(e);
    }
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  navigate(screen, data = {}) {
    this.state.currentScreen = screen;
    if (data.eventId) this.state.selectedEventId = data.eventId;
    if (data.role) this.state.userRole = data.role;
    if (data.filter) this.state.activeFilter = data.filter;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showToast(message, type = 'info') {
    this.state.toast = { message, type };
    this.render();
    setTimeout(() => {
      if (this.state.toast && this.state.toast.message === message) {
        this.state.toast = null;
        this.render();
      }
    }, 3500);
  }

  render() {
    const root = document.getElementById('root');
    if (!root) return;

    const {
      currentScreen,
      userRole,
      deviceMode,
      events,
      selectedTags,
      selectedEventId,
      activeFilter,
      searchQuery,
      bookmarks,
      registrations,
      currentRegistration,
      proposedEvent,
      clashResult,
      adminOverride,
      isPublished,
      modals,
      toast
    } = this.state;

    // Render User Flow Header Bar
    const flowBarHtml = renderUserFlowBar(currentScreen, userRole, deviceMode, registrations.length);

    // Render Active Screen Component
    let screenContentHtml = '';

    switch (currentScreen) {
      case 'splash':
        screenContentHtml = renderSplashScreen();
        break;

      case 'onboarding':
        screenContentHtml = renderOnboardingScreen(selectedTags, userRole);
        break;

      case 'feed':
        screenContentHtml = renderDiscoveryFeedScreen(
          events,
          { interestTags: selectedTags },
          activeFilter,
          searchQuery,
          bookmarks
        );
        break;

      case 'details': {
        const event = events.find(e => e.id === selectedEventId) || events[0];
        const isReg = registrations.some(r => r.eventId === event?.id);
        const isBm = bookmarks.includes(event?.id);
        screenContentHtml = renderEventDetailsScreen(event, isReg, isBm);
        break;
      }

      case 'confirmation': {
        const reg = currentRegistration || registrations[registrations.length - 1];
        const event = events.find(e => e.id === reg?.eventId) || events[0];
        screenContentHtml = renderConfirmationScreen(reg, event);
        break;
      }

      case 'form':
        screenContentHtml = renderEventFormScreen(proposedEvent);
        break;

      case 'clashguard':
        screenContentHtml = renderClashGuardScreen(proposedEvent, clashResult, adminOverride, isPublished);
        break;

      default:
        screenContentHtml = renderSplashScreen();
    }

    // Render Modals if active
    let modalHtml = '';
    if (modals.diagram) {
      modalHtml += renderFlowDiagramModal(currentScreen, userRole);
    }
    if (modals.passes) {
      modalHtml += renderMyPassesModal(registrations, events);
    }
    if (modals.map) {
      modalHtml += renderCampusMapModal(events);
    }
    if (modals.register) {
      const event = events.find(e => e.id === selectedEventId) || events[0];
      modalHtml += renderRegisterModal(event);
    }

    // Render Toast Notification
    const toastHtml = toast ? `
      <div class="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#263D52] border border-[#E8D8C5] text-white text-xs font-semibold shadow-2xl animate-slide-up">
        <span class="text-[#D9825B]">⚡</span>
        <span>${toast.message}</span>
      </div>
    ` : '';

    // Layout frame wrapper based on Device Mode
    let layoutHtml = '';

    if (deviceMode === 'mobile') {
      layoutHtml = `
        <div class="min-h-screen bg-[#263D52] flex flex-col items-center justify-start pb-10">
          ${flowBarHtml}

          <div class="w-full flex-1 flex items-center justify-center py-4 px-2">
            <div class="phone-mockup-frame bg-[#263D52]">
              <div class="dynamic-island">
                <div class="dynamic-island-cam"></div>
                <div class="dynamic-island-sensor"></div>
              </div>

              <!-- Phone Status Bar -->
              <div class="pt-3 px-6 pb-1 flex items-center justify-between text-[11px] font-bold text-[#777D80] select-none">
                <span>9:41</span>
                <div class="flex items-center gap-1.5">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              <!-- Scrollable App Screen Content -->
              <div class="flex-1 overflow-y-auto pt-2 pb-8">
                ${screenContentHtml}
              </div>
            </div>
          </div>

          ${modalHtml}
          ${toastHtml}
        </div>
      `;
    } else {
      // Desktop full screen layout
      layoutHtml = `
        <div class="min-h-screen bg-[#263D52] flex flex-col">
          ${flowBarHtml}
          <main class="flex-1 pb-16">
            ${screenContentHtml}
          </main>
          ${modalHtml}
          ${toastHtml}
        </div>
      `;
    }

    root.innerHTML = layoutHtml;

    // Attach dynamic links for calendar on details or confirmation screen
    this.attachCalendarLinks();
  }

  attachCalendarLinks() {
    const { currentScreen, selectedEventId, events, currentRegistration, registrations } = this.state;
    let targetEvent = null;

    if (currentScreen === 'details') {
      targetEvent = events.find(e => e.id === selectedEventId) || events[0];
    } else if (currentScreen === 'confirmation') {
      const reg = currentRegistration || registrations[registrations.length - 1];
      targetEvent = events.find(e => e.id === reg?.eventId) || events[0];
    }

    if (!targetEvent) return;

    const gcalUrl = createGoogleCalendarUrl(targetEvent);

    const linkGcal = document.getElementById('link-google-calendar');
    if (linkGcal) linkGcal.href = gcalUrl;

    const btnConfirmGcal = document.getElementById('btn-confirm-gcal');
    if (btnConfirmGcal) btnConfirmGcal.href = gcalUrl;
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      // Flow Bar Home
      if (e.target.closest('#btn-flow-home')) {
        this.navigate('splash');
        return;
      }

      // Flow Step Pills Navigation
      const stepBtn = e.target.closest('.btn-flow-step');
      if (stepBtn) {
        const step = stepBtn.dataset.step;
        if (step) {
          if (['form', 'clashguard'].includes(step)) {
            this.state.userRole = 'organizer';
          } else if (['feed', 'details', 'confirmation'].includes(step)) {
            this.state.userRole = 'student';
          }
          this.navigate(step);
        }
        return;
      }

      // Diagram Modal Trigger & Jump
      if (e.target.closest('#btn-open-diagram')) {
        this.state.modals.diagram = true;
        this.render();
        return;
      }
      if (e.target.closest('#btn-close-diagram-modal') || e.target.closest('#btn-close-diagram-bottom') || e.target.id === 'modal-diagram-backdrop') {
        this.state.modals.diagram = false;
        this.render();
        return;
      }
      const jumpBtn = e.target.closest('.btn-flow-jump');
      if (jumpBtn) {
        const targetScreen = jumpBtn.dataset.screen;
        if (targetScreen) {
          this.state.modals.diagram = false;
          if (['form', 'clashguard'].includes(targetScreen)) {
            this.state.userRole = 'organizer';
          } else if (['feed', 'details', 'confirmation'].includes(targetScreen)) {
            this.state.userRole = 'student';
          }
          this.navigate(targetScreen);
        }
        return;
      }

      // Passes Modal Trigger
      if (e.target.closest('#btn-open-passes')) {
        this.state.modals.passes = true;
        this.render();
        return;
      }
      if (e.target.closest('#btn-close-passes-modal') || e.target.id === 'modal-passes-backdrop') {
        this.state.modals.passes = false;
        this.render();
        return;
      }
      if (e.target.closest('#btn-explore-from-passes')) {
        this.state.modals.passes = false;
        this.navigate('feed');
        return;
      }

      // Campus Map Modal Trigger
      if (e.target.closest('#btn-open-map') || e.target.closest('#btn-view-venue-map') || e.target.closest('#btn-view-venue-capacities')) {
        this.state.modals.map = true;
        this.render();
        return;
      }
      if (e.target.closest('#btn-close-map-modal') || e.target.id === 'modal-map-backdrop') {
        this.state.modals.map = false;
        this.render();
        return;
      }

      // Toggle Device Frame Preview (Mobile vs Desktop)
      if (e.target.closest('#btn-toggle-device')) {
        this.state.deviceMode = this.state.deviceMode === 'mobile' ? 'desktop' : 'mobile';
        this.render();
        return;
      }

      // Role Switcher in Flow Bar
      if (e.target.closest('#btn-switch-student')) {
        this.state.userRole = 'student';
        this.savePreferences();
        this.navigate('feed');
        return;
      }
      if (e.target.closest('#btn-switch-organizer')) {
        this.state.userRole = 'organizer';
        this.savePreferences();
        this.navigate('form');
        return;
      }

      // Splash Screen Actions
      if (e.target.closest('#btn-start-flow')) {
        this.navigate('onboarding');
        return;
      }
      if (e.target.closest('#btn-quick-student')) {
        this.state.userRole = 'student';
        this.navigate('feed');
        return;
      }
      if (e.target.closest('#btn-quick-organizer')) {
        this.state.userRole = 'organizer';
        // Run clash check on demo clash event
        this.loadClashDemoData();
        return;
      }

      // Screen 1: Onboarding Tag Toggle
      const tagBtn = e.target.closest('.tag-toggle-btn');
      if (tagBtn) {
        const tag = tagBtn.dataset.tag;
        if (tag) {
          if (this.state.selectedTags.includes(tag)) {
            this.state.selectedTags = this.state.selectedTags.filter(t => t !== tag);
          } else {
            this.state.selectedTags.push(tag);
          }
          this.savePreferences();
          this.render();
        }
        return;
      }

      // Screen 1: Pathway Choice (Student vs Organizer Radio)
      const pathCard = e.target.closest('.path-select-card');
      if (pathCard) {
        const radio = pathCard.querySelector('input[type="radio"]');
        if (radio) {
          this.state.userRole = radio.value;
          this.savePreferences();
          this.render();
        }
        return;
      }

      // Screen 1: Continue Button
      if (e.target.closest('#btn-continue-onboarding')) {
        if (this.state.selectedTags.length >= 3) {
          this.savePreferences();
          if (this.state.userRole === 'organizer') {
            this.navigate('form');
          } else {
            this.navigate('feed');
          }
        }
        return;
      }

      // Screen 2: Edit Interests
      if (e.target.closest('#btn-edit-interests')) {
        this.navigate('onboarding');
        return;
      }

      // Screen 2: Switch to Organizer
      if (e.target.closest('#btn-feed-to-organizer')) {
        this.state.userRole = 'organizer';
        this.navigate('form');
        return;
      }

      // Screen 2: Filter Pills
      const filterBtn = e.target.closest('.filter-pill-btn');
      if (filterBtn) {
        const filter = filterBtn.dataset.filter;
        if (filter) {
          this.state.activeFilter = filter;
          this.render();
        }
        return;
      }

      // Screen 2: Clear Search
      if (e.target.closest('#btn-clear-search')) {
        this.state.searchQuery = '';
        this.render();
        return;
      }

      // Screen 2: Reset Filters
      if (e.target.closest('#btn-reset-filters')) {
        this.state.searchQuery = '';
        this.state.activeFilter = 'all';
        this.render();
        return;
      }

      // Toggle Bookmark
      const bmBtn = e.target.closest('.btn-toggle-bookmark');
      if (bmBtn) {
        const eventId = bmBtn.dataset.eventId;
        if (eventId) {
          if (this.state.bookmarks.includes(eventId)) {
            this.state.bookmarks = this.state.bookmarks.filter(id => id !== eventId);
            this.showToast('Removed from Bookmarks');
          } else {
            this.state.bookmarks.push(eventId);
            this.showToast('Saved to Bookmarks! 🔖');
          }
          this.saveBookmarks();
          this.render();
        }
        return;
      }

      // View Event Details (Screen 3)
      const viewDetailsBtn = e.target.closest('.btn-view-details');
      if (viewDetailsBtn) {
        const eventId = viewDetailsBtn.dataset.eventId;
        if (eventId) {
          this.navigate('details', { eventId });
        }
        return;
      }

      // Back to Discovery Feed
      if (e.target.closest('#btn-back-to-feed')) {
        this.navigate('feed');
        return;
      }

      // Calendar Dropdown Toggle
      if (e.target.closest('#btn-calendar-dropdown-toggle')) {
        const menu = document.getElementById('calendar-dropdown-menu');
        if (menu) {
          menu.classList.toggle('hidden');
        }
        return;
      }

      // Download .ics file
      if (e.target.closest('#btn-download-ics') || e.target.closest('#btn-confirm-ics')) {
        const event = this.state.events.find(e => e.id === this.state.selectedEventId) || this.state.events[0];
        downloadIcsFile(event);
        this.showToast('Downloaded calendar .ics file! 🍏');
        return;
      }

      // Open Registration Modal
      if (e.target.closest('#btn-open-register-modal')) {
        const event = this.state.events.find(e => e.id === this.state.selectedEventId) || this.state.events[0];
        const existing = this.state.registrations.find(r => r.eventId === event.id);
        if (existing) {
          this.state.currentRegistration = existing;
          this.navigate('confirmation');
        } else {
          this.state.modals.register = true;
          this.render();
        }
        return;
      }
      if (e.target.closest('#btn-close-register-modal') || e.target.id === 'modal-register-backdrop') {
        this.state.modals.register = false;
        this.render();
        return;
      }

      // Screen 4: Share via WhatsApp
      if (e.target.closest('#btn-share-whatsapp')) {
        const event = this.state.events.find(e => e.id === this.state.selectedEventId) || this.state.events[0];
        const url = getWhatsAppShareUrl(event);
        window.open(url, '_blank');
        return;
      }

      // Screen 4: Copy Event Link
      if (e.target.closest('#btn-copy-link')) {
        const event = this.state.events.find(e => e.id === this.state.selectedEventId) || this.state.events[0];
        copyEventLink(event).then(() => {
          this.showToast('Event invite link copied to clipboard! 📋');
        });
        return;
      }

      // Screen 4: Switch to Organizer flow
      if (e.target.closest('#btn-switch-to-organizer-flow')) {
        this.state.userRole = 'organizer';
        this.navigate('form');
        return;
      }

      // Cancel Pass in My Passes modal
      const cancelPassBtn = e.target.closest('.btn-cancel-pass');
      if (cancelPassBtn) {
        const regId = cancelPassBtn.dataset.regId;
        this.state.registrations = this.state.registrations.filter(r => r.ticketId !== regId);
        this.saveRegistrations();
        this.showToast('Registration cancelled');
        this.render();
        return;
      }

      // Organizer Screen 5: Tag selector for proposed event
      const formTagBtn = e.target.closest('.btn-form-tag');
      if (formTagBtn) {
        const tag = formTagBtn.dataset.tag;
        if (tag) {
          const currentTags = this.state.proposedEvent.tags || [];
          if (currentTags.includes(tag)) {
            this.state.proposedEvent.tags = currentTags.filter(t => t !== tag);
          } else {
            this.state.proposedEvent.tags.push(tag);
          }
          this.render();
        }
        return;
      }

      // Screen 5: Load Clash Demo Scenario
      if (e.target.closest('#btn-load-clash-demo')) {
        this.loadClashDemoData();
        return;
      }

      // Screen 5: Load Clean Demo Scenario
      if (e.target.closest('#btn-load-clean-demo')) {
        this.loadCleanDemoData();
        return;
      }

      // Screen 6: Back to Form
      if (e.target.closest('#btn-back-to-form')) {
        this.navigate('form');
        return;
      }

      // Screen 6: Apply Recommended Time Slot [Pick a slot]
      const applySlotBtn = e.target.closest('.btn-apply-slot');
      if (applySlotBtn) {
        const { start, end, venue } = applySlotBtn.dataset;
        this.state.proposedEvent.startTime = start;
        this.state.proposedEvent.endTime = end;
        if (venue) this.state.proposedEvent.venue = venue;
        this.state.clashResult = analyzeClashes(this.state.proposedEvent, this.state.events);
        this.state.adminOverride = null;
        this.showToast('Applied recommended time slot! Conflict resolved. ✨');
        this.render();
        return;
      }

      // Screen 6: Apply Alternative Venue [Pick a slot]
      const applyVenueBtn = e.target.closest('.btn-apply-venue');
      if (applyVenueBtn) {
        const { venue, venueId } = applyVenueBtn.dataset;
        this.state.proposedEvent.venue = venue;
        if (venueId) this.state.proposedEvent.venueId = venueId;
        this.state.clashResult = analyzeClashes(this.state.proposedEvent, this.state.events);
        this.state.adminOverride = null;
        this.showToast(`Switched venue to ${venue}! Conflict resolved. ✨`);
        this.render();
        return;
      }

      // Screen 6: Trigger Admin Clash Waiver [Admin clash]
      if (e.target.closest('#btn-trigger-admin-clash')) {
        const selectReason = document.getElementById('select-admin-reason');
        const textNote = document.getElementById('text-admin-note');
        const reasonText = selectReason ? selectReason.options[selectReason.selectedIndex].text : 'Administrative Special Permit';
        const note = textNote ? textNote.value : '';

        this.state.adminOverride = {
          reason: reasonText,
          note,
          token: `ADM-OVERRIDE-${Date.now().toString(36).toUpperCase()}`,
          approvedBy: 'Campus Vice-Chancellor Office',
          approvedAt: new Date().toLocaleTimeString()
        };

        this.showToast('Admin Clash Waiver Authorized! Ready to publish. 🛡️');
        this.render();
        return;
      }

      // Screen 6: Publish Event
      if (e.target.closest('#btn-publish-event')) {
        this.publishProposedEvent();
        return;
      }

      // Published Screen: View in Feed
      if (e.target.closest('#btn-view-published-in-feed')) {
        this.state.userRole = 'student';
        this.state.isPublished = false;
        this.navigate('feed');
        return;
      }

      // Published Screen: Create Another
      if (e.target.closest('#btn-create-another-event')) {
        this.state.isPublished = false;
        this.state.adminOverride = null;
        this.navigate('form');
        return;
      }
    });

    // Handle Input Search Event in Screen 2
    document.addEventListener('input', (e) => {
      if (e.target.id === 'input-feed-search') {
        this.state.searchQuery = e.target.value;
        this.render();
      }
    });

    // Handle Event Form Submission (Screen 5 -> Screen 6)
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'form-create-event') {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const proposed = {
          ...this.state.proposedEvent,
          title: formData.get('title') || 'Untitled Event',
          organizer: formData.get('organizer') || 'Campus Club',
          organizerEmail: formData.get('organizerEmail') || 'club@campus.edu',
          date: formData.get('date'),
          startTime: formData.get('startTime'),
          endTime: formData.get('endTime'),
          venue: formData.get('venue'),
          capacity: parseInt(formData.get('capacity'), 10) || 50,
          description: formData.get('description') || '',
          image: formData.get('image') || 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
          isFree: formData.get('isFree') === 'true'
        };

        const matchedVenue = CAMPUS_VENUES.find(v => v.name === proposed.venue);
        if (matchedVenue) proposed.venueId = matchedVenue.id;

        this.state.proposedEvent = proposed;
        this.state.adminOverride = null;
        this.state.isPublished = false;

        // Run Clash Guard Engine!
        const result = analyzeClashes(proposed, this.state.events);
        this.state.clashResult = result;

        this.navigate('clashguard');
      }

      // Handle Student Registration Form Submission
      if (e.target.id === 'form-confirm-registration') {
        e.preventDefault();
        const nameInput = document.getElementById('input-attendee-name');
        const idInput = document.getElementById('input-student-id');
        const emailInput = document.getElementById('input-student-email');

        const event = this.state.events.find(e => e.id === this.state.selectedEventId) || this.state.events[0];
        
        const registration = {
          ticketId: `CP-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
          eventId: event.id,
          eventTitle: event.title,
          attendeeName: nameInput?.value || 'Campus Student',
          studentId: idInput?.value || 'STU-2026-8942',
          email: emailInput?.value || 'student@campus.edu',
          date: event.date,
          startTime: event.startTime,
          venue: event.venue,
          registeredAt: new Date().toISOString()
        };

        // Increment event attendance
        event.registeredCount = (event.registeredCount || 0) + 1;
        saveStoredEvents(this.state.events);

        this.state.registrations.push(registration);
        this.saveRegistrations();
        this.state.currentRegistration = registration;
        this.state.modals.register = false;

        this.showToast('Registration Confirmed! Digital Pass generated 🎉');
        this.navigate('confirmation');
      }
    });
  }

  loadClashDemoData() {
    // Tomorrow at Lab 302 colliding with HackPulse (which runs 10:00 to 22:00)
    const tomorrow = this.getTomorrowDate();
    this.state.proposedEvent = {
      title: 'DevOps & Cloud Architecture Workshop',
      organizer: 'Cloud Computing Society',
      organizerEmail: 'cloud@campus.edu',
      date: tomorrow,
      startTime: '14:00',
      endTime: '17:30',
      venue: 'Tech Innovation Hub - Lab 302',
      venueId: 'tech_hub_302',
      capacity: 80,
      tagline: 'Kubernetes and serverless pipelines hands-on lab.',
      description: 'Hands-on serverless computing workshop requiring computer lab terminals.',
      tags: ['Tech & AI', 'Workshops'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      isFree: true,
      price: 0
    };

    this.state.adminOverride = null;
    this.state.isPublished = false;

    // Run Clash Guard immediately
    this.state.clashResult = analyzeClashes(this.state.proposedEvent, this.state.events);
    this.showToast('Loaded conflicting scenario for Lab 302! Clash Guard active ⚠️');
    this.navigate('clashguard');
  }

  loadCleanDemoData() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const dateStr = futureDate.toISOString().split('T')[0];

    this.state.proposedEvent = {
      title: 'Global Tech Leadership & Alumni Keynote',
      organizer: 'University Alumni Relations',
      organizerEmail: 'alumni@campus.edu',
      date: dateStr,
      startTime: '10:00',
      endTime: '12:30',
      venue: 'Main Campus Auditorium',
      venueId: 'auditorium',
      capacity: 400,
      tagline: 'Hear from Silicon Valley alumni on building frontier tech products.',
      description: 'Keynote and Q&A fireside chat with university alumni founders and tech executives.',
      tags: ['Tech & AI', 'Career & Startups'],
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      isFree: true,
      price: 0
    };

    this.state.adminOverride = null;
    this.state.isPublished = false;
    this.state.clashResult = analyzeClashes(this.state.proposedEvent, this.state.events);
    this.showToast('Loaded conflict-free slot! Ready to publish 🟢');
    this.navigate('clashguard');
  }

  publishProposedEvent() {
    const newEvent = {
      ...this.state.proposedEvent,
      id: `evt-${Date.now().toString(36)}`,
      registeredCount: 1,
      isFeatured: false,
      agenda: [
        { time: formatTimeDisplay(this.state.proposedEvent.startTime), title: 'Welcome & Session Kickoff' },
        { time: 'Mid-session', title: 'Main Interactive Segment & Demonstrations' },
        { time: formatTimeDisplay(this.state.proposedEvent.endTime), title: 'Wrap-up & Networking Mixer' }
      ],
      perks: ['Certificate of Attendance', 'Campus Credit points'],
      requirements: ['Student ID']
    };

    // Add to events and persist
    this.state.events.unshift(newEvent);
    saveStoredEvents(this.state.events);

    this.state.selectedEventId = newEvent.id;
    this.state.isPublished = true;
    this.showToast('Event successfully published to Campus Pulse! 🚀');
    this.render();
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new CampusPulseApp();
});


})();
