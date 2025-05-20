import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Container, Divider, Link, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const FooterView = () => {
  return (
    <Box
      sx={{
        paddingTop: '50px',
        bgcolor: '#111827',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Typography variant='h6' fontWeight={'bold'}>
            Lanchonete
          </Typography>
          <Typography variant='body2'>Serving the best hot dogs in town since 2023.</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Typography variant='h6' fontWeight={'bold'}>
            Redes Sociais
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/leonardo.asdf/'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <InstagramIcon />
              </Link>
            </Box>
            <Box>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/leonardomendescastilho/'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <GitHubIcon />
              </Link>
            </Box>
            <Box>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://wa.me/5512982242771'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <WhatsAppIcon />
              </Link>
            </Box>
            <Box>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/leonardodevcastilho'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant='h6' fontWeight={'bold'}>
            Contact us
          </Typography>

          <Box component={'address'}>
            <Box
              component={'nav'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                maxWidth: '250px',
                textDecoration: 'none',
              }}
            >
              <Link
                variant='body2'
                underline='hover'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
                href='mailto:contato@lanchonete.com'
              >
                contato@lanchonete.com
              </Link>
              <Link
                variant='body2'
                underline='hover'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
                href='tel:+5511999999999'
              >
                (11) 99999-9999
              </Link>
              <Link
                variant='body2'
                underline='hover'
                sx={{ cursor: 'pointer', color: 'white', '&:hover': { color: 'primary.main' } }}
                href='https://www.google.com/maps/place/1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043,+USA'
              >
<<<<<<< HEAD
                Endereço: Rua das Flores, 123, Bairro do Sol, Cidade do Sol, Estado do Sol!!
=======
                Endereço: Rua das Flores, 123, Bairro do Sol, Cidade do Sol, Estado do Sol!!!!
>>>>>>> 6050521 (feat: first commit)
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
      <Typography variant='body2' align='center' sx={{ color: 'white' }}>
        © {new Date().getFullYear()} Lanchonete. Alll rights reserved.
      </Typography>
    </Box>
  )
}
