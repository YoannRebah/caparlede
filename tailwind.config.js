/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ou 'media' pour suivre le thème du système
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(2)', opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        crtAnim: {
          '0%': { transform: 'perspective(1000px) rotateX(6deg) rotateY(-6deg)', opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)', opacity: '1' },
        },
      },
      animation: {
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'crt-anim': 'crtAnim 0.5s ease-out forwards',
      },
    }
  },
  plugins: []
}
