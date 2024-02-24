import { Button, Table } from "react-bootstrap";
import ItemRecetas from "./recetas/ItemReceta";

const Administrador = () => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 colorFont {
">Recetas Cargadas</h1>
        <Button variant="primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Nombre</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemRecetas></ItemRecetas>
          <ItemRecetas></ItemRecetas>
          <ItemRecetas></ItemRecetas>
          <ItemRecetas></ItemRecetas>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;