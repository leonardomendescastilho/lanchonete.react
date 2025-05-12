import { Route, Routes } from 'react-router-dom'

import Layout from '@/pages/@layout/Layout.tsx'
import { Login } from '@/pages/Login'
import { SignUp } from '@/pages/SignUp'
import { Home } from '@/pages/home'
import { Menu } from '@/pages/menu'
import { ProtectedRoutes } from '@/route/ProtectedRoutes'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/cadastrar' element={<SignUp />} />
      <Route path='/login' element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
        </Route>
      </Route>
    </Routes>
  )
}
