const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg')",
        hloan:
          "url('https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg')",
        hero2:
          "url('https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
      },
      colors: {
        primary: {
          50: 'hsl(215, 100%, 96%)',
          100: 'hsl(215, 100%, 90%)',
          200: 'hsl(215, 100%, 80%)',
          300: 'hsl(215, 100%, 70%)',
          400: 'hsl(215, 100%, 60%)',
          500: 'hsl(215, 100%, 50%)',
          600: 'hsl(215, 100%, 35%)',
          700: 'hsl(215, 100%, 25%)',
          800: 'hsl(215, 100%, 15%)',
          900: 'hsl(215, 100%, 05%)',
        },
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
      },
      lineHeight: {
        '80p': '80%',
        '90p': '90%',
      },
      fontFamily: {
        display: ['Helvetica'],
      },
      outlineWidth: {
        1.5: '1.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
