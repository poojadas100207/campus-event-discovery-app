// Campus Pulse - Master Application Controller & State Engine

import { getStoredEvents, saveStoredEvents, STORAGE_KEYS, CAMPUS_VENUES } from './data/events.js';
import { analyzeClashes } from './services/clashGuard.js';
import { createGoogleCalendarUrl, downloadIcsFile, getWhatsAppShareUrl, copyEventLink } from './services/calendarService.js';

// Screens
import { renderUserFlowBar } from './components/UserFlowBar.js';
import { renderSplashScreen } from './components/SplashScreen.js';
import { renderOnboardingScreen } from './components/OnboardingScreen.js';
import { renderDiscoveryFeedScreen } from './components/DiscoveryFeedScreen.js';
import { renderEventDetailsScreen } from './components/EventDetailsScreen.js';
import { renderConfirmationScreen } from './components/ConfirmationScreen.js';
import { renderEventFormScreen } from './components/EventFormScreen.js';
import { renderClashGuardScreen } from './components/ClashGuardScreen.js';

// Modals
import { renderFlowDiagramModal } from './components/FlowDiagramModal.js';
import { renderMyPassesModal } from './components/MyPassesModal.js';
import { renderCampusMapModal } from './components/CampusMapModal.js';
import { renderRegisterModal } from './components/RegisterModal.js';

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
