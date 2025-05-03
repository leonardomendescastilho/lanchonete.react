import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './route/Router'

export const App = () => {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  )
}
