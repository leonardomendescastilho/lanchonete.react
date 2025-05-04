import { Button, Container, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const Hero = () => {
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
          display: 'flex',
          gap: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            color: 'white',
          }}
        >
          <Box>
            <Typography component={'h1'} variant='h3' fontWeight={'bold'}>
              The Best Hot Dogs in Town!
            </Typography>
            <Typography component={'p'} variant='h6' fontWeight={'regular'}>
              Handcrafted gourmet hot dogs with premium ingredients and unique flavor combinations.
            </Typography>
          </Box>
          <Stack direction='row' spacing={2}>
            <Button variant='contained'>View Menu</Button>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box display={'flex'} sx={{ width: '450px', height: '450px' }}>
            <img
              src='https://kzmkc3bt9pd46zehicfm.lite.vusercontent.net/placeholder.svg?height=600&width=800'
              alt='placeholder'
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
