import React from "react";
import Layout from "./components/Layout";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Manrope'", "sans-serif", "serif", "Helvetica", "Arial"].join(
      ","
    ),
  },
  palette: {
    primary: {
      main: "#8C30F5",
    },
    secondary: {
      main: "#F7C667",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
