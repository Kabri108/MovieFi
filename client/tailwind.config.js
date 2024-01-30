/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //customize colors and fonts
  theme: {
    extend: {
      height:{
        header:'560px',
        rate:'300px'
      },
      
      fontSize:{
        h1:'2.6rem'
      },
      screens:{
        xs:'475px'
      },
      colors:{
        main:'#0f1014',
        subMain:'#FFA500',
        dry:'#0B0F29',
        star:'#FFB000',
        text:'#C0C0C0',
        border:'#4b5563',
        dryGray:'#E0D5D5',
      }
    },
  },
  // plugins: [require('@tailwindcss/line-clamp')],
}

