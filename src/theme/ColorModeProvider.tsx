import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import React, { useMemo, useState } from 'react'

import ColorModeContext from './ColorModeContext'
import theme from './theme'

interface ColorModeProviderProps {
  children: React.ReactNode
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const themeMode = useMemo(() => {
    return createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode,
      },
    })
  }, [mode])

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
