import { Box } from '@mui/material'

import { NavLink } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import { Cart } from '@/components/Cart'

import { Navigation } from '../../../components/Nav'

export const HeaderView = () => {
  return (
    <Box
      component={'header'}
      sx={{
        display: ' flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box px={2}>
        <NavLink to={'/'}>
          <img src={Logo} alt='Logo' />
        </NavLink>
      </Box>

      <Navigation />

      <Cart />
    </Box>
  )
}
