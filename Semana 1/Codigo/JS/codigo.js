// Get elements
document.getElementById("btn_guardar").addEventListener("click",MostrarMensaje);
// Clear elements
document.querySelector('#message').innerHTML = "";

function MostrarMensaje() {
    let nombre = document.getElementById("txt_nombre").value;
    let apellido = document.getElementById("txt_apellido").value;
    let grupo = document.getElementById("slc_grupo").value;

// Validations
    try{
        if(nombre.trim() == ""){
            throw new Error("El nombre es obligatorio");
        }
        if(apellido.trim() == ""){
            throw new Error("El apellido es obligatorio");
        }
        if(grupo == "-1"){
            throw new Error("El grupo seleccionado no es valido");
        }
    }
    catch(Error){
        document.querySelector('#message').innerHTML=Error.message;
    }

    console.log(`Hola ${nombre} ${apellido}`);
    console.log(`Bienvenido al grupo de nombre ${grupo}`);
}