//Login
const i_login_email = document.querySelector("#login #email");
const i_login_contrasenia = document.querySelector("#login #contrasenia");
const b_login_login = document.querySelector("#login #accion-login");
b_login_login.addEventListener("click",Ingresar);

//Registro
const i_registro_email = document.querySelector("#registro #email");
const i_registro_contrasenia = document.querySelector("#registro #contrasenia");
const i_registro_nombre = document.querySelector("#registro #nombre");
const i_registro_apellido = document.querySelector("#registro #apellido");
const i_registro_direccion = document.querySelector("#registro #direccion");
const i_registro_registro = document.querySelector("#registro #accion-registro");

//API url
const api_url = "https://ort-tallermoviles.herokuapp.com/api"

function Ingresar(){
    ValidarDatosLogin();
    fetch(
        api_url.concat("/usuarios/session"),
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "email": i_login_email.value,
                    "password": i_login_contrasenia.value
                }
            )
        }
    )
    .then(
        response => {
            if(response == 200)
                return response.json();
            else
                return Promise.reject();
        }
    )
    .catch(error)
        console.log(error)
}

function ValidarDatosLogin(){

    const email = i_login_email.value;
    const constrasenia = i_login_contrasenia.value;

    if (!email.includes("@")) {
        throw new Error("El mail debe conetener arroba (@)");
    }
    if(constrasenia.length < 8)
        throw new Error("La contraseña debe contener al menos 8 caracteres");
}

function Registro() {
    fetch(
        api_url,
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "nombre": unNombre,
                    "apellido": unApellido,
                    "email": unEmail,
                    "direccion": unaDireccion,
                    "password": unaContraseña
                }
            )
        }
    )
    .then(
        response => {
            if (response.ok)
                return response.json();
            else
                return Promise.reject()
        }
    )
    .then(
        console.log(resultado.error)
    )
    .catch(error)
        console.log(error)
}