import { CatchingPokemon } from '@mui/icons-material'
import { purple, red } from '@mui/material/colors'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
} from '@mui/material'

const primary = red[500] // #f44336
const accent = purple['A200'] // #e040fb
// const accent = purple.A200;

const MuiNavbar = () => {
    return (
        <AppBar position='static' color='success'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMONAPP
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar
