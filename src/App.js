import { createTheme, ThemeProvider } from '@mui/material/styles'
import MyComponent from './components/Contact'
import MuiGrid from './components/MuiGrid'

const theme = createTheme({
    // Customize your theme here
    palette: {
        primary: {
            main: '#2196F3',
        },
        secondary: {
            main: '#FF4081',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <MuiGrid /> */}
            {/* <MyComponent />
             */}
            {/* Your app content */}
        </ThemeProvider>
    )
}

export default App
