import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import {useRoutes} from "react-router-dom";
import routes from "./routes";
function App() {
  const router = useRoutes(routes)
  return (
    // <ContextDataProvider>
    <div className="app">
      <Header/>

      {/* Start Content */}

        {router}

      {/* Finish Content */}

      <footer>
        <a target={"_blank"} href="https://skylax.ir">
          skylax.ir
        </a>
      </footer>
    </div>
    // </ContextDataProvider>
  );
}

export default App;
