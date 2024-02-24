const URI_RECETAS= import.meta.env.VITE_API_RECETAS;

console.log(URI_RECETAS);

export const leerRecetasAPI = async()=>{
    try{
        const respuesta = await fetch(URI_RECETAS);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch (error){
        console.log(error)
    }
}
export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URI_PRODUCTOS, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}