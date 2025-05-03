import { useContext } from 'react'

import ColorModeContext, { ColorModeContextType } from './ColorModeContext'

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('useColorMode deve ser usado dentro de um ColorModeProvider')
  }
  return context
}
