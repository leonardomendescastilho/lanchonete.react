import { Route, Routes } from 'react-router-dom'

import Layout from '@/pages/@layout/Layout.tsx'
import { Home } from '@/pages/home'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
