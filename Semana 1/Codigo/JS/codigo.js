document.getElementById("btn_guardar").addEventListener("click",MostrarMensaje);

function MostrarMensaje() {
    let nombre = document.getElementById("txt_nombre").value;
    let apellido = document.getElementById("txt_apellido").value;
    let grupo = document.getElementById("slc_grupo").value;

    console.log(`Hola ${nombre} ${apellido}`);
    console.log(`Bienvenido al grupo de nombre ${grupo}`);
}