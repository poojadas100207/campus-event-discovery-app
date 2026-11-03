// Screen 5: Organizer Event Form (Modern Campus Theme)
// Enter title, Time, venue, capacity, etc.

import { CAMPUS_VENUES, INTEREST_TAGS } from '../data/events.js';
import { Icons } from './Icons.js';

export const renderEventFormScreen = (formData = {}) => {
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
