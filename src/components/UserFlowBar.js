// Campus Pulse - Navigation Bar (Modern Campus Theme)

import { Icons } from './Icons.js';

export const renderUserFlowBar = (currentScreen, userRole, deviceMode, registeredCount = 0) => {
  const steps = [
    { id: 'splash', label: 'Splash', num: '0', path: 'both' },
    { id: 'onboarding', label: 'Onboarding (3+ Tags)', num: '1', path: 'both' },
    { id: 'feed', label: 'Discovery Feed', num: '2', path: 'student' },
    { id: 'details', label: 'Event Details', num: '3', path: 'student' },
    { id: 'confirmation', label: 'Pass Confirmation', num: '4', path: 'student' },
    { id: 'form', label: 'Event Form', num: '5', path: 'organizer' },
    { id: 'clashguard', label: 'Clash Guard Check', num: '6', path: 'organizer' },
  ];

  return `
    <header class="sticky top-0 z-40 bg-white border-b border-[#E8D8C5] px-4 py-2.5 shadow-subtle">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        <!-- Logo & Flow Pathway Indicator -->
        <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button id="btn-flow-home" class="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none">
            <div class="w-8 h-8 rounded-xl bg-[#263D52] flex items-center justify-center shadow-sm group-hover:bg-[#202B36] transition-colors">
              <span class="text-[#D9825B] text-sm font-bold font-display tracking-tight">CP</span>
            </div>
            <div>
              <div class="font-bold text-[#202B36] text-sm tracking-tight flex items-center gap-1.5 font-display">
                Campus Pulse
                <span class="text-[10px] bg-[#E8D8C5]/60 text-[#263D52] font-semibold px-2 py-0.5 rounded-full border border-[#E8D8C5]">Mobile App</span>
              </div>
              <div class="text-[11px] text-[#777D80] flex items-center gap-1 font-sans">
                <span>Pathway:</span>
                <span class="text-[#263D52] font-semibold capitalize">${userRole} Stream</span>
              </div>
            </div>
          </button>

          <!-- Flow Diagram Inspection Trigger -->
          <button id="btn-open-diagram" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F7F4] hover:bg-[#E8D8C5]/40 border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer" title="View Full Flow Diagram Pathway">
            ${Icons.Layers({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
            <span class="hidden sm:inline">Flow Diagram</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#D9825B]"></span>
          </button>
        </div>

        <!-- Flow Navigation Steps (Strict Pathway Guidance) -->
        <nav class="hidden lg:flex items-center gap-1 bg-[#F8F7F4] p-1 rounded-xl border border-[#E8D8C5]">
          ${steps.map((step, idx) => {
            const isActive = currentScreen === step.id;
            const isRelevant = step.path === 'both' || step.path === userRole;
            const isOrganizer = step.path === 'organizer';

            return `
              <button
                class="btn-flow-step flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#263D52] text-white shadow-sm'
                    : isRelevant
                      ? 'text-[#202B36] hover:bg-white hover:text-[#263D52]'
                      : 'text-[#777D80] opacity-50 hover:opacity-80'
                }"
                data-step="${step.id}"
                title="${step.label}"
              >
                <span class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-[#D9825B] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
                }">
                  ${step.num}
                </span>
                <span>${step.label}</span>
                ${isOrganizer ? '<span class="text-[9px] text-[#D9825B] font-bold ml-0.5">ORG</span>' : ''}
              </button>
              ${idx < steps.length - 1 ? '<span class="text-[#A9BEC4] text-xs">→</span>' : ''}
            `;
          }).join('')}
        </nav>

        <!-- Right Controls: Role Toggle, My Passes, Venues, Device Mockup -->
        <div class="flex items-center gap-2 w-full md:w-auto justify-end">
          
          <!-- Role Switcher -->
          <div class="flex items-center bg-[#F8F7F4] rounded-xl p-0.5 border border-[#E8D8C5]">
            <button
              id="btn-switch-student"
              class="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                userRole === 'student'
                  ? 'bg-[#263D52] text-white shadow-xs'
                  : 'text-[#777D80] hover:text-[#202B36]'
              }"
            >
              Student
            </button>
            <button
              id="btn-switch-organizer"
              class="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                userRole === 'organizer'
                  ? 'bg-[#D9825B] text-white shadow-xs'
                  : 'text-[#777D80] hover:text-[#202B36]'
              }"
            >
              Organizer
            </button>
          </div>

          <!-- My Passes Trigger -->
          <button
            id="btn-open-passes"
            class="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Registered Event Passes"
          >
            ${Icons.Ticket({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
            <span class="hidden sm:inline">Passes</span>
            ${registeredCount > 0 ? `<span class="bg-[#D9825B] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">${registeredCount}</span>` : ''}
          </button>

          <!-- Venues Trigger -->
          <button
            id="btn-open-map"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Campus Facilities"
          >
            ${Icons.MapPin({ class: 'w-3.5 h-3.5 text-[#263D52]' })}
            <span class="hidden sm:inline">Venues</span>
          </button>

          <!-- Device Mode Preview Toggle (Phone Frame vs Desktop) -->
          <button
            id="btn-toggle-device"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white transition-colors text-xs font-semibold cursor-pointer shadow-subtle"
            title="Toggle Phone Mockup Preview"
          >
            ${deviceMode === 'mobile' ? Icons.Laptop({ class: 'w-3.5 h-3.5 text-[#A9BEC4]' }) : Icons.Phone({ class: 'w-3.5 h-3.5 text-[#A9BEC4]' })}
            <span class="hidden md:inline">${deviceMode === 'mobile' ? 'Desktop' : 'Phone Frame'}</span>
          </button>
        </div>

      </div>
    </header>
  `;
};
