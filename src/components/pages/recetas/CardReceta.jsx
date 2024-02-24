import { Button, Card, Col } from "react-bootstrap";
const CardProducto = () => {
  return (
    <Col md={3} className="mb-3">
     <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top-nueva" />
      <Card.Body className="text-center bodyCardReceta">
        <Card.Title>Pollo frito a la naranja</Card.Title>
        <Button className="btnCardRecetas w-100 fw-semibold">Ver Receta</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default CardProducto;
