import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const admin = JSON.parse(sessionStorage.getItem('inicioRollingCoffe')) || null;
    if (!admin) {
        return<Navigate to="/login"></Navigate>
    }else{
        return children; //listas de rutas
    }
};
export default RutasProtegidas;