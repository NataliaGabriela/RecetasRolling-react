import { Form, Button } from "react-bootstrap";


const FormularioProducto = () => {

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5 colorFont">Nueva Receta</h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre del Plato*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pizza"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Agridulce">Agridulce</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
          prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forNumComensales">
          <Form.Label>Número de comensales*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 4"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forTiempoPreparacion">
          <Form.Label>Tiempo de Preparación*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 4"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:
            1/2 kilo de harina 000
            25 gr de pan de levadura fresco
            1/2 cucharada de sal
            4 cdas de aceite de oliva
            1 cda de azúcar
            1 taza de agua tibia
            "
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProcedimiento">
          <Form.Label>Procedimiento*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: En un bol o taza colocar la levadura y media taza de agua tibia, agregar la cucharada de azúcar. Mezclar bien hasta que se formen burbujitas. Tapar con un nylon y dejar levar mas o menos 10 minutos.
            En otro bol, colocar la harina y mezclarla con la sal. Hacer un hueco en el centro, y luego volcar la media taza de agua con la levadura. Incorporar el resto del agua tibia. Unir con las manos todos los ingredientes hasta formar una masa. Agregar en forma de hilo el aceite y volver a amasar.
            Dejar descansar la masa para pizza unos 15 minutos, y luego amasarla en una mesa con harina. Dividir la masa en dos bollos del mismo tamaño.
            Estirar la masa hasta lograr un círculo. Poner la masa en una fuente para pizza, dejar descansar en lugar templado hasta que leve un poquito. Aproximadamente 15 minutos.
            Llevar a un horno fuerte unos 6 minutos. Esto es muy importante para que la masa para pizza quede bien cocida (principalmente la parte entre los ingredientes y la masa, si salteamos este punto quedará húmeda y cruda).
            Agregar una cucharada abundante de salsa de tomate y llevar al horno 2 minutos más."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Button type="submit" className="btnError">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;