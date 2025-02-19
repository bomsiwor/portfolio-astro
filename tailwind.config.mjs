/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      "fontFamily": { 'bricol': ["Bricolage Grotesque", "serif"], },
      "colors": {
        "lighter": {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffcbcb',
          '300': '#fea3a3',
          '400': '#fb6e6e',
          '500': '#f24141',
          '600': '#e02222',
          '700': '#bc1919',
          '800': '#9b1919',
          '900': '#811b1b',
          '950': '#460909',
        },
        "primary": {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc8c8',
          '300': '#ffb1b1',
          '400': '#fd6c6c',
          '500': '#f53e3e',
          '600': '#e22020',
          '700': '#be1717',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
        },
        "secondary": {
          '50': '#f2f9fd',
          '100': '#e3f1fb',
          '200': '#c1e4f6',
          '300': '#8aceef',
          '400': '#4cb6e4',
          '500': '#259dd2',
          '600': '#1679ab',
          '700': '#146590',
          '800': '#145578',
          '900': '#164764',
          '950': '#0f2e42',
        },
        "darker": {
          '50': '#edf9ff',
          '100': '#d7f0ff',
          '200': '#b8e6ff',
          '300': '#88d8ff',
          '400': '#50c0ff',
          '500': '#27a1ff',
          '600': '#1082ff',
          '700': '#096aec',
          '800': '#0f55be',
          '900': '#134a95',
          '950': '#102c57',
        }
      },
      "animation": {
        "light-rise": "light-rise 8s ease-out infinite"
      },
      "keyframes": {
        "light-rise": {
          '0%, 100%': { translate: '0 0', },
          '50%': { translate: '100vw 500px', scale: '150%' },
        }
      }

    },
  },
  plugins: [],
}
