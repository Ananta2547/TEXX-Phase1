// TEXX Design System — Tailwind extend
// นำ object นี้ไปใส่ใน tailwind.config.ts ที่ theme.extend
// ค่าอ้างอิงจาก styles/tokens.css และ docs/design-system.md
export const texxTheme = {
  colors: {
    olive: {
      950: '#1E2016',
      900: '#26281E',
      800: '#34372A',
      700: '#434634',
      600: '#565A45',
    },
    cream: {
      DEFAULT: '#EAE8DD',
      muted: '#A9A99A',
      dim: '#7B7C6E',
      white: '#F5F4EE',
    },
    bronze: {
      DEFAULT: '#B99A6B',
      light: '#D0B588',
      dark: '#8C7550',
    },
  },
  fontFamily: {
    display: ['var(--font-display)', 'Sora', 'sans-serif'],
    body: ['var(--font-body)', 'Inter', 'sans-serif'],
  },
  fontSize: {
    display: ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
    h1: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
    h2: ['clamp(1.6rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
    eyebrow: ['0.75rem', { letterSpacing: '0.24em', fontWeight: '500' }],
  },
  borderRadius: { sm: '2px', md: '6px', lg: '12px' },
  transitionTimingFunction: {
    'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'ease-inout-quint': 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
  transitionDuration: { fast: '200ms', base: '400ms', slow: '700ms', reveal: '900ms' },
  maxWidth: { content: '1280px' },
} as const;
