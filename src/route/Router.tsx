import { Route, Routes } from 'react-router-dom'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
