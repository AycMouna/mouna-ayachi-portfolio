/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { paper: '#f5f6f2', ink: '#252b28', muted: '#737d76', night: '#171e1b', nightInk: '#edf0e9', nightMuted: '#a4b0a7', line: '#e0e6df', nightLine: '#35413a', accent: '#66877b', accentDark: '#4f7064' }, fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'], mono: ['DM Mono', 'monospace'] }, letterSpacing: { editorial: '-0.045em' } } },
  plugins: [],
};
