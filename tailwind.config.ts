import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/select.js'
  ],

  theme: {
    extend: {
      colors: {
        _E0E1EA: '#E0E1EA', //white
        _F6F7FF: '#F6F7FF', //grey-white, header and footer color
        _707C87: '#707C87', //black, text color
        _2C36F2: '#2C36F2', //blue, button color
        _1F1E25: '#1F1E25', //black
        _C1C2CA: '#C1C2CA' //grey
      }
    },
  },
    plugins: [],
};
export default config;

