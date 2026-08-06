import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./styles/Layout.css";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);