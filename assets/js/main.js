const recibirDatos = async () => {

    const url = "https://jsonplaceholder.typicode.com/photos";

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        // verificar si la respueta es correcta
        if(respuesta.ok === false){
            throw new Error("Error en la petición");
        }

        return datos;
    }

    catch (err) {
        console.log('Error al conectarse a la URL:', err);
    }
}

const mostrarDatos = async () => {
    
    const albumes = await recibirDatos();

    albumes.slice(0,20).forEach((album) => {
        console.log(album.title);
    })

}


const generarMensajeExito = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

const mostrarNombreAlbumes = async () => {

    mostrarDatos();
    const mensaje = await generarMensajeExito();
    console.log(mensaje);
}

mostrarNombreAlbumes();
