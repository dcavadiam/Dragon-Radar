import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			saiyanYellow: '#eedf2f',
  			saiyanRed: '#de1f2f'
  		},
  		fontFamily: {
  			saiyan: [
  				'Saiyan',
  				'sans-serif'
  			],
  			permanentMarker: [
  				'Permanent Marker',
  				'cursive'
  			]
  		},
  		dropShadow: {
  			custom: '0 0 5px rgba(0, 0, 0, 0.5)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
