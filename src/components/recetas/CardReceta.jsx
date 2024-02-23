import { Button, Card, Col } from "react-bootstrap";
const CardProducto = () => {
  return (
    <Col md={3} className="mb-3">
    <Card className="m-3 h-100">
      <Card.Img variant="top" src="/assets/pizza.jpg" className="card-img-top-nueva"/>
      <Card.Body>
        <Card.Title>Pizza</Card.Title>
        <Card.Text>
          Descripción: 
          <br />
          <span className="fw-bold"></span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button className="btnCardRecetas me-2" >
          Ver más
        </Button>
      </Card.Footer>
    </Card>
    </Col>
  );
};

export default CardProducto;
