// Calendar & Sharing Utility Service

export const createGoogleCalendarUrl = (event) => {
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

export const downloadIcsFile = (event) => {
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

export const getWhatsAppShareUrl = (event) => {
  const text = encodeURIComponent(
    `🔥 Hey! Check out "${event.title}" happening on ${event.date} at ${event.venue}!\n\n` +
    `👉 Join me via Campus Pulse: ${window.location.origin || 'http://localhost:3000'}`
  );
  return `https://api.whatsapp.com/send?text=${text}`;
};

export const copyEventLink = async (event) => {
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
