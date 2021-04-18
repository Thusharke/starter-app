module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        'cust' : '14%'
      }
    },
    fontFamily: {
      sans: ['"Lausanne 300"', 'sans-serif']
    },
    minWidth: {
      '0': '0',
      '1': '60px',
      '2': '80px',
      '3': '100px',
      '4': '200px',
     },
     minHeight: {
      '0': '0',
      '1': '60px',
      '2': '80px',
      '3': '100px',
      '4': '200px',
     },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'toastbr': '#dedecc',
      'strip' : '#f5ff78',
      'cust' : '#c6c6a7'
     }),
    letterSpacing: {
      tightest: '-.03em',
       tighter: '-.05em',
        tight: '-.025em',
       normal: '0',
       wider: '.05em',
      widest: '.25em',
     },
    lineHeight: {
      'extra-loose': '2.5',
      '24': '6rem',
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'white' : '#fff',
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bgColor' : '#f4f3ef',
      'btnColor' : '#2e2e27',
      'bgToast' : '#fcfbfa',
      'ske' : 'rgb(167, 165, 165)',
      'ske1' : '#e8e8dc'
     }),
     textColor: theme => theme('colors'),
     textColor: {
       'primary': '#3490dc',
       'black' : '#000000',
       'white' : '#fff',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'navColor' : '#787868',
       'heroHead': "#2e2e27",
       'toastColor' : '#2e2e27'
     },
     fontSize: {
       xsm : ['16px','24px'],
      sm: ['20px', '30px'],
      base: ['16px', '6rem'],
      slg : ['24px','32px'],
      lg: ['28px', '35px'],
      xl: ['6.2rem', '6.5rem'],
      lgg : ['4.8rem','5.0rem'],
      cus : ['3.5rem','4rem'],
      md : ['20px','30px']
    },
    boxShadow: {
      detShadow : '0px 10px 28px rgb(233 233 233 / 90%)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
