/** @type {import('tailwindcss').Config} */

import { ThemePalette } from "./components/theme";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      ...ThemePalette,
    },
  },
  plugins: [],
};
