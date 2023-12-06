/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        dark: "#10151D",
        card: "#161E29",
      },
      colors:{
        primary: "#3B82F6",
        dark: "#BFC7D2",
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}
