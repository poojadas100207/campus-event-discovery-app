// Flow Diagram Modal - Visual Interactive Pathway Guide (Modern Campus Theme)
// Displays the exact architectural diagram provided by the user with active step tracking

import { Icons } from './Icons.js';

export const renderFlowDiagramModal = (currentScreen, userRole) => {
  return `
    <div id="modal-diagram-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-white w-full max-w-3xl rounded-3xl border border-[#E8D8C5] p-6 max-h-[90vh] overflow-y-auto text-left shadow-modal relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8D8C5] mb-5">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-[#263D52] flex items-center justify-center text-[#D9825B] font-bold text-sm">
              🗺️
            </div>
            <div>
              <h3 class="text-base font-bold text-[#202B36] font-display">
                User Flow Diagram Pathway Map
              </h3>
              <p class="text-[11px] text-[#777D80]">
                Architecture directly mapped from your hand-drawn specification
              </p>
            </div>
          </div>
          <button id="btn-close-diagram-modal" class="p-2 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 text-[#202B36] cursor-pointer text-xs font-semibold">
            ✕ Close
          </button>
        </div>

        <!-- Flow Diagram Visualization -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#F8F7F4] border border-[#E8D8C5] mb-5 font-sans text-xs">
          
          <!-- START / SPLASH -->
          <div class="flex flex-col items-center">
            <div class="px-4 py-1.5 rounded-full bg-[#263D52] text-white font-bold text-[11px] shadow-xs">
              [START]
            </div>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <button
              class="btn-flow-jump p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                currentScreen === 'splash'
                  ? 'bg-white border-2 border-[#D9825B] text-[#202B36] shadow-subtle ring-1 ring-[#D9825B]'
                  : 'bg-white border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
              }"
              data-screen="splash"
            >
              <div class="font-bold text-xs text-[#202B36]">App Launch / Splash</div>
              <div class="text-[10px] text-[#777D80]">Welcome Overview & Role Shortcuts</div>
            </button>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <!-- SCREEN 1: ONBOARDING -->
            <button
              class="btn-flow-jump p-3 rounded-xl border text-center transition-all cursor-pointer max-w-sm ${
                currentScreen === 'onboarding'
                  ? 'bg-white border-2 border-[#D9825B] text-[#202B36] shadow-subtle ring-1 ring-[#D9825B]'
                  : 'bg-white border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
              }"
              data-screen="onboarding"
            >
              <div class="font-bold text-xs text-[#202B36]">Screen 1 : Onboarding</div>
              <div class="text-[10px] text-[#D9825B] font-semibold mt-0.5">
                ★ Mandatory: Pick at least 3 Interest Tags
              </div>
            </button>
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>

            <!-- BRANCHING -->
            <div class="w-full max-w-md flex justify-between items-center text-[#A9BEC4] text-xs px-6">
              <span>┌─────────────</span>
              <span class="text-[#263D52] font-bold text-[10px] bg-white px-2.5 py-0.5 rounded-full border border-[#E8D8C5]">Branching Logic</span>
              <span>─────────────┐</span>
            </div>
          </div>

          <!-- DUAL COLUMNS: STUDENT & ORGANIZER PATH -->
          <div class="grid grid-cols-2 gap-4 mt-2">
            
            <!-- STUDENT PATH COLUMN -->
            <div class="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-[#E8D8C5] shadow-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#263D52] font-bold text-[10px] uppercase mb-2">
                [STUDENT PATH]
              </span>
              <div class="h-3 w-0.5 bg-[#E8D8C5] mb-1"></div>

              <!-- Screen 2 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'feed'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="feed"
              >
                <div class="font-bold text-xs">Screen 2: Discovery Feed</div>
                <div class="text-[10px] text-[#777D80]">(Personalized Stream)</div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 3 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'details'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="details"
              >
                <div class="font-bold text-xs">Screen 3: Event Details</div>
                <div class="text-[10px] text-[#777D80]">(Time, Venue, Agenda)</div>
                <div class="mt-1 flex items-center justify-center gap-1 text-[9px]">
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#263D52]">[Calendar]</span>
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#D9825B] font-semibold">[Register]</span>
                </div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 4 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'confirmation'
                    ? 'bg-[#263D52] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#263D52]'
                }"
                data-screen="confirmation"
              >
                <div class="font-bold text-xs">Screen 4: Confirmation</div>
                <div class="text-[10px] text-[#777D80]">(Reminders & Share, Pass)</div>
              </button>
            </div>

            <!-- ORGANIZER PATH COLUMN -->
            <div class="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-[#E8D8C5] shadow-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/50 text-[#D9825B] font-bold text-[10px] uppercase mb-2">
                [ORGANIZER PATH]
              </span>
              <div class="h-3 w-0.5 bg-[#E8D8C5] mb-1"></div>

              <!-- Screen 5 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'form'
                    ? 'bg-[#D9825B] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#D9825B]'
                }"
                data-screen="form"
              >
                <div class="font-bold text-xs">Screen 5: Event Form</div>
                <div class="text-[10px] text-[#777D80]">(Title, Time, Venue)</div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Screen 6 -->
              <button
                class="btn-flow-jump w-full p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScreen === 'clashguard'
                    ? 'bg-[#D9825B] text-white font-semibold'
                    : 'bg-[#F8F7F4] border-[#E8D8C5] text-[#202B36] hover:border-[#D9825B]'
                }"
                data-screen="clashguard"
              >
                <div class="font-bold text-xs">Screen 6: Clash Guard</div>
                <div class="text-[10px] text-[#777D80]">(Detects Time Overlap)</div>
                <div class="mt-1 flex items-center justify-center gap-1 text-[9px]">
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#263D52]">[Pick a slot]</span>
                  <span class="bg-white px-1.5 py-0.5 rounded border border-[#E8D8C5] text-[#D9825B] font-semibold">[Admin]</span>
                </div>
              </button>
              <div class="h-3 w-0.5 bg-[#E8D8C5] my-1"></div>

              <!-- Published -->
              <div class="w-full p-2 rounded-xl bg-[#F8F7F4] border border-[#E8D8C5] text-center text-[#263D52] font-bold text-xs">
                <div>[Event Published]</div>
                <div class="text-[9px] text-[#777D80]">Live in Campus Feed</div>
              </div>
            </div>

          </div>

          <!-- END -->
          <div class="flex flex-col items-center mt-3">
            <div class="h-4 w-0.5 bg-[#E8D8C5] my-1"></div>
            <div class="px-4 py-1.5 rounded-full bg-[#202B36] text-white font-bold text-[11px]">
              [END]
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between text-xs text-[#777D80]">
          <span>Tap any block above to jump directly to that screen.</span>
          <button id="btn-close-diagram-bottom" class="px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold cursor-pointer">
            Return to App
          </button>
        </div>

      </div>
    </div>
  `;
};
