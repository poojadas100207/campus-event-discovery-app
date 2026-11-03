// Student Event Registration Modal

export const renderRegisterModal = (event) => {
  return `
    <div id="modal-register-backdrop" class="fixed inset-0 z-50 bg-[#202B36]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div class="glass-panel-elevated w-full max-w-md rounded-3xl border border-[#E8D8C5] p-6 text-left shadow-2xl relative">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-[#E8D8C5] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">🎟️</span>
            <div>
              <h3 class="text-base font-bold text-white font-display">
                Confirm Campus Registration
              </h3>
              <p class="text-[11px] text-[#777D80] truncate max-w-[240px]">
                ${event.title}
              </p>
            </div>
          </div>
          <button id="btn-close-register-modal" class="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#E8D8C5] text-[#777D80] hover:text-[#202B36] cursor-pointer text-xs">
            ✕
          </button>
        </div>

        <!-- Registration Form -->
        <form id="form-confirm-registration" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Your Full Name <span class="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="input-attendee-name"
              required
              value="Aarav Sharma"
              placeholder="e.g. Alex Morgan"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Campus Student ID / Roll No <span class="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="input-student-id"
              required
              value="STU-2026-8942"
              placeholder="e.g. STU-2026-8942"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <div>
            <label class="block text-xs font-bold text-[#202B36] mb-1">
              Campus Email <span class="text-rose-400">*</span>
            </label>
            <input
              type="email"
              id="input-student-email"
              required
              value="aarav.s@campus.edu"
              placeholder="name@campus.edu"
              class="w-full px-3 py-2 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] focus:outline-none focus:border-[#263D52]"
            >
          </div>

          <!-- Free pass badge -->
          <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
            <span class="text-[#D9825B] font-medium">Free Student RSVP</span>
            <span class="font-bold text-[#D9825B] font-display">₹0.00</span>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Confirm & Generate Digital Pass (Screen 4)</span>
              <span>→</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
};
