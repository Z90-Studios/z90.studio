/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  //darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,ts*,tsx,vue,mdx,md}",
    "./node_modules/flowbite/**/*.js",
    // transform: {
    //   mdx: (content) => {
    //     return remark().process(content)
    //   }}
  ],
  //content: ["./src/components/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "pulse-short": "pulse 5s ease-in-out",
        "custom-spin": "random 90s ease infinite",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        xl: "0 32px 64px var(--tw-shadow-color)",
      },
      boxShadow: {
        overdrive: "0 10px 420px 150px rgb(0 0 0 / 0.25)",
      },
      zIndex: {
        100: "100",
      },
      scale: {
        flip: "-1",
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
  corePlugins: {
    fontSize: false,
    aspectRatio: false,
  },
  variants: {
    extend: {
      // ...
      backgroundOpacity: ["active"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    //require("tailwindcss-fluid-type"),
    //require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    //require('@tailwindcss/aspect-ratio'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
