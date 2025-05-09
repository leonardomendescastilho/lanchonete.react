import { AppBar, Box, Container } from '@mui/material'

import { NavLink } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import { Cart } from '@/components/Cart'

import { Navigation } from '../../../components/Nav'
import { ProfileLoginIcon } from '@/components/ProfileLoginIcon'

export const HeaderView = () => {
  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        bgcolor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container
        component={'header'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: 1,
        }}
      >
        <Box sx={{ px: 2 }}>
          <NavLink to={'/'}>
            <Box component={'img'} sx={{ cursor: 'pointer' }} src={Logo} alt='Logo' />
          </NavLink>
        </Box>

        <Navigation />
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <ProfileLoginIcon />
          <Cart />
        </Box>
      </Container>
    </AppBar>
  )
}
