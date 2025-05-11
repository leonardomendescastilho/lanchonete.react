import { Box, Container } from '@mui/material'

import { Catalog } from '../@layout/Catalog'

export const MenuView = () => {
  return (
    <Box
      component={'section'}
      sx={{
        bgcolor: '#DC2626',
        color: 'white',
        paddingY: '100px',
      }}
    >
      <Container>
        <Catalog />
      </Container>
    </Box>
  )
}
