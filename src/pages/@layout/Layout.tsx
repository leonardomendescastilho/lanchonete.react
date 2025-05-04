import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

import { Footer } from '@/pages/@layout/Footer'
import { Header } from '@/pages/@layout/Header'

export default function Layout() {
  return (
    <Box sx={{ minHeight: '100dvh' }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}
