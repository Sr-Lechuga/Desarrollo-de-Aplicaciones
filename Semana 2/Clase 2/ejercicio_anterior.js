function Registro(){
    fetch("https://ort.tallermoviles.askdashdfhkf",
    {
        method: "POST",
        headers:{
            "Content-Type":"applicarion/json" 
        },
        body: JSON.Stringify({
            nombre: "Liliana",
            apellido: "Pino",
            direccion:"Cuareim 1234",
            email: "lilianapino@ort.edu.uy",
            password:"123456"
        })
        
    })
    .then(
        response => {
            if(response.ok){
                return response.Json();
            }
            return Promise.Reject({error:"error"});
        }
    )
    then( 
        data => {
            paises = data;
        }
    )
    .catch(MostrarError)
    //Try to get early
}