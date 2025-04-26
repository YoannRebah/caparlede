/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5'];

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {

        // Bases
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        body: 'var(--color-body)',

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

        // Etats
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
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      themes.forEach(theme => {
        addVariant(theme, `[data-theme="${theme}"] &`);
      });
    }),
  ],
  variants: {
    extend: {
      backgroundColor: themes,
      textColor: themes,
      borderColor: themes,
      boxShadow: themes,
    },
  },
};

export default config;
