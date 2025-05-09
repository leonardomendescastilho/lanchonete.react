import { Route, Routes } from 'react-router-dom'

import Layout from '@/pages/@layout/Layout.tsx'
import { Home } from '@/pages/home'
import { Login } from '@/pages/Login'
import { ProtectedRoutes } from '@/route/ProtectedRoutes'
import { SignUp } from '@/pages/SignUp'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/cadastrar' element={<SignUp />} />
     
      <Route element={<ProtectedRoutes />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      </Route>
    </Routes>
  )
}
