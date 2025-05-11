import { Box } from '@mui/material'

import { Catalog } from '../@layout/Catalog'
import { Featured } from '../@layout/Featured'
import { Hero } from '../@layout/Hero'

export const HomeView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: '100px' }}>
      <Hero />
      <Featured />
      <Catalog />
    </Box>
  )
}
