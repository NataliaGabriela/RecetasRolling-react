import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error from "./components/pages/Error";
import "./App.css";
function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Error></Error>*/}
     
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
