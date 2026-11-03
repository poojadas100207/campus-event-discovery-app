import test from 'node:test';
import assert from 'node:assert';
import { timeToMinutes, minutesToTime, formatTimeDisplay, analyzeClashes } from '../src/services/clashGuard.js';

test('timeToMinutes converts HH:MM correctly', () => {
  assert.strictEqual(timeToMinutes('00:00'), 0);
  assert.strictEqual(timeToMinutes('10:30'), 630);
  assert.strictEqual(timeToMinutes('14:00'), 840);
  assert.strictEqual(timeToMinutes('22:15'), 1335);
});

test('minutesToTime formats back to HH:MM', () => {
  assert.strictEqual(minutesToTime(0), '00:00');
  assert.strictEqual(minutesToTime(630), '10:30');
  assert.strictEqual(minutesToTime(840), '14:00');
});

test('formatTimeDisplay formats 12h AM/PM format', () => {
  assert.strictEqual(formatTimeDisplay('10:00'), '10:00 AM');
  assert.strictEqual(formatTimeDisplay('14:30'), '2:30 PM');
  assert.strictEqual(formatTimeDisplay('00:15'), '12:15 AM');
  assert.strictEqual(formatTimeDisplay('12:00'), '12:00 PM');
});

test('analyzeClashes correctly identifies overlapping events in same venue', () => {
  const existingEvents = [
    {
      id: 'e1',
      title: 'Existing Hackathon',
      date: '2026-11-10',
      startTime: '10:00',
      endTime: '18:00',
      venue: 'Main Campus Auditorium',
      organizer: 'Dev Club'
    }
  ];

  // Colliding event: same date, same venue, overlapping time (14:00 - 16:00)
  const collidingProposed = {
    title: 'New Keynote',
    date: '2026-11-10',
    startTime: '14:00',
    endTime: '16:00',
    venue: 'Main Campus Auditorium'
  };

  const result = analyzeClashes(collidingProposed, existingEvents);
  assert.strictEqual(result.hasClash, true);
  assert.strictEqual(result.conflicts.length, 1);
  assert.strictEqual(result.conflicts[0].overlapDurationMinutes, 120);
  assert.ok(result.recommendations);
  assert.ok(result.recommendations.alternativeVenues.length > 0 || result.recommendations.timeSlots.length > 0);
});

test('analyzeClashes detects zero conflicts when time is different or venue differs', () => {
  const existingEvents = [
    {
      id: 'e1',
      title: 'Existing Hackathon',
      date: '2026-11-10',
      startTime: '10:00',
      endTime: '14:00',
      venue: 'Main Campus Auditorium',
      organizer: 'Dev Club'
    }
  ];

  // Same venue, but after existing event ends (15:00 - 18:00)
  const nonCollidingSameVenue = {
    title: 'Evening Fest',
    date: '2026-11-10',
    startTime: '15:00',
    endTime: '18:00',
    venue: 'Main Campus Auditorium'
  };

  const result1 = analyzeClashes(nonCollidingSameVenue, existingEvents);
  assert.strictEqual(result1.hasClash, false);

  // Overlapping time, but different venue
  const differentVenue = {
    title: 'Lab Session',
    date: '2026-11-10',
    startTime: '11:00',
    endTime: '13:00',
    venue: 'Executive Seminar Hall B'
  };

  const result2 = analyzeClashes(differentVenue, existingEvents);
  assert.strictEqual(result2.hasClash, false);
});
