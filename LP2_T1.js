function saludo() {
    console.log("Hola Mundo");
    return;
}

function nombre() {
    let mensaje = prompt("Escribe tu nombre");
    console.log(`Hola ${mensaje}`)
}

function numero() {
    alert('Voy a decirte el doble de un número');
    let number = prompt("escribe un número");
    console.log(number);
    console.log(parseInt(number)*2);
    alert(parseInt(number)*2);
}

function promedio() {
    alert('Ahora, voy a deicrte el promedio de 3 números');
    let number1 = parseInt(prompt("escribe el primer número"));
    let number2 = parseInt(prompt("escribe el segundo número"));
    let number3 = parseInt(prompt("escribe el tercer número"));
    console.log(`${number1}, ${number3}, ${number3}`);
    console.log((number1+number2+number3)/3);
    alert((number1+number2+number3)/3);
}

function mayor() {
    alert('Ahora, te voy a decir de dos números cual es mayor');
    let optionNumber1 = parseInt(prompt("escribe el primer número"));
    let optionNumber2 = parseInt(prompt("escribe el segundo número"));
    
    if (optionNumber1>optionNumber2) {
        alert(`el número mayor es ${optionNumber1}`);
        console.log(`el número mayor es ${optionNumber1}`);

   } else {
        if (optionNumber1<optionNumber2) {
            alert(`el número mayor es ${optionNumber2}`);
            console.log(`el número mayor es ${optionNumber2}`);
        } else {
            alert(`el número ${optionNumber2} es igual a ${optionNumber1}`);
            console.log(`el número ${optionNumber2} es igual a ${optionNumber1}`);
        }
    }
}

function potencia() {
    alert('finalmente, te voy a decir el resultado de multiplicar un número por si mismo');
    let numberPotencia = prompt("escribe un número");
    console.log(numberPotencia);
    console.log(parseInt(numberPotencia)*parseInt(numberPotencia));
    alert(parseInt(numberPotencia)*parseInt(numberPotencia));
}

saludo();
nombre();
numero();
promedio();
mayor();
potencia();