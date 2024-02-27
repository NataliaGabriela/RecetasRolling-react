import { Container, Row, Image } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import "../../App.css";
const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    traerRecetas();
  }, []);
  const traerRecetas = async () => {
    try {
      const listaRecetasAPI = await leerRecetasAPI();
      setRecetas(listaRecetasAPI);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="mainSection">
      <div className="portadaRecetas mb-5 text-center">
        <Image src="/assets/banner.png" className="banner" />
        <div className="tiuloPrincipal">
          <h1 className="display-1 colorFont ">Recetas Rolling</h1>
        </div>
      </div>

      <Container>
        <Row>
          {recetas.map((receta) => (
            <CardReceta key={receta.id} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
