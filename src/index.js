import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = createRoot(document.getElementById("root"));
const theme = createTheme();

root.render(
    <ThemeProvider theme={theme} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
