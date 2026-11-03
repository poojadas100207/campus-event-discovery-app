# Campus Pulse ⚡ — Interactive Campus Event Discovery & Clash Guard

An interactive, high-fidelity web application built strictly adhering to the user-provided **User Flow Diagram** and Figma prototype specifications.

---

## 📸 Architecture & Pathway Alignment

```
[START]
   ↓
App Launch / Splash
   ↓
Screen 1: Onboarding ─── (Mandatory: Pick at least 3 Interest Tags)
   │
   ├──────────────────────────────┬──────────────────────────────┐
   ↓                                                             ↓
[STUDENT PATH]                                            [ORGANIZER PATH]
   ↓                                                             ↓
Screen 2: Discovery Feed                                  Screen 5: Event Form
(Personalized Stream)                                     (Enter title, Time, venue, etc.)
   ↓                                                             ↓
Screen 3: Event Details                                   Screen 6: Clash Guard
(Time, Venue, Agenda, RSVP)                               (Detects time & facility overlap)
   ├──────────────────┐                                          ├──────────────────┐
   ↓                  ↓                                          ↓                  ↓
[Add to Calendar]  [Register]                             [Pick a slot]      [Admin clash]
   └─────────┬────────┘                                          └─────────┬────────┘
             ↓                                                             ↓
Screen 4: Confirmation                                             [Event Published]
(Reminders, Share & QR Pass)                                               ↓
   │                                                                     [END]
   └───────────────────────────────────┬───────────────────────────────────┘
                                       ↓
                                     [END]
```

---

## 🚀 Quick Start Guide

You have three convenient ways to run Campus Pulse:

### Option 1: One-Click Windows Launcher (Fastest)
Double-click `start-app.bat` located in the root directory. It will start the server and automatically launch `http://localhost:3000` in your default browser.

### Option 2: Using Node.js
```bash
npm start
# or
node server.js
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 3: Direct File Opening
Double-click `index.html` in Windows Explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🧪 Running Automated Unit Tests
The project includes unit tests for the **Clash Guard engine**, interval overlap logic, 12-hour formatting, and smart slot generation using Node's built-in test runner:
```bash
npm test
# or
node --test
```

## 🚀 Deploying to GitHub and Vercel

This is a static site and can be deployed from the repository root. Push the project to
GitHub, then import that repository into Vercel with the framework preset set to
**Other** and no build command. Use `index.html` as the entry point.

---

## 📱 Detailed Screen-by-Screen Walkthrough

### 1. App Launch / Splash (`[START]` -> `App Launch/Splash`)
- **Visuals**: Animated campus branding with glowing ambient gradients, live event counters, and pulse badge.
- **Actions**:
  - `Begin Guided Onboarding` (leads to Screen 1)
  - `🎓 Student Stream` (shortcut directly into personalized feed)
  - `🛡️ Clash Guard Demo` (shortcut directly into the organizer conflict engine)
- **Top Flow Bar**: Displays active position in the user flow, with a 1-click **"Flow Diagram"** viewer button and **Device Mode Toggle** (Phone Mockup vs. Desktop View).

### 2. Screen 1: Onboarding (`Mandatory: Pick at least 3 Interest Tags`)
- **Interest Tags**: 12 categorized campus tags (Tech & AI, Hackathons, Music & Concerts, Sports & Esports, Arts & Design, Career & Startups, Drama, Food & Socials, Workshops, Wellness, Gaming, Science).
- **Mandatory Validation**:
  - Dynamic counter (`X / 3 minimum`).
  - Continue button remains locked until $\ge 3$ tags are picked.
  - Informative banner guides the user.
- **Pathway Choice**: Lets the user select between:
  - `[Student Path]` (Discovery Feed -> Event Details -> Confirmation)
  - `[Organizer Path]` (Event Form -> Clash Guard -> Published)

### 3. Screen 2: Discovery Feed (`Personalized Stream`)
- **Personalized Stream Banner**: Displays tags tailored to the student's choices with 1-click "Edit Tags" button.
- **Search & Filters**: Real-time search by title, organizer, tag, or venue. Category filters: *All Campus*, *For You*, *Free Entry*, and *Saved Bookmarks*.
- **Spotlight Hero**: Featured flagship campus events with countdown timer.
- **Event Cards**: Shows match score badge (`🎯 98% Match`), date, time, venue, organizer badge, capacity progress bar (`68 / 80 booked`), and quick bookmark toggle.
- **Action**: Clicking any card navigates to **Screen 3: Event Details**.

### 4. Screen 3: Event Details (`Time, Venue, etc.`)
- **Comprehensive Details**: High-resolution cover photo, verified club profile, venue with campus map coordinates, detailed hourly agenda breakdown, perks, and "what to bring".
- **Two Primary Actions (from diagram)**:
  - `[Add to Calendar]`:
    - **Google Calendar**: Opens pre-filled Google Calendar event URL.
    - **Apple / Outlook**: Dynamically downloads standard `.ics` iCalendar file.
  - `[Register]`: Opens the student RSVP modal with auto-fill and instant pass creation.

### 5. Screen 4: Confirmation (`Reminders & share`)
- **Visual Celebration**: Animated checkmark and confirmation banner.
- **Digital Event Pass / Ticket**:
  - Scannable SVG QR Code for campus gate turnstiles.
  - Unique Ticket Serial Number (e.g. `#CP-L9Z2-8412`).
  - Attendee name, Student ID, Gate entry number, and date/time.
