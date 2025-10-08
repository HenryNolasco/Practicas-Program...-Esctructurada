
// ==================
// Ejercicio 1
// ==================
function ejercicio1() {
    let nombres = ["Ana", "Luis", "María", "Carlos", "Elena"];

    console.log("=== Ejercicio 1 ===");
    console.log("Array de nombres:", nombres);
    console.log("Primer nombre:", nombres[0]);
    console.log("Último nombre:", nombres[nombres.length - 1]);
}

// ==================
// Ejercicio 2
// ==================
function ejercicio2() {
    let frutas = ["Manzana", "Banana", "Naranja"];

    console.log("\n=== Ejercicio 2 ===");
    console.log("Array inicial:", frutas);

    // push -> agrega al final
    frutas.push("Mango");
    console.log("Después de push('Mango'):", frutas);

    // pop -> elimina el último
    frutas.pop();
    console.log("Después de pop():", frutas);

    // unshift -> agrega al inicio
    frutas.unshift("Fresa");
    console.log("Después de unshift('Fresa'):", frutas);

    // shift -> elimina el primero
    frutas.shift();
    console.log("Después de shift():", frutas);
}


// ==================
// Ejecutar ejemplos
// ==================
ejercicio1();
ejercicio2();