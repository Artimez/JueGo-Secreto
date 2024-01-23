// Selector, funcion que permite acceder a cada uno de los elementos de HTML.
let numereroSecreto = 1;
let intentos = 0;
listaNumerosSorteados = [];
let numeroMaxico = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  /* console.log(typeof(numeroDeUsuario));
   console.log(typeof(numereroSecreto));
   console.log(numereroSecreto);
   console.log(numeroDeUsuario); */
   console.log(numereroSecreto);
if(numeroDeUsuario === numereroSecreto){

    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
        // El usuario no acerto
    if(numeroDeUsuario > numereroSecreto){
        asignarTextoElemento('p', 'El numero es menor');
    } else{
        asignarTextoElemento('p', 'El numero es mayor');
    }
    intentos++;
    limpiarCaja();
}
   //console.log(numeroDeUsuario === numereroSecreto);
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    
   let numeroGenerado = Math.floor(Math.random()*numeroMaxico)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   // Si ya sorteamos todos los numero.
   if(listaNumerosSorteados.length == numeroMaxico){
    asignarTextoElemento('h1', 'Ya se sortearon todos los numeros posibles');

   } else{

   

   // Si el numero generado esta incluido en la lista
   if(listaNumerosSorteados.includes(numeroGenerado)){

     return generarNumeroSecreto();

   } else{

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
   
}
}
function mensajeIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaxico}`);
    numereroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();

    // Indicar mensaje de intervalos de numeros
    mensajeIniciales();

    // Generar el numero secreto
    numereroSecreto = generarNumeroSecreto();

     // Deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','');

}
asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaxico}`);
generarNumeroSecreto();