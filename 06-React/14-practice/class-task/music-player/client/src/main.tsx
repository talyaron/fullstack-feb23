// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/scss/Theme';


// Render the app with Redux store
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    </Provider>
  </React.StrictMode>,
);


