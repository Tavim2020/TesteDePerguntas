import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            light: "#9db9cf",
            main: "#047CD6",
            dark: "#5C2751"
        }, 
        secondary: {
            light: "#f7f7f7",
            main: "#E1B07E"
        },
        text:{
            primary: "#6e6e6e",
            secondary: "#3d3d3d"
        },
        error: {
            main: "#d72638"
        },
        warning: {
            main: "#FFD046"
        },
        success: {
            main: "#069e2c"
        }
    },
    typography: {
        fontFamily: "Oswald"
    }
});

export default theme;