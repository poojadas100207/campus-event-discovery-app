// Screen 4: Confirmation (Modern Campus Theme)
// Reminders, Social Share, Dynamic Pass & QR Ticket

import { Icons } from './Icons.js';
import { formatTimeDisplay } from '../services/clashGuard.js';

export const renderConfirmationScreen = (registration, event) => {
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
