// Screen 1: Onboarding (Modern Campus Theme)
// Mandatory: Pick at least 3 Interest Tags

import { INTEREST_TAGS } from '../data/events.js';
import { Icons } from './Icons.js';

export const renderOnboardingScreen = (selectedTags = [], chosenPath = 'student') => {
  const count = selectedTags.length;
  const isUnlocked = count >= 3;
  const needed = Math.max(0, 3 - count);

  return `
    <div class="max-w-2xl mx-auto py-5 px-4 sm:px-6 animate-fade-in text-left">
      
      <!-- Flow Breadcrumb Indicator -->
      <div class="flex items-center justify-between mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D8C5]/60 border border-[#E8D8C5] text-[#263D52] text-xs font-semibold">
          Screen 1 • Onboarding
        </span>
        <span class="text-xs text-[#777D80] font-medium">Step 1 of 4</span>
      </div>

      <!-- Header & Requirement Alert -->
      <div class="mb-6">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#202B36] font-display tracking-tight mb-2">
          Select Your Campus Interests
        </h2>
        <p class="text-[#777D80] text-sm leading-relaxed">
          Choose topics you want in your discovery stream and clash prevention notifications.
        </p>

        <!-- Mandatory 3 Tags Counter Banner -->
        <div class="mt-4 p-4 rounded-2xl ${
          isUnlocked
            ? 'bg-white border-2 border-[#263D52] text-[#202B36]'
            : 'bg-[#F2EFEB] border border-[#E8D8C5] text-[#202B36]'
        } transition-all duration-200 flex items-center justify-between shadow-subtle">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl ${isUnlocked ? 'bg-[#263D52] text-[#D9825B]' : 'bg-[#E8D8C5] text-[#263D52]'} flex items-center justify-center font-bold text-xs">
              ${isUnlocked ? '✓' : '!'}
            </div>
            <div>
              <div class="text-xs font-bold uppercase tracking-wider ${isUnlocked ? 'text-[#263D52]' : 'text-[#D9825B]'}">
                ${isUnlocked ? 'Requirement Satisfied' : 'Mandatory Selection'}
              </div>
              <div class="text-xs text-[#777D80]">
                ${
                  isUnlocked
                    ? `You selected ${count} tags. You can add more or proceed.`
                    : `Pick at least <strong class="text-[#202B36] font-semibold">3 interest tags</strong> to continue (${needed} more needed).`
                }
              </div>
            </div>
          </div>
          <div class="text-right pl-2">
            <span class="text-xl font-bold font-display ${isUnlocked ? 'text-[#263D52]' : 'text-[#D9825B]'}">
              ${count}<span class="text-xs text-[#777D80] font-normal">/3</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Tags Grid: Soft Beige/Dusty Blue unselected, Coral selected -->
      <div class="mb-7">
        <div class="flex items-center justify-between mb-3 text-xs text-[#777D80]">
          <span>Campus Topics (${INTEREST_TAGS.length})</span>
          <span>Tap to select or deselect</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          ${INTEREST_TAGS.map((tag) => {
            const isSelected = selectedTags.includes(tag.label);
            return `
              <button
                type="button"
                class="tag-toggle-btn p-3 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#D9825B] border-[#D9825B] text-white shadow-sm ring-1 ring-[#D9825B]'
                    : 'bg-white border-[#E8D8C5] text-[#263D52] hover:bg-[#F2EFEB] hover:border-[#A9BEC4]'
                }"
                data-tag="${tag.label}"
              >
                <div class="flex items-center gap-2.5 truncate">
                  <span class="text-lg">${tag.icon}</span>
                  <div class="truncate">
                    <div class="text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#202B36]'}">
                      ${tag.label}
                    </div>
                    <div class="text-[10px] capitalize truncate ${isSelected ? 'text-[#F8F7F4]/90' : 'text-[#777D80]'}">
                      ${tag.category}
                    </div>
                  </div>
                </div>

                <div class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] ml-1.5 shrink-0 font-bold ${
                  isSelected
                    ? 'bg-white text-[#D9825B]'
                    : 'border border-[#E8D8C5] text-transparent'
                }">
                  ✓
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Choose Pathway Branch (Student vs Organizer) -->
      <div class="mb-7 pt-4 border-t border-[#E8D8C5]">
        <label class="block text-xs font-bold text-[#202B36] uppercase tracking-wider mb-3">
          Choose Your Pathway to Enter
        </label>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- Student Path Card -->
          <label class="path-select-card p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            chosenPath === 'student'
              ? 'bg-white border-2 border-[#263D52] shadow-sm'
              : 'bg-[#F2EFEB]/60 border-[#E8D8C5] hover:bg-white text-[#777D80]'
          }">
            <input type="radio" name="onboardingPath" value="student" class="sr-only" ${chosenPath === 'student' ? 'checked' : ''}>
            <div class="flex items-start justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-[#263D52] text-white flex items-center justify-center font-bold text-xs">
                STU
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                chosenPath === 'student' ? 'bg-[#263D52] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
              }">
                Screen 2 Flow
              </span>
            </div>
            <div>
              <div class="text-sm font-bold text-[#202B36] mb-1">Student Attendee</div>
              <p class="text-xs text-[#777D80] leading-relaxed">
                Explore personalized feeds, RSVP to events, add to calendars, and access digital check-in passes.
              </p>
            </div>
          </label>

          <!-- Organizer Path Card -->
          <label class="path-select-card p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            chosenPath === 'organizer'
              ? 'bg-white border-2 border-[#D9825B] shadow-sm'
              : 'bg-[#F2EFEB]/60 border-[#E8D8C5] hover:bg-white text-[#777D80]'
          }">
            <input type="radio" name="onboardingPath" value="organizer" class="sr-only" ${chosenPath === 'organizer' ? 'checked' : ''}>
            <div class="flex items-start justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-[#D9825B] text-white flex items-center justify-center font-bold text-xs">
                ORG
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                chosenPath === 'organizer' ? 'bg-[#D9825B] text-white' : 'bg-[#E8D8C5] text-[#263D52]'
              }">
                Screen 5 Flow
              </span>
            </div>
            <div>
              <div class="text-sm font-bold text-[#202B36] mb-1">Campus Organizer</div>
              <p class="text-xs text-[#777D80] leading-relaxed">
                Submit campus event proposals with automated Clash Guard facility detection and slot re-assignment.
              </p>
            </div>
          </label>
        </div>
      </div>

      <!-- Continue Action Button -->
      <div>
        <button
          id="btn-continue-onboarding"
          ${!isUnlocked ? 'disabled' : ''}
          class="w-full py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer ${
            isUnlocked
              ? 'bg-[#263D52] hover:bg-[#202B36] text-white shadow-subtle'
              : 'bg-[#E8D8C5] text-[#777D80] cursor-not-allowed border border-[#E8D8C5]'
          }"
        >
          <span>${
            chosenPath === 'student'
              ? 'Enter Discovery Feed (Screen 2)'
              : 'Open Event Creation Form (Screen 5)'
          }</span>
          <span>→</span>
        </button>

        ${
          !isUnlocked
            ? `<div class="text-center text-xs text-[#D9825B] mt-2 font-medium">
                Pick at least 3 interest tags above to activate the stream
              </div>`
            : ''
        }
      </div>

    </div>
  `;
};
