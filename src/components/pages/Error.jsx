import { Button, Image } from "react-bootstrap";
import imgError from "../../assets/error404.png";
const Error = () => {
  return (
    <section className="mainSection text-center">
      <div className="tx-center d-flex justify-content-center">
        <Image src={imgError} className="imagenError" fluid />
      </div>
      <Button  className="btnError">
        Volver al Inicio
      </Button>
    </section>
  );
};

export default Error;
