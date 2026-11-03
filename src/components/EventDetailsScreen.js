// Screen 3: Event Details (Modern Campus Theme)
// Time, Venue, Agenda Schedule, [Add to Calendar] & [Register]

import { Icons } from './Icons.js';
import { formatTimeDisplay } from '../services/clashGuard.js';

export const renderEventDetailsScreen = (event, isRegistered = false, isBookmarked = false) => {
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
