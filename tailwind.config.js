/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#263D52',
        },
        charcoal: {
          DEFAULT: '#202B36',
        },
        offwhite: {
          DEFAULT: '#F8F7F4',
        },
        coral: {
          DEFAULT: '#D9825B',
        },
        dustyblue: {
          DEFAULT: '#A9BEC4',
        },
        warmbeige: {
          DEFAULT: '#E8D8C5',
        },
        slategrey: {
          DEFAULT: '#777D80',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '14px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(32, 43, 54, 0.05), 0 1px 2px rgba(32, 43, 54, 0.03)',
        'card': '0 4px 12px rgba(38, 61, 82, 0.06), 0 1px 3px rgba(38, 61, 82, 0.04)',
        'card-hover': '0 10px 24px rgba(38, 61, 82, 0.1), 0 2px 6px rgba(38, 61, 82, 0.05)',
        'modal': '0 20px 40px -10px rgba(32, 43, 54, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.99)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
