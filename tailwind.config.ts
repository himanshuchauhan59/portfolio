import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'min-sm': '640px',
      // => @media (min-width: 640px) { ... }

      'min-md': '768px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'min-xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'min-2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-theme": "linear-gradient(0deg, rgba(67,40,24,1) 0%, rgba(187,148,87,0.8744747899159664) 100%)",
        "blobImage": "url('/animatedBlob.svg')",
      },
    },
    colors: {
      "primary": "#432818",
      "secondary": "#FFE6A7",
    },
    backgroundColor: {
      "primary": "#432818",
      "secondary": "#FFE6A7",
      "secondary-one": "#FFE6A750",
      "gradient-theme": "linear-gradient(0deg, rgba(67,40,24,1) 0%, rgba(187,148,87,0.8744747899159664) 100%)"
    }
  },
  plugins: [],
};
export default config;
