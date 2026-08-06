import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {
            main: "#2563EB",
        },

        secondary: {
            main: "#10B981",
        },

        background: {
            default: "#0F172A",
            paper: "#111827",
        },

        text: {
            primary: "#F8FAFC",
            secondary: "#94A3B8",
        },

        error: {
            main: "#EF4444",
        },

        warning: {
            main: "#F59E0B",
        },

    },

    shape: {

        borderRadius: 12,

    },

    typography: {

        fontFamily: "'Inter', 'Segoe UI', sans-serif",

        h4: {
            fontWeight: 700,
        },

        h5: {
            fontWeight: 600,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },

    },

});

export default theme;