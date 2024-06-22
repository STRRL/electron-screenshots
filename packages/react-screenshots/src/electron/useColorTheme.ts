import { useEffect, useState } from 'react'

export const useColorTheme = () => {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system')

  useEffect(() => {
    const updateColorTheme = async () => {
      try {
        const theme = await window.electron.invoke('get-color-theme') as 'system' | 'light' | 'dark'
        setTheme(theme)
      } catch (e) {
        console.error(e)
      }
    }

    updateColorTheme().catch((err) => console.error(err))

    const handleColorThemeChanged = () => {
      updateColorTheme().catch((err) => console.error(err))
    }
    window.electron.on('color-theme-changed', handleColorThemeChanged)
    return () => {
      window.electron.off('color-theme-changed', handleColorThemeChanged)
    }
  }, [
    setTheme
  ])

  const setColorTheme = (newTheme: 'system' | 'light' | 'dark') => {
    setTheme(newTheme)
    window?.electron.send('set-color-theme', newTheme)
  }

  return [theme, setColorTheme] as const
}

export const useDarkTheme = () => {
  const [result, setResult] = useState(false)
  const [theme] = useColorTheme()
  const [systemThemeDarkModeEnabled, setSystemThemeDarkModeEnabled] = useState(false)

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemThemeDarkModeEnabled(darkModePreference.matches)
    darkModePreference.addEventListener('change', (e) => {
      setSystemThemeDarkModeEnabled(e.matches)
    })
    return () => {
      darkModePreference.removeEventListener('change', (e) => {
        setSystemThemeDarkModeEnabled(e.matches)
      })
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      setResult(true)
    } else if (theme === 'light') {
      setResult(false)
    } else {
      setResult(systemThemeDarkModeEnabled)
    }
  }, [theme, systemThemeDarkModeEnabled])

  return result
}
