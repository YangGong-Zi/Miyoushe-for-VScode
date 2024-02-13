import daisyui from 'daisyui'
import { useThemeStore } from './src/stores/Theme.ts'
// const { Theme } = useThemeStore()
export default {
  content: ['./src/**/*.{vue,html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: 'dark'
  }
}
