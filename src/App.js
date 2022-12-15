// IMPORT CORE LIBRARIES
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";

// IMPORT EXTERNAL MODULES
import Router from "./configs/Router";
import theme from "./components/theme";

// create function for App.js
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
