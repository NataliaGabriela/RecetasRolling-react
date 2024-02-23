import { Container, Row, Image } from "react-bootstrap";
import CardReceta from "../recetas/CardReceta";

const Inicio = () => {
  return (
    <section className="mainSection">
      <Image src="/assets/banner.png" className="banner" />
      <Container>
        <h1 className="display-4 textPrincipalBlog">Recetas</h1>
        <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
