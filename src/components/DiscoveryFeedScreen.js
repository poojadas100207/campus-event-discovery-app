// Screen 2: Discovery Feed (Modern Campus Theme)
// Personalized Stream, Search, Filter Pills & Event Cards

import { Icons } from './Icons.js';
import { formatTimeDisplay } from '../services/clashGuard.js';

export const renderDiscoveryFeedScreen = (events = [], userPreferences = {}, activeFilter = 'all', searchQuery = '', bookmarks = []) => {
  const userTags = userPreferences.interestTags || [];

  // Filter events by search query and category filter
  let filtered = events.filter(event => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchVenue = event.venue.toLowerCase().includes(q);
      const matchOrg = event.organizer.toLowerCase().includes(q);
      const matchTag = (event.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchVenue && !matchOrg && !matchTag) return false;
    }

    if (activeFilter === 'personalized') {
      return (event.tags || []).some(t => userTags.includes(t));
    } else if (activeFilter === 'free') {
      return event.isFree;
    } else if (activeFilter === 'bookmarked') {
      return bookmarks.includes(event.id);
    }
    return true;
  });

  const getEventMatchScore = (event) => {
    return (event.tags || []).filter(t => userTags.includes(t)).length;
  };

  filtered.sort((a, b) => {
    const scoreA = getEventMatchScore(a);
    const scoreB = getEventMatchScore(b);
    if (scoreB !== scoreA) return scoreB - scoreA;
    return new Date(a.date) - new Date(b.date);
  });

  const featuredEvent = events.find(e => e.isFeatured) || events[0];

  return `
    <div class="max-w-5xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Top Stream Header Panel -->
      <div class="bg-white rounded-3xl p-5 sm:p-6 mb-6 border border-[#E8D8C5] shadow-card">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8D8C5]/60 text-[#263D52] text-xs font-semibold">
                Screen 2 • Discovery Feed
              </span>
              <span class="text-xs text-[#777D80]">Curated Stream</span>
            </div>
            <h2 class="text-2xl font-bold text-[#202B36] font-display tracking-tight">
              Events Tailored For You
            </h2>
            <div class="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span class="text-xs text-[#777D80]">Selected Interests:</span>
              ${userTags.map(tag => `
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F8F7F4] border border-[#E8D8C5] text-[#263D52] text-xs font-medium">
                  ${tag}
                </span>
              `).join('')}
              <button id="btn-edit-interests" class="text-xs text-[#D9825B] hover:underline font-semibold ml-1 cursor-pointer">
                Edit Tags
              </button>
            </div>
          </div>

          <!-- Quick Action: Host Event -->
          <div class="flex items-center gap-2 shrink-0">
            <button id="btn-feed-to-organizer" class="px-4 py-2.5 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-subtle">
              ${Icons.Plus({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
              <span>Host an Event</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Search Bar & Category Filters -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        
        <!-- Search Input (Clean White with Subtle Grey Border) -->
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777D80]">
            ${Icons.Search({ class: 'w-4 h-4' })}
          </div>
          <input
            type="text"
            id="input-feed-search"
            value="${searchQuery}"
            placeholder="Search events by title, club, tag, or venue..."
            class="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8D8C5] rounded-xl text-xs text-[#202B36] placeholder-[#777D80] focus:outline-none focus:border-[#263D52] shadow-subtle"
          >
          ${searchQuery ? `
            <button id="btn-clear-search" class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#777D80] hover:text-[#202B36] text-xs">
              ✕
            </button>
          ` : ''}
        </div>

        <!-- Category Filters: Soft Beige & Dusty Blue backgrounds, Navy text, Coral selected -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-white text-[#263D52] hover:bg-[#F2EFEB] border border-[#E8D8C5]'
            }"
            data-filter="all"
          >
            All Events (${events.length})
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
              activeFilter === 'personalized'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-[#E8D8C5]/50 text-[#263D52] hover:bg-[#E8D8C5] border border-[#E8D8C5]'
            }"
            data-filter="personalized"
          >
            <span>★ For You</span>
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'free'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-[#A9BEC4]/20 text-[#263D52] hover:bg-[#A9BEC4]/40 border border-[#A9BEC4]/40'
            }"
            data-filter="free"
          >
            Free Pass
          </button>

          <button
            class="filter-pill-btn px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
              activeFilter === 'bookmarked'
                ? 'bg-[#D9825B] text-white shadow-subtle'
                : 'bg-white text-[#263D52] hover:bg-[#F2EFEB] border border-[#E8D8C5]'
            }"
            data-filter="bookmarked"
          >
            <span>Saved (${bookmarks.length})</span>
          </button>
        </div>
      </div>

      <!-- Spotlight Hero Event (If Available) -->
      ${featuredEvent && !searchQuery && activeFilter === 'all' ? `
        <div class="mb-8">
          <div class="flex items-center justify-between mb-2.5 text-xs">
            <span class="font-bold text-[#202B36] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              ${Icons.Sparkles({ class: 'w-3.5 h-3.5 text-[#D9825B]' })}
              Campus Spotlight
            </span>
            <span class="text-[#D9825B] text-xs font-semibold">Flagship Event</span>
          </div>

          <div class="bg-white rounded-3xl overflow-hidden border border-[#E8D8C5] shadow-card group transition-shadow hover:shadow-card-hover">
            <div class="grid grid-cols-1 md:grid-cols-12">
              <div class="md:col-span-7 relative h-60 sm:h-72 overflow-hidden bg-[#202B36]">
                <img src="${featuredEvent.image}" alt="${featuredEvent.title}" class="w-full h-full object-cover event-img-zoom">
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                  <span class="px-2.5 py-1 rounded-full bg-[#D9825B] text-white text-[10px] font-bold uppercase tracking-wider">
                    Spotlight
                  </span>
                  <span class="px-2.5 py-1 rounded-full bg-white/90 text-[#202B36] text-[10px] font-bold">
                    ${featuredEvent.date}
                  </span>
                </div>
              </div>

              <div class="md:col-span-5 p-6 flex flex-col justify-between">
                <div>
                  <div class="text-[11px] font-semibold text-[#D9825B] uppercase tracking-wider mb-1">
                    ${featuredEvent.venue}
                  </div>
                  <h3 class="text-xl font-bold text-[#202B36] font-display mb-2 leading-tight">
                    ${featuredEvent.title}
                  </h3>
                  <p class="text-xs text-[#777D80] line-clamp-3 leading-relaxed mb-4">
                    ${featuredEvent.tagline || featuredEvent.description}
                  </p>
                </div>

                <div class="pt-3 border-t border-[#E8D8C5] flex items-center justify-between">
                  <span class="text-xs text-[#777D80]">
                    By <strong class="text-[#202B36]">${featuredEvent.organizer}</strong>
                  </span>
                  <button
                    class="btn-view-details px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    data-event-id="${featuredEvent.id}"
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Feed Grid Section -->
      <div class="mb-4 flex items-center justify-between text-xs text-[#777D80]">
        <span class="font-bold text-[#202B36] text-sm">
          ${filtered.length} Event${filtered.length === 1 ? '' : 's'} Found
        </span>
        <span>Tap any card to view event specifications</span>
      </div>

      ${filtered.length === 0 ? `
        <div class="bg-white rounded-3xl p-10 text-center border border-[#E8D8C5]">
          <div class="text-3xl mb-2 text-[#777D80]">🔍</div>
          <h3 class="text-base font-bold text-[#202B36] mb-1">No Matching Events Found</h3>
          <p class="text-xs text-[#777D80] max-w-sm mx-auto mb-4">
            Try adjusting your search query, selecting different topic filters, or hosting an event.
          </p>
          <button id="btn-reset-filters" class="px-4 py-2 rounded-xl bg-[#263D52] hover:bg-[#202B36] text-white text-xs font-semibold cursor-pointer">
            Reset Filters
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(event => {
            const matchCount = getEventMatchScore(event);
            const isBookmarked = bookmarks.includes(event.id);
            const capacityRatio = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
            const spotsRemaining = Math.max(0, event.capacity - event.registeredCount);

            return `
              <div class="campus-card flex flex-col justify-between group overflow-hidden">
                <div>
                  <!-- Card Image Header -->
                  <div class="relative h-44 overflow-hidden bg-[#202B36]">
                    <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover event-img-zoom">

                    <!-- Top Pill Badges -->
                    <div class="absolute top-3 inset-x-3 flex items-center justify-between">
                      <div class="flex items-center gap-1.5">
                        <span class="px-2.5 py-1 rounded-lg bg-white/95 text-[11px] font-bold text-[#202B36] shadow-xs">
                          ${event.date}
                        </span>
                        ${matchCount > 0 ? `
                          <span class="px-2 py-0.5 rounded-lg bg-[#263D52] text-[10px] font-bold text-white shadow-xs">
                            ★ Tag Match
                          </span>
                        ` : ''}
                      </div>

                      <!-- Bookmark Button -->
                      <button
                        class="btn-toggle-bookmark w-8 h-8 rounded-lg bg-white/90 text-[#202B36] hover:text-[#D9825B] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                        data-event-id="${event.id}"
                        title="Bookmark event"
                      >
                        ${Icons.Bookmark({ class: 'w-4 h-4', filled: isBookmarked })}
                      </button>
                    </div>

                    <!-- Bottom Bar on Image -->
                    <div class="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-xs text-white">
                      <span class="px-2 py-0.5 rounded-md bg-[#202B36]/80 text-[11px] font-medium backdrop-blur-xs flex items-center gap-1">
                        ${Icons.Clock({ class: 'w-3 h-3 text-[#A9BEC4]' })}
                        ${formatTimeDisplay(event.startTime)} – ${formatTimeDisplay(event.endTime)}
                      </span>
                      <span class="px-2 py-0.5 rounded-md bg-white text-[#263D52] text-[10px] font-bold uppercase shadow-xs">
                        ${event.isFree ? 'Free Pass' : `₹${event.price}`}
                      </span>
                    </div>
                  </div>

                  <!-- Card Body -->
                  <div class="p-4 sm:p-5">
                    <!-- Title & Tagline -->
                    <h4 class="text-base font-bold text-[#202B36] group-hover:text-[#263D52] transition-colors line-clamp-1 mb-1 font-display">
                      ${event.title}
                    </h4>
                    <p class="text-xs text-[#777D80] line-clamp-2 mb-3 leading-relaxed">
                      ${event.tagline || event.description}
                    </p>

                    <!-- Venue & Organizer -->
                    <div class="space-y-1 mb-3 text-xs text-[#777D80]">
                      <div class="flex items-center gap-1.5 truncate">
                        ${Icons.MapPin({ class: 'w-3.5 h-3.5 text-[#D9825B] shrink-0' })}
                        <span class="truncate text-[#202B36] font-medium">${event.venue}</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        ${Icons.Users({ class: 'w-3.5 h-3.5 text-[#263D52] shrink-0' })}
                        <span>By <strong>${event.organizer}</strong></span>
                      </div>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1 mb-3">
                      ${(event.tags || []).slice(0, 3).map(t => {
                        const isMatch = userTags.includes(t);
                        return `
                          <span class="px-2 py-0.5 rounded-md text-[10px] font-medium ${
                            isMatch
                              ? 'bg-[#E8D8C5] text-[#263D52] font-semibold border border-[#E8D8C5]'
                              : 'bg-[#F8F7F4] text-[#777D80] border border-[#E8D8C5]'
                          }">
                            ${t}
                          </span>
                        `;
                      }).join('')}
                    </div>

                    <!-- Capacity Progress -->
                    <div class="pt-2.5 border-t border-[#E8D8C5]">
                      <div class="flex items-center justify-between text-[11px] mb-1">
                        <span class="text-[#777D80]">Capacity Status</span>
                        <span class="font-semibold ${spotsRemaining <= 15 ? 'text-[#D9825B]' : 'text-[#202B36]'}">
                          ${event.registeredCount} / ${event.capacity} spots
                        </span>
                      </div>
                      <div class="w-full h-1.5 bg-[#F2EFEB] rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all duration-300 ${
                          capacityRatio > 85 ? 'bg-[#D9825B]' : 'bg-[#263D52]'
                        }" style="width: ${capacityRatio}%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card Footer Button -->
                <div class="p-4 sm:p-5 pt-0">
                  <button
                    class="btn-view-details w-full py-2.5 rounded-xl bg-[#F8F7F4] hover:bg-[#263D52] text-[#263D52] hover:text-white border border-[#E8D8C5] hover:border-[#263D52] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    data-event-id="${event.id}"
                  >
                    <span>View Event Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

    </div>
  `;
};
