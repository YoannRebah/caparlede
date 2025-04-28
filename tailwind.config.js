/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {

      // colors
      colors: {
        
        // Bases
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        body: 'var(--color-body)',
        header: 'var(--color-header)',
        footer: 'var(--color-footer)',

        // Primaires
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',

        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',

        tertiary: 'var(--color-tertiary)',
        'tertiary-light': 'var(--color-tertiary-light)',
        'tertiary-dark': 'var(--color-tertiary-dark)',

        quaternary: 'var(--color-quaternary)',
        'quaternary-light': 'var(--color-quaternary-light)',
        'quaternary-dark': 'var(--color-quaternary-dark)',

        // Palettes
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        'color-3': 'var(--color-3)',
        'color-4': 'var(--color-4)',
        'color-5': 'var(--color-5)',
        'color-6': 'var(--color-6)',
        'color-7': 'var(--color-7)',
        'color-8': 'var(--color-8)',
        'color-9': 'var(--color-9)',
        'color-10': 'var(--color-10)',

        // États
        checked: 'var(--color-checked)',
        'checked-light': 'var(--color-checked-light)',
        'checked-dark': 'var(--color-checked-dark)',

        success: 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        'success-dark': 'var(--color-success-dark)',

        error: 'var(--color-error)',
        'error-light': 'var(--color-error-light)',
        'error-dark': 'var(--color-error-dark)',

        warning: 'var(--color-warning)',
        'warning-light': 'var(--color-warning-light)',
        'warning-dark': 'var(--color-warning-dark)',

        infos: 'var(--color-infos)',
        'infos-light': 'var(--color-infos-light)',
        'infos-dark': 'var(--color-infos-dark)',

        disabled: 'var(--color-disabled)',
        'disabled-light': 'var(--color-disabled-light)',
        'disabled-dark': 'var(--color-disabled-dark)',
      },

      // screens
      screens: {
        'xs': '340px',
        's': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // fontSize
      fontSize: {
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        's': '0.925rem',  // 14px
        'base': '1rem',    // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',   // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
      },

      // animation
      animation: {
        'fade-scale': 'anim-fade-scale 0.5s forwards',
        'fade-scale': 'fade-scale 0.5s forwards',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-in',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'pop': 'pop 0.3s ease-out',
      },
      keyframes: {
        'anim-fade-scale': {
          from: { opacity: '0', transform: 'scale(1.2)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'fade-scale': {
          from: { opacity: '0', transform: 'scale(1.2)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'slide-up': {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      themes.forEach(theme => {
        addVariant(theme, `[data-theme="${theme}"] &`);
      });
    }),
  ],
};

export default config;
