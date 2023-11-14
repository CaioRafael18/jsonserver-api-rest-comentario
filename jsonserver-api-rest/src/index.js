// importando as bibliotecas e componentes necessários.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render( // renderiza o componente App no DOM usando o ReactDOM.render.
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
