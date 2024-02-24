import { Button } from "react-bootstrap";
const ItemProducto = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Pizza</td>
      <td className="text-center">
          <img
            src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img-thumbnail"
            alt="pizza"
          ></img>
      </td>
      <td>Salado</td>
      <td className="text-center">
        <Button  className="me-lg-2 btnEditar"
        >
           <i class="bi bi-pencil-square"></i>
        </Button>
        <Button className="btnBorrar" >
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;