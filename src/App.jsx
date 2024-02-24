import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error from "./components/pages/Error";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
function App() {
  return (
    <BrowserRouter>
   <NavBar></NavBar>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route exact path="/administrador/crear" element={<FormularioReceta></FormularioReceta>}></Route>
      <Route exact path="/administrador/editar" element={<Administrador></Administrador>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
