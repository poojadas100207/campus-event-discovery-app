// Campus Map & Facility Directory Modal

import { CAMPUS_VENUES } from '../data/events.js';

export const renderCampusMapModal = (allEvents = []) => {
  return `
    <div id="modal-map-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div class="glass-panel-elevated w-full max-w-2xl rounded-3xl border border-[#E8D8C5] p-6 max-h-[90vh] overflow-y-auto text-left shadow-2xl relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8D8C5] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">📍</span>
            <div>
              <h3 class="text-base font-bold text-[#202B36] font-display">
                Campus Facility & Venue Directory
              </h3>
              <p class="text-[11px] text-[#777D80]">
                5 primary university venues monitored by Clash Guard
              </p>
            </div>
          </div>
          <button id="btn-close-map-modal" class="p-2 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5] text-[#777D80] hover:text-[#202B36] cursor-pointer text-xs">
            ✕ Close
          </button>
        </div>

        <!-- Venue Cards -->
        <div class="space-y-3">
          ${CAMPUS_VENUES.map(venue => {
            const venueEvents = allEvents.filter(e => 
              (e.venue && e.venue.trim().toLowerCase() === venue.name.trim().toLowerCase()) ||
              (e.venueId && e.venueId === venue.id)
            );

            return `
              <div class="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E8D8C5] hover:border-[#A9BEC4] transition-colors">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span class="px-2 py-0.5 rounded-full bg-[#E8D8C5]/60 text-[#263D52] text-[10px] font-bold uppercase">
                      ${venue.badge}
                    </span>
                    <h4 class="text-sm font-bold text-[#202B36] font-display mt-1">${venue.name}</h4>
                    <div class="text-xs text-[#777D80]">${venue.building} • ${venue.room}</div>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="text-xs font-bold text-[#D9825B]">Cap: ${venue.capacity}</span>
                    <div class="text-[10px] text-[#777D80]">${venueEvents.length} active events</div>
                  </div>
                </div>

                <!-- Equipment chips -->
                <div class="flex flex-wrap gap-1 mt-2">
                  ${venue.equipment.map(eq => `
                    <span class="px-2 py-0.5 rounded bg-[#A9BEC4]/40 text-[10px] text-[#263D52]">
                      ${eq}
                    </span>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </div>
  `;
};
