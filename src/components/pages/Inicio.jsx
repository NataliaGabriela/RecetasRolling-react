import { Container, Row, Image } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
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
      <Image src="/assets/banner.png" className="banner" />
      <Container>
        <h1 className="display-4 colorFont ">Recetas</h1>
        <Row>
        {
            recetas.map((receta)=><CardReceta key={receta.id} receta={receta}></CardReceta>)
          }
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
