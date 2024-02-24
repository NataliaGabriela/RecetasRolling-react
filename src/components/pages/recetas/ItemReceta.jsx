import { Button } from "react-bootstrap";
const ItemProducto = ({receta}) => {
  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
          <img
            src={receta.imagen}
            className="img-thumbnail"
            alt={receta.nombreReceta}
          ></img>
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Button  className="me-lg-2 btnEditar"
        >
           <i className="bi bi-pencil-square"></i>
        </Button>
        <Button className="btnBorrar" >
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;