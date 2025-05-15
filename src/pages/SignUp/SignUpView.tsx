import { Box, Button, Divider, Link, Paper, TextField, Typography } from '@mui/material'

import Logo from '@/assets/logo-login.svg'

export const SignUpView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper
        component='article'
        elevation={2}
        variant='outlined'
        sx={{
          borderRadius: '10px',
          textAlign: 'center',
          width: '100%',
          paddingBottom: '20px',
          maxWidth: {
            xs: '90%',
            sm: '450px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '130px',
            backgroundColor: '#FFF7ED',
            overflow: 'hidden',
            borderRadius: '10px 10px 0 0',
            marginBottom: '50px',
          }}
        >
          <Box sx={{ width: '20%', height: '50%', margin: 'auto' }}>
            <Box
              component='img'
              src={Logo}
              alt='Logo'
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 3 }}>
          <Box>
            <Typography component='h1' variant='h5' fontWeight='bold'>
              Crie sua conta
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Cadastre-se para fazer pedidos deliciosos ;;P
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              component='form'
              sx={{
                width: {
                  md: '80%',
                  xs: '100%',
                },
                marginX: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    type='text'
                    variant='outlined'
                    margin='normal'
                    id='name'
                    name='name'
                    autoComplete='name'
                    autoFocus
                    label='Nome'
                    size='small'
                    fullWidth
                  />
                  <TextField
                    type='text'
                    variant='outlined'
                    margin='normal'
                    id='surname'
                    name='surname'
                    autoComplete='surname'
                    autoFocus
                    label='Sobrenome'
                    size='small'
                    fullWidth
                  />
                </Box>
                <TextField
                  type='email'
                  variant='outlined'
                  margin='normal'
                  id='email'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  label='Email'
                  size='small'
                  fullWidth
                />
                <TextField
                  type='password'
                  variant='outlined'
                  id='password'
                  name='password'
                  label='Senha'
                  size='small'
                  fullWidth
                />
                <TextField
                  type='password'
                  variant='outlined'
                  id='password'
                  name='password'
                  label='Confirme sua senha'
                  size='small'
                  fullWidth
                />
              </Box>
              <Box>
                <Button type='submit' variant='contained' fullWidth sx={{ mt: 2, mb: 2 }}>
                  Criar Conta
                </Button>
              </Box>
            </Box>

            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                Já tem uma conta?
              </Typography>
              <Link href='/login' underline='hover' rel='noopener noreferrer' target='_self'>
                Faça login
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
