import { Container, Paper, Typography } from '@mui/material'

export const HomeView = () => {
  return (
    <Container sx={{}} fixed maxWidth='lg'>
      <Paper elevation={1} sx={{ padding: 3 }}>
        <Typography variant='h5' component='h1' gutterBottom>
          Home
        </Typography>
        <Typography variant='body1'>Bem-vindo à página inicial!</Typography>
      </Paper>
    </Container>
  )
}
