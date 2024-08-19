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
        'placeholder-color': '#333333'
      }
    },
  },
  plugins: [],
}

