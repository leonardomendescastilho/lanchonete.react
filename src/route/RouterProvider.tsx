import { Route, Routes } from 'react-router-dom'

import Layout from '@/pages/@layout/Layout.tsx'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { ProtectedRoutes } from '@/route/ProtectedRoutes'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
     
      <Route element={<ProtectedRoutes />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      </Route>
    </Routes>
  )
}
