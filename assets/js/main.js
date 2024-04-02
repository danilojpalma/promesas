// funcion asincrona que recibe datos de una URL
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

// funcion asincrona que muestra los datos recibidos
const mostrarDatos = async () => {
    
    const albumes = await recibirDatos();

    // mostrar los primeros 20 albumes
    albumes.slice(0,20).forEach((album) => {
        console.log(album.title);
    })

}

// funcion que genera un mensaje de exito despues de 3 segundos
const generarMensajeExito = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

// funcion asincrona que ejecuta las funciones anteriores
const mostrarNombreAlbumes = async () => {

    mostrarDatos();
    const mensaje = await generarMensajeExito();
    console.log(mensaje);
}

// ejecutar la funcion principal
mostrarNombreAlbumes();
