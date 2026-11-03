// Screen 6: Clash Guard (Modern Campus Theme)
// Implements [pick a slot] and [Admin clash] pathways leading to [Event published]

import { Icons } from './Icons.js';
import { formatTimeDisplay } from '../services/clashGuard.js';

export const renderClashGuardScreen = (proposedEvent, clashResult, adminOverride = null, isPublished = false) => {
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
