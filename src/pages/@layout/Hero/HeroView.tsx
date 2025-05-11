import { Button, Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const HeroView = () => {
  return (
    <Box
      component={'section'}
      sx={{
        paddingY: '100px',
        bgcolor: '#DC2626',
      }}
    >
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: 5,
            color: 'white',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='h3' fontWeight={'bold'}>
              The Best Hot Dogs in Town!
            </Typography>
            <Typography variant='h6' fontWeight={'regular'}>
              Handcrafted gourmet hot dogs with premium ingredients and unique flavor combinations.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained'>View Menu</Button>
          </Box>
        </Box>

        <Box
          component={'img'}
          src='https://kzmkc3bt9pd46zehicfm.lite.vusercontent.net/placeholder.svg?height=600&width=800'
          sx={{
            width: '100%',
            height: {
              xs: '300px',
              md: '450px',
            },
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        ></Box>
      </Container>
    </Box>
  )
}
