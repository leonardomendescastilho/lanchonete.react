import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export const CardFeaturedView = () => {
  return (
    <Card
      variant='outlined'
      component={'article'}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
        },
        gap: 3,
        borderRadius: '10px',
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: '100%',
          height: {
            xs: '300px',
            md: '450px',
          },
          borderRadius: '10px 0 0 10px',
        }}
        image='https://kzmkc3bt9pd46zehicfm.lite.vusercontent.net/placeholder.svg?height=600&width=800'
        alt='Classic Deluxe Hot Dog'
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: '20px',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant='h3'>The Classic Deluxe</Typography>
          <Typography variant='body1' sx={{ color: 'text.secondary' }}>
            Our signature hot dog features a premium beef frank, topped with homemade chili,
            shredded cheddar cheese, diced onions, and a drizzle of mustard, all served on a freshly
            baked brioche bun
          </Typography>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: '#DC2626',
              fontSize: '1.5rem',
              mb: 2,
            }}
          >
            $12.99
          </Typography>
        </Box>
        <CardActions>
          <Button variant='contained' fullWidth>
            Order Now
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
