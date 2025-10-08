

// ==================
// Ejercicio 1
// ==================
function lanzarDados() {
    // Math.random() genera un número entre 0 y 1
    // Multiplicamos por 6 y usamos Math.floor para obtener enteros entre 0 y 5
    // Luego sumamos 1 para tener valores entre 1 y 6
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let total = dado1 + dado2;

    console.log("Dado 1:", dado1);
    console.log("Dado 2:", dado2);
    console.log("Total:", total);
}

// =================
// Ejercicio 2
// ==================
function operaciones(num1, num2) {
    console.log("Número 1:", num1);
    console.log("Número 2:", num2);
    console.log("Suma:", num1 + num2);
    console.log("Resta:", num1 - num2);
    console.log("Multiplicación:", num1 * num2);

    if (num2 !== 0) {
        console.log("División:", num1 / num2);
    } else {
        console.log("División: No se puede dividir entre 0");
    }
}

// ==================
// Ejecutando las funciones de ejemplo
// ==================
console.log("=== Lanzamiento de Dados ===");
lanzarDados();

console.log("\n=== Operaciones con Dos Números ===");
operaciones(10, 5);
