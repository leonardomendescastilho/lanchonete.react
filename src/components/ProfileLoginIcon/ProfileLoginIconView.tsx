import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton, Tooltip } from '@mui/material';

export const ProfileLoginIconView = () => {
    const isAuthenticated = false

    return (
        isAuthenticated ? (
            <Tooltip sx={{ cursor: 'pointer' }} arrow title={'Perfil'}>
                <IconButton aria-label='profile' sx={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                <PersonOutlineOutlinedIcon/>
                </IconButton>
            </Tooltip>
        ) : (
            <Tooltip sx={{ cursor: 'pointer' }} arrow title={'Fazer Login'}>
                <IconButton aria-label='login' sx={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                <LoginOutlinedIcon/>
                </IconButton>
            </Tooltip>
        )
    )
}


