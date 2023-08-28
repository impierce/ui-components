const { fontFamily } = require('tailwindcss/defaultTheme');
// import typography from '@tailwindcss/typography';
// import plugin from 'tailwindcss/plugin';
const typography = require('@tailwindcss/typography');
// const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          dark: 'hsl(var(--dark-background))'
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          dark: 'hsl(var(--dark-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Satoshi-Variable', ...fontFamily.sans]
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.violet.200"), 0 0 20px theme("colors.violet.700")'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    typography
    // plugin(function ({ addVariant, matchUtilities, theme }) {
    //   addVariant('hocus', ['&:hover', '&:focus']);
    //   // Square utility
    //   matchUtilities(
    //     {
    //       square: (value) => ({
    //         width: value,
    //         height: value
    //       })
    //     },
    //     { values: theme('spacing') }
    //   );
    // })
  ]
};
