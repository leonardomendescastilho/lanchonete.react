import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './route/RouterProvider'
import { ColorModeProvider } from './theme/ColorModeProvider'

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ColorModeProvider>
        <BrowserRouter>
          <CssBaseline />
          <RouterProvider />
        </BrowserRouter>
      </ColorModeProvider>
    </QueryClientProvider>
  )
}
