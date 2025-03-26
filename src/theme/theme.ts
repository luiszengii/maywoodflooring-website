import { createTheme } from "@mui/material/styles";

const theme = createTheme( {
  palette: {
    primary: {
      main: '#45857A',
    },
    background: {
      default: '#f5f5f5', // light grey background
      paper: '#ffffff',   // white components
    },
  },

  typography: {
    h2: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },


  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a', // dark grey/soft black
          color: '#ffffff' // white text
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
        },
      },
    },
  },
} );

export default theme;
