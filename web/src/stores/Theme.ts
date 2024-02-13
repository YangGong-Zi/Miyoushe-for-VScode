import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('useTheme', () => {
  const Theme = ref('dark')
    const changeTheme = () => {
        Theme.value = Theme.value === 'dark'? 'light':'dark'
    }

  return { Theme ,changeTheme}
})
