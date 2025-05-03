import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './route/RouterProvider'

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
