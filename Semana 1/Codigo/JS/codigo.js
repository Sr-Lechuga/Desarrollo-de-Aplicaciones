// Get elements
document.getElementById("btn_guardar").addEventListener("click",MostrarMensaje);
// Clear elements
document.querySelector('#message').innerHTML = "";

function MostrarMensaje() {
    let nombre = document.getElementById("txt_nombre").value;
    let apellido = document.getElementById("txt_apellido").value;
    let numero_grupo = document.getElementById("slc_grupo").value;
    let grupo = document.querySelectorAll("option")[numero_grupo].textContent;
    document.querySelector('#message').innerHTML= `Hola ${nombre} ${apellido}. Bienvenido al grupo de nombre ${grupo}`;

// Validations
    try{
        if(nombre.trim() == ""){
            throw new Error("El nombre es obligatorio");
        }
        if(apellido.trim() == ""){
            throw new Error("El apellido es obligatorio");
        }
        if(numero_grupo == "0"){
            throw new Error("El grupo seleccionado no es valido");
        }
    }
    catch(Error){
        document.querySelector('#message').innerHTML= Error.message;
    }
}
