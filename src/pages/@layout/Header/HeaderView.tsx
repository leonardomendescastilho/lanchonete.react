import { Box, Container } from '@mui/material'

import { NavLink } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import { Cart } from '@/components/Cart'

import { Navigation } from '../../../components/Nav'

export const HeaderView = () => {
  return (
    <Container
      component={'header'}
      sx={{
        display: ' flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingY: 1,
      }}
    >
      <Box px={2}>
        <NavLink to={'/'}>
          <img src={Logo} alt='Logo' />
        </NavLink>
      </Box>

      <Navigation />

      <Cart />
    </Container>
  )
}
