import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient,ApolloProvider,InMemoryCache } from "@apollo/client";

import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
        <App />
      
);
