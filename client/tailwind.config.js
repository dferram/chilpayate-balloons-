/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EFE0',
          300: '#EFE7D2',
          400: '#E4DAC2',
        },
        champagne: {
          100: '#FAF0E2',
          200: '#F5E3C7',
          300: '#ECCFA5',
          400: '#DFB77D',
          500: '#CFA058',
          600: '#B08038',
        },
        blush: {
          50: '#FFF6F6',
          100: '#FDEAEB',
          200: '#F9D5D7',
          300: '#F2B5B9',
          400: '#E68A91',
          500: '#D6626B',
        },
        sage: {
          50: '#F4F8F5',
          100: '#E6F0E9',
          200: '#CFE2D4',
          300: '#AECBB7',
          400: '#84AC91',
          500: '#5F8E6E',
        },
        charcoal: {
          800: '#2A292E',
          900: '#1A191D',
          950: '#100F12',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft-float': '0 20px 40px -15px rgba(207, 160, 88, 0.12)',
        'luxury': '0 30px 60px -12px rgba(18, 17, 19, 0.08), 0 18px 36px -18px rgba(18, 17, 19, 0.05)',
        'balloon': 'inset -6px -6px 12px rgba(0,0,0,0.1), inset 6px 6px 12px rgba(255,255,255,0.7), 0 15px 30px rgba(0,0,0,0.12)',
        'balloon-glow': '0 0 40px rgba(245, 227, 199, 0.6), inset 0 2px 4px rgba(255,255,255,0.8)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        sway: {
          '0%': { transform: 'rotate(-3deg) translateX(-4px)' },
          '100%': { transform: 'rotate(3deg) translateX(4px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-gold': 'linear-gradient(135deg, #FFE7B3 0%, #D4AF37 50%, #AA7C11 100%)',
        'rose-gold': 'linear-gradient(135deg, #FFE6E6 0%, #E8A8A8 50%, #C47B7B 100%)',
        'pearl-shimmer': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,240,230,0.6) 50%, rgba(255,255,255,0.9) 100%)',
      }
    },
  },
  plugins: [],
};
