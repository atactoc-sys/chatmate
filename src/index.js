// index.js or your entry file
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
