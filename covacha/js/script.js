// en el caso de tener un backend se deberia verificar/validar que el usuario corresponda al boton para poder relamar un premio
function reclamar(id) {
    
    let nombreGanador = document.getElementById(id).querySelector("td:nth-child(1)").innerText;

    alert("¡Felicidades! Has reclamado tu premio, " + nombreGanador + "!");
}


function validar() {
    

    // Validar el formulario, creo variables obteniendo el id
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let juego = document.getElementById("juego");
    let val1 = document.getElementById("jsnombre");
    let val2 = document.getElementById("jsapellido");
    let val3 = document.getElementById("jsemail");
    let val4 = document.getElementById("jsjuego");
    
    // compruebo que el nombre no tenga menos de 3 caracteres
    if(nombre.value.length < 3){
        val1.innerHTML= "Nombre incorrecto";
        return false;
    }
    // compruebo que el apellido no tenga menos de 3 caracteres
    if(apellido.value.length < 3){
        val2.innerHTML= "Apellido incorrecto";
        return false;
    }
    //compruebo que el email tenga el @ y 1 punto ( aunque el . deberia ser verificado con varios dominios y no solo con el .)
    if(!email.value.includes("@") || !email.value.includes(".") ){
        val3.innerHTML= "Email incorrecto";
        return false;
    }
    //compruebo que se seleccione un juego
    if(juego.value == ""){
        val4.innerHTML= "Debes Seleccionar un juego ";
        return false;
    }
    

    

}