import { Box, Container, Typography } from '@mui/material'

import { CardItem } from '@/components/Card/CardItem'

export const CatalogView = () => {
  return (
    <Box component={'section'}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography component={'h2'} variant='h4' align='center' fontWeight={'bold'}>
          Our Delicious Menu
        </Typography>
        <Typography component={'p'} variant='h6' align='center' fontWeight={'regular'}>
          Handcrafted gourmet hot dogs with premium ingredients and unique flavor combinations.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            marginTop: '50px',
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <CardItem key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
