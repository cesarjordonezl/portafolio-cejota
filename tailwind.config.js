/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'veryDark': '#4d1c00',
        'grey': '#ABABAB',
        'white': '#FFFFFF',
        'white-rgba': 'rgba(171, 171, 171, 0.1)',
        'orange': '#f7db15',
        'custom-grey': '#ABABAB',
        'link': '#0060FF',
        'purple': '#5865F2',
        'green': '#25D366',
        'blue': '#0e76a8',  
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      transitionDelay: {
        '2000': '2000ms',
      },
      inset: {
        '1/2': '50%',
      },
      transform: {
        '-translate-x-1/2': '-50%',
      },
      
    },
  },
  plugins: [],
}

