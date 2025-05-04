import { Link as MuiLink } from '@mui/material'

import { Link as RouterLink, useLocation } from 'react-router-dom'

import { LinkViewProps } from './LinkModel'

export const LinkView = ({ to, children, ...props }: LinkViewProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={{
        px: 2,
        py: 1,
        fontSize: {
          xs: '1rem',
          md: '1.1rem',
        },
        textDecoration: isActive ? 'underline' : 'none',
        color: isActive ? 'primary.main' : 'text.primary',
        '&:hover': {
          textDecoration: 'underline',
          color: 'primary.main',
        },
        '&:active': {
          color: 'primary.main',
        },
        fontWeight: 'bold',
        transition: 'all 0.15s ease-in-out',
      }}
      {...props}
    >
      {children}
    </MuiLink>
  )
}
