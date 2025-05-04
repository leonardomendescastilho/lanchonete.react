import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

export const CardItemView = () => {
  return (
    <Card
      variant='outlined'
      component={'article'}
      sx={{
        maxWidth: '400px',
        minWidth: '250px',
        marginX: 'auto',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component='img'
        height='200'
        image='https://kzmkc3bt9pd46zehicfm.lite.vusercontent.net/placeholder.svg?height=600&width=800'
        alt='Hot Dog'
      />
      <CardContent>
        <Typography variant='h5' component='h3'>
          Classic Deluxe
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ fontWeight: 'regular' }}>
          Premium beef frank with chili, cheese, onions, and mustard
        </Typography>
        <Typography variant='h6' color='primary' sx={{ fontWeight: 'bold', marginTop: '20px' }}>
          $8.99
        </Typography>
      </CardContent>
      <Divider sx={{ marginY: '10px' }} />
      <CardActions>
        <Button variant='contained' fullWidth sx={{ fontWeight: 'bold' }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}
