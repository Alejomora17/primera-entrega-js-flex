const numeroSecreto = Math.floor(Math.random()*20)+1;
const intentos = [];

console.log(numeroSecreto)

function validarNumero(numeroSecreto,intento){
    if (intento > numeroSecreto) {
        alert ("El numero es mas pequeño, intentalo de Nuevo");
        return false;
    }else if (intento < numeroSecreto){
        alert ("El numero es mas grande, intentalo de nuevo");
        return false;
    }else {
        alert ("Adivinaste el Número, felicitaciones");
        return true;
    }
}

let adivinado = false;
let intentosUsuario = prompt("Adivina el numero de 1 a 20, o puedes escribir salir para terminar el juego");

while (intentosUsuario !== "salir" && !adivinado){
    const intentoNumero =parseInt(intentosUsuario);
    if (isNaN(intentoNumero)) {
        alert("por favor, ingrese un numero valido");
    }else {
        intentos.push(intentoNumero);
        adivinado = validarNumero(numeroSecreto,intentoNumero);
    }

    if (!adivinado) {
        intentosUsuario = prompt("intenta otra vez o escribe salir para rendirte")
    }
}

const cantidadIntentos = intentos.length;
if (cantidadIntentos == 1){
    alert("WoW Felicitaciones, pudiste realizar la adivinanza en 1 solo intento ")
}else {
    alert("Realizaste " + cantidadIntentos + " intentos y estos fueron los intentos que tuviste " + intentos)
}