- **Smart Reminders**: Interactive toggles for 24-hour and 1-hour before notifications.
- **Share Options**:
  - One-click `WhatsApp Share` with pre-formatted invite.
  - `Copy Invite Link` with clipboard toast alert.
- **Pass Management**: Accessible via `My Passes` drawer anytime.

### 6. Screen 5: Event Form (`Enter title, Time, etc.`)
- **Organizer Form Builder**:
  - Event title, Hosting club, Contact email, Tagline.
  - Multi-select interest categories.
  - Date, Start Time, End Time.
  - Campus Facility selector (*Main Auditorium*, *Tech Hub Lab 302*, *Student Quad*, *Seminar Hall B*, *Sports Arena*).
  - Capacity limit, Price/Free pass toggle, Description, Cover image.
- **Test Presets**:
  - 🔴 **"Load Clash Scenario"**: Auto-populates an event conflicting with an existing booking in Lab 302 tomorrow to immediately test Clash Guard!
  - 🟢 **"Load Free Slot"**: Auto-populates an event in a vacant window.
- **Action**: Submit button runs real-time clash check and advances to **Screen 6: Clash Guard**.

### 7. Screen 6: Clash Guard (`detects time overlap`)
- **Conflict Analysis**:
  - Alerts organizer with an amber/red warning when an overlap is detected.
  - Displays conflicting event name, host, time window, and exact overlap duration.
- **Pathway A — `[Pick a slot]`**:
  - Recommends alternative non-conflicting time windows in the same venue (Morning / Evening).
  - Recommends alternative campus venues free at the requested time.
  - 1-click **"Apply Recommendation"** auto-updates the event and resolves the conflict to green clearance!
- **Pathway B — `[Admin clash]`**:
  - Request administrative waiver / co-hosting permit with justification rationale.
  - Interactive "Grant Admin Waiver & Authorize Publish" demo bypass.
- **`[Event published]`**:
  - Green clearance shield when zero conflicts exist.
  - Published event is instantly saved to persistent local storage and pushed live to the **Discovery Feed (Screen 2)**!

---

## 🎨 Design System & Aesthetics
- **Theme**: Modern dark mode with slate-950 background, indigo/violet primary accents, and emerald/amber indicators.
- **Typography**: Google Fonts (*Plus Jakarta Sans* and *Outfit*).
- **Responsiveness**: Supports full-screen desktop dashboard view as well as a realistic smartphone mockup frame (iPhone 16 Pro shell with dynamic island and status bar).
