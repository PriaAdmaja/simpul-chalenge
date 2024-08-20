const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2f80ed',
        'bg-main-primary': '#333333',
        'bg-main-secondary': '#4f4f4f',
        'line-primary': '#f2f2f2',
        'chat-color': '#8785ff',
        'todo-color': '#f8b76b',
        'border-dark': '#828282',
        'placeholder-color': '#333333',
        'back-icon-person-bg': '#e0e0e0',
        'chat-bubble-first-primary': '#e5a443',
        'chat-bubble-first-secondary': '#fceed3',
        'chat-bubble-second-primary': '#9b51e0',
        'chat-bubble-second-secondary': '#eedcff',
        'chat-bubble-third-primary': '#43b78d',
        'chat-bubble-third-secondary': '#d2f2ea',
      },
      fontFamily: {
        'lato': ['lato', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

