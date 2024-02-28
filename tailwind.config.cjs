const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "custom-spin": "random 90s ease infinite",
      },
      keyframes: {
        random: {
          "0% ": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(45deg)" },
          "30%": { transform: "rotate(90deg)" },
          "40%": { transform: "rotate(70deg)" },
          "50%": { transform: "rotate(180deg)" },
          "60%": { transform: "rotate(145deg)" },
          "80%": { transform: "rotate(220deg)" },
          "90%": { transform: "rotate(320deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
