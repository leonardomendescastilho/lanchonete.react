import { Box, Container } from '@mui/material'

import { CardFeatured } from '@/components/Card/CardFeatured'

export const FeaturedView = () => {
  return (
    <Box component={'section'} sx={{ paddingY: '100px' }}>
      <Container>
        <CardFeatured />
      </Container>
    </Box>
  )
}
