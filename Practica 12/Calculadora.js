// Tarea: Subizr el ejercicio realizado en el video de la clase. Ya sea en zip o en link de repositorio.
const readline = require('readline-sync');

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if(b == 0){
        console.log("No se puede dividir entre cero");
        return;
    }
    return a / b;
}


console.log("::: Bienvenido a la calculadora :::")

let continuar = true
let resultado = 0
let usarResultado = false

while(continuar == true){
    let a, b

    if(usarResultado ){
        a = parseFloat(readline.question("Ingresa el primer numero: "))
    } else {
        a = resultado
        console.log("Usando resultado anterior: ", a)
    }

    const operacion = readline.question("Elige una operacion (+, -, *, /): ")

    b = parseFloat(readline.question("Ingresa el segundo numero: "))
    
    switch (operacion){
        case '+':
            resultado = sumar(a, b)
            break
        case '-':
            resultado = restar(a, b)
            break
        case '*':
            resultado = multiplicar(a, b)
            break
        case '/':
            resultado = dividir(a, b)
            break
        default:
            console.log("Operacion no valida")
            continue
    }

    console.log("Resultado: ", resultado)

    const opcion = readline.question("Deseas continuar con este resultado (c), reiniciar (r) o salir (s)? ")

    if(opcion === 'c'){
        usarResultado = true
    } else if (opcion === 'r'){
        usarResultado = false
    } else if (opcion === 's'){
        continuar = false
    }
}