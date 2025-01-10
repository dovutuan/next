import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--font-primary)',
      secondary: 'var(--font-secondary)',
    },
    extend: {
      colors: {
        //-- Text
        'clr-txt-primary': 'var(--clr-txt-primary)',
        'clr-txt-secondary': 'var(--clr-txt-secondary)',
        'clr-txt-tertiary': 'var(--clr-txt-tertiary)',
        'clr-txt-brand-secondary': 'var(--clr-txt-brand-secondary)',
        'clr-txt-placeholder': 'var(--clr-txt-placeholder)',
        'clr-txt-hover-secondary': 'var(--clr-txt-hover-secondary)',

        //-- Button
        'clr-btn-bg-primary': 'var(--clr-btn-bg-primary)',
        'clr-btn-error-bg-primary': 'var(--clr-btn-error-bg-primary)',

        'clr-btn-border-primary': 'var(--clr-btn-border-primary)',
        'clr-btn-border-secondary': 'var(--clr-btn-border-secondary)',

        'clr-btn-error-border-primary': 'var(--clr-btn-error-border-primary)',

        'clr-btn-fg-primary': 'var(--clr-btn-fg-primary)',
        'clr-btn-fg-tertiary': 'var(--clr-btn-fg-tertiary)',

        //-- Background
        'clr-bg-success-primary': 'var(--clr-bg-success-primary)',
        'clr-bg-brand-solid': 'var(--clr-bg-brand-solid)',
        'clr-bg-overlay': 'var(--clr-bg-overlay)',
        'clr-bg-secondary': 'var(--clr-bg-secondary)',
        'clr-bg-secondary-solid': 'var(--clr-bg-secondary-solid)',
        'clr-bg-tertiary': 'var(--clr-bg-tertiary)',
        'clr-bg-brand-primary': 'var(--clr-bg-brand-primary)',
        'clr-bg-white': 'var(--clr-bg-white)',

        //-- Foreground
        'clr-fg-secondary': 'var(--clr-fg-secondary)',

        //=== Height
        'button-height-md': 'var(--button-height-md)',

        //-- Radius
        'radius-md': 'var(--radius-md)',

        'clr-border-secondary': 'var(--clr-border-secondary)',

        'clr-txt-placeholder-subttl': 'var(--clr-txt-placeholder-subttl)',

        'clr-fg-quarterary': 'var(--clr-fg-quarterary)',

        //-- Border
        'clr-border-primary': 'var(--clr-border-primary)',
        'clr-fg-senary': 'var(--clr-fg-senary)',

        //-- Migrate charts
        'clr-txt-quarterary': 'var(--clr-txt-quarterary)',
        'clr-txt-error-primary': 'var(--clr-txt-error-primary)',
        'clr-txt-brand-primary': 'var(--clr-txt-brand-primary)',
        'clr-txt-utility-success-700': 'var(--clr-txt-utility-success-700)',
        'clr-txt-utility-blue-700': 'var(--clr-txt-utility-blue-700)',
        'clr-txt-line-chart-text-green': 'var(--clr-txt-line-chart-text-green)',
        'clr-btn-fg-success-primary': 'var(--clr-btn-fg-success-primary)',
        'clr-bg-blue-light': 'var(--clr-bg-blue-light)',
        'clr-bg-error-primary': 'var(--clr-bg-error-primary)',
        'clr-bg-utility-blue-50': 'var(--clr-bg-utility-blue-50)',
        'clr-border-ultility-success': 'var(--clr-border-ultility-success)',
        'clr-border-utility-blue-200': 'var(--clr-border-utility-blue-200)',
        'clr-utility-warning-700': 'var(--clr-utility-warning-700)',
        'clr-utility-warning-50': 'var(--clr-utility-warning-50)',
        'clr-utility-warning-200': 'var(--clr-utility-warning-200)',
        'clr-chart-square-radar-point': 'var(--clr-chart-square-radar-point)',
        'clr-chart-square-radar-fill': 'var(--clr-chart-square-radar-fill)',
        'clr-chart-square-radar-value': 'var(--clr-chart-square-radar-value)',
        'clr-chart-bar-blue': 'var(--clr-chart-bar-blue)',
        'clr-chart-bar-teal': 'var(--clr-chart-bar-teal)',
        'clr-chart-bar-green': 'var(--clr-chart-bar-green)',
        'clr-chart-radar-fill-teal': 'var(--clr-chart-radar-fill-teal)',
        'clr-chart-radar-fill-border-teal':
          'var(--clr-chart-radar-fill-border-teal)',
        'clr-chart-radar-value-teal': 'var(--clr-chart-radar-value-teal)',
        'clr-chart-radar-value-background-teal':
          'var(--clr-chart-radar-value-background-teal)',
        'clr-chart-radar-value-border-teal':
          'var(--clr-chart-radar-value-border-teal)',
        'clr-chart-radar-fill-green': 'var(--clr-chart-radar-fill-green)',
        'clr-chart-radar-fill-border-green':
          'var(--clr-chart-radar-fill-border-green)',
        'clr-chart-radar-value-green': 'var(--clr-chart-radar-value-green)',
        'clr-chart-radar-value-background-green':
          'var(--clr-chart-radar-value-background-green)',
        'clr-chart-radar-value-border-green':
          'var(--clr-chart-radar-value-border-green)',
        'clr-chart-line': 'var(--clr-chart-line)',
        'clr-chart-line-value': 'var(--clr-chart-line-value)',
        'clr-chart-line-border-value': 'var(--clr-chart-line-border-value)',
        'clr-chart-line-background-value':
          'var(--clr-chart-line-background-value)',
        'clr-fg-quinary-hover': 'var(--clr-fg-quinary-hover)',
      },
      backgroundImage: {
        'background-login': 'url(/assets/image/background-login.png)',
        'pulsating-effect': 'url(/assets/image/pulsating-effect.png)',
      },
    },
  },
  plugins: [],
};
export default config;
