// Campus Pulse - Event Discovery & Clash Guard Data Store (Modern Campus Theme)

export const INTEREST_TAGS = [
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

export const CAMPUS_VENUES = [
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

export const INITIAL_EVENTS = [
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

export const STORAGE_KEYS = {
  EVENTS: 'campus_pulse_events',
  USER_PREFERENCES: 'campus_pulse_user_prefs',
  REGISTRATIONS: 'campus_pulse_registrations',
  BOOKMARKS: 'campus_pulse_bookmarks'
};

export const getStoredEvents = () => {
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

export const saveStoredEvents = (events) => {
  try {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  } catch (e) {
    console.error('Failed to save events to localStorage', e);
  }
};
