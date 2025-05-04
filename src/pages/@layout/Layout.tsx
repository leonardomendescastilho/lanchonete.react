import Container from '@mui/material/Container'

import { Outlet } from 'react-router-dom'

import { Footer } from '@/pages/@layout/Footer'
import { Header } from '@/pages/@layout/Header'

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}
