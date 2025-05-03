// theme.ts
import '@fontsource/dm-serif-display'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeOptions, createTheme } from '@mui/material/styles'

const colors = {
  primary: {
    main: 'rgba(251, 44, 54, 1)',
    contrastText: 'rgba(254, 242, 242, 1)',
  },
  secondary: {
    main: 'rgba(39, 39, 42, 1)',
    contrastText: {
      light: 'rgba(24, 24, 27, 1)',
      dark: 'rgba(250, 250, 250, 1)',
    },
  },
  background: {
    light: 'rgba(255, 255, 255, 1)',
    dark: 'rgba(24, 24, 27, 1)',
  },
}

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: colors.primary.main,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      contrastText: colors.secondary.contrastText[mode],
    },
    background: {
      default: colors.background[mode],
      paper: colors.background[mode],
    },
  },
})

export const getTheme = (mode: 'light' | 'dark') => createTheme(getThemeOptions(mode))
