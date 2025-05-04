import { Box } from '@mui/material'

import { Featured } from '../@layout/Featured'
import { Hero } from '../@layout/Hero'
import { Menu } from '../@layout/Menu'

export const HomeView = () => {
  return (
    <Box>
      <Hero />
      <Featured />
      <Menu />
    </Box>
  )
}
