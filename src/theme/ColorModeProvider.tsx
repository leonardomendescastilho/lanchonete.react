import { CssBaseline, ThemeProvider } from '@mui/material'

import React, { useMemo, useState } from 'react'

import ColorModeContext from './ColorModeContext'
import { getTheme } from './theme'

interface ColorModeProviderProps {
  children: React.ReactNode
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
