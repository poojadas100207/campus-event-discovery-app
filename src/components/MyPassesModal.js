// My Passes Drawer / Modal (Modern Campus Theme)

import { Icons } from './Icons.js';
import { formatTimeDisplay } from '../services/clashGuard.js';
import { createGoogleCalendarUrl } from '../services/calendarService.js';

export const renderMyPassesModal = (registrations = [], allEvents = []) => {
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
