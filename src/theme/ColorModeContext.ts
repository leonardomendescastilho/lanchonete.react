import { createContext } from 'react'

export interface ColorModeContextType {
  toggleColorMode: () => void
  mode: 'light' | 'dark'
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined)

export default ColorModeContext
