/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gcwh-oceanblue': '#0D47A1',
        'gcwh-violet': '#9C27B0',
        'gcwh-mintgreen': '#00BFA5',
        'gcwh-mango-orange': '#FF6F00',
        'gcwh-skyblue': '#2196F3',
        'gcwh-sunnyorange': '#FF9800'
      },
    },
  },
  plugins: [],
}

