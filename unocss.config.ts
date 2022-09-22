import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import colors from 'tailwindcss/colors'
import presetDaisy from 'unocss-preset-daisy'

export default defineConfig({
  theme: {
    colors: {
      // TODO уебать автору макетов
      primary: '#0ea5e9',
      accent: colors.orange[600],
      accentFocus: colors.orange[700],
      base: {
        DEFAULT: '#242636',
        50: '#f6f6f9',
        // 100: '#ededf1',
        200: '#d7d8e0',
        300: '#b4b7c5',
        400: '#8b8fa5',
        500: '#6d718a',
        600: '#575a72',
        700: '#47495d',
        800: '#424454',
        900: '#363744',
      },
      // main: '#242636',
      // footer: '#191919',
      // card: {
      //   DEFAULT: '#484A5A',
      //   100: '#5C5E6E',
      // },
    },
  },
  shortcuts: {

  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Jura', 'Jura:400,700'],
        serif: 'Jura',
        mono: 'Jura',
      },
    }),
    presetDaisy(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
