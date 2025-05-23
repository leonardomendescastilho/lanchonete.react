import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge, IconButton, Tooltip } from '@mui/material'

export const CartView = () => {
  return (
    <Tooltip sx={{ cursor: 'pointer' }} arrow title={'Clique para abrir o Cart'}>
      <IconButton
        sx={{
          color: 'black',
        }}
        aria-label='cart'
        onClick={() => console.log('cart clicado')}
      >
        <ShoppingCartOutlinedIcon />
        <Badge
          sx={{ position: 'absolute', top: '5px', right: '1px' }}
          badgeContent={2}
          color='primary'
          overlap='circular'
        />
      </IconButton>
    </Tooltip>
  )
}
