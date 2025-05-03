import { createContext } from 'react'

export interface ColorModeContextType {
  toggleColorMode: () => void
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined)

export default ColorModeContext
