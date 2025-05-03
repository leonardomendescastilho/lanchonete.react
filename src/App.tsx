import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './route/RouterProvider'

export const App = () => {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  )
}
