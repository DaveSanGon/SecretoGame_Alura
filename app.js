let numeroSecreto = 0;
let intentos = 1;
let listaNumerosJuego = [];
let numeroMaximo = 10;

condicionesInciales();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);    
    //console.log(`número del usuario: ${numeroUsuario}`);
    //console.log(`número del juego: ${numeroSecreto}`);
    console.log(`intento ${intentos}`);
    if (numeroSecreto === numeroUsuario) {
       asignarTextoElemento('p',`Atinaste con el número ${numeroSecreto} en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
       document.querySelector('#reiniciar').removeAttribute('disabled'); 
    } else {
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento('p','!Cambialo¡ es un número mayor');
        } else {
            asignarTextoElemento('p','!Cambialo¡ es un número menor');
        }
    }
    limpiarCaja();
    intentos++; 
    return;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja(); 
    //poner mensaje de inicio
    condicionesInciales();
    //inicializar número de intentos
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let NumeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    
    //console.log(NumeroGenerado);
    //console.log(listaNumerosJuego);

    if (listaNumerosJuego.length === numeroMaximo) {
        asignarTextoElemento('p',`Haz llegado al limite de intentos`);
    } else {
        if (listaNumerosJuego.includes(NumeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosJuego.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Selecciona un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}

