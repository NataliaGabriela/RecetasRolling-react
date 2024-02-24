import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI, leerRecetaAPI } from "../../../helpers/queries";
const ItemReceta = ({receta}) => {
  const borrarReceta = ()=>{
    Swal.fire({
      title: "¿Estas seguro de eliminar esta receta?",
      text: "No puedes revertir este proceso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {

        const respuesta = await borrarRecetaAPI(receta.id)
        if(respuesta.status === 200){
          //falta actualizar la tabla
         const recetasActualizadas = await leerRecetaAPI();
         setProductos(recetasActualizadas);

          Swal.fire({
            title: "Receta elminada",
            text: `La receta de "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success"
          });
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta de "${receta.nombreReceta}" no fue eliminada, intente realizar esta operación en unos minutos`,
            icon: "error"
          });
        }

      }
    });
  }
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
        <Button className="btnBorrar" onClick={borrarReceta}>
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;