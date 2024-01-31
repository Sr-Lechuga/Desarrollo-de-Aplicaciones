ObtenerEstadoPaises();
function ObtenerEstadoPaises(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response => {
        if(response.status == 200){
            return response.json();
        }
        else{
            return Promise.
            reject({codigo:response.status,mensaje:"Datos incorrectos"});
        }
    })
    .then(datos => {
        for (let i = 0; i < datos.length; i++) {
            console.log(datos[i].status);
        }
    })
    .catch(function(Error){
        console.log(Error.mensaje);
    })
}