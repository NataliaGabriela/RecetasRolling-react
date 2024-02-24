import { Button, Card, Col } from "react-bootstrap";
const CardReceta = ({receta}) => {
  return (
    <Col md={3} className="mb-3">
     <Card>
      <Card.Img variant="top" src={receta.imagen} className="card-img-top-nueva" />
      <Card.Body className="text-center bodyCardReceta">
        <Card.Title>{receta.nombreReceta}</Card.Title>
        <Button className="btnCardRecetas w-100 fw-semibold">Ver Receta</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default CardReceta;
