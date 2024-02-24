import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error from "./components/pages/Error";
import "./App.css";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Error></Error>
        <Inicio></Inicio>
        <Administrador></Administrador>
      */}
   
      <FormularioReceta></FormularioReceta>
      
      <Footer></Footer>
    </>
  );
}

export default App;
