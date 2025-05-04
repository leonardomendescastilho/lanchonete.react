import { Box } from '@mui/material'

import { Link } from '../Link'

export const NavigationView = () => {
  return (
    <Box component={'nav'}>
      <Box component={'ul'} sx={{ display: 'flex', gap: 1, margin: 0, padding: 0 }}>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
      </Box>
    </Box>
  )
}
