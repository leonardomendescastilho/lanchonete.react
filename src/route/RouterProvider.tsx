import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home/index.ts'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
