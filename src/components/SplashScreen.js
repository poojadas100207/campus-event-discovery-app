// Screen 0: App Launch / Splash Screen (Modern Campus Theme)

import { Icons } from './Icons.js';

export const renderSplashScreen = () => {
  return `
    <div class="min-h-[82vh] flex flex-col items-center justify-center p-4">
      
      <!-- Startup Mobile App Shell Card -->
      <div class="w-full max-w-lg mx-auto bg-white rounded-3xl p-7 sm:p-10 border border-[#E8D8C5] shadow-card text-center relative animate-fade-in">
        
        <!-- App Icon Badge -->
        <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-[#263D52] flex items-center justify-center mb-5 shadow-sm">
          <span class="text-white text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#D9825B]">CP</span>
        </div>

        <!-- Category Tag Pill -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/50 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold mb-3">
          ${Icons.Sparkles({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
          <span>Collegiate Event Discovery & Clash Guard</span>
        </div>

        <!-- Typography -->
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-2.5 leading-snug">
          Discover Campus Events. <br />
          <span class="text-[#D9825B]">Zero Scheduling Clashes.</span>
        </h1>

        <p class="text-[#777D80] text-sm leading-relaxed max-w-sm mx-auto mb-7 font-sans">
          Curated student discovery feeds, single-tap calendar sync, and clash-proof facility scheduling for campus organizers.
        </p>

        <!-- Feature Pillars in Modern Campus Palette -->
        <div class="grid grid-cols-3 gap-2.5 mb-7 text-left max-w-md mx-auto">
          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#A9BEC4] flex items-center justify-center mb-1.5">
              ${Icons.Sparkles({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Curated Feed</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">3+ Interest Tags</span>
          </div>

          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#D9825B] flex items-center justify-center mb-1.5">
              ${Icons.Ticket({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Digital Passes</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">Calendar Sync</span>
          </div>

          <div class="bg-[#F8F7F4] border border-[#E8D8C5] p-3 rounded-2xl flex flex-col items-center text-center">
            <div class="w-7 h-7 rounded-xl bg-[#263D52] text-[#E8D8C5] flex items-center justify-center mb-1.5">
              ${Icons.ShieldCheck({ class: 'w-3.5 h-3.5' })}
            </div>
            <span class="text-xs font-bold text-[#202B36]">Clash Guard</span>
            <span class="text-[10px] text-[#777D80] mt-0.5">Facility Defense</span>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-2.5">
          <button
            id="btn-start-flow"
            class="w-full py-3.5 rounded-xl bg-[#D9825B] hover:bg-[#c8734c] text-white font-semibold text-sm shadow-subtle flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Begin Guided Onboarding</span>
            <span>→</span>
          </button>

          <div class="grid grid-cols-2 gap-2">
            <button
              id="btn-quick-student"
              class="w-full py-2.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-subtle"
            >
              <span>Student Stream</span>
            </button>

            <button
              id="btn-quick-organizer"
              class="w-full py-2.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#263D52] text-[#263D52] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Organizer Demo</span>
            </button>
          </div>
        </div>

        <!-- Flow Notice -->
        <div class="mt-6 pt-4 border-t border-[#E8D8C5] flex items-center justify-center gap-2 text-xs text-[#777D80]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D9825B]"></span>
          <span>Mapped strictly to the hand-drawn <strong>User Flow Diagram</strong></span>
        </div>

      </div>
    </div>
  `;
};
