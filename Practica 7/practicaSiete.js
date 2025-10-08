// ==================
// Ejercicio 1
// ==================
// Crear una función que reciba un array de objetos y devuelva solo los nombres.
function obtenerNombres(personas) {
    return personas.map(p => p.nombre);
}

// ==================
// Ejercicio 2
// ==================
// Crea un array de números desordenados y ordénalos de menor a mayor con sort()
function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b);
}

// ==================
// Ejemplos de uso
// ==================

// Ejercicio 1
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 28 }
];

console.log("=== Ejercicio 1 ===");
console.log("Array original:", personas);
console.log("Solo nombres:", obtenerNombres(personas));

// Ejercicio 2
let numeros = [45, 3, 29, 10, 99, 1, 50];
console.log("\n=== Ejercicio 2 ===");
console.log("Array original:", numeros);
console.log("Ordenado de menor a mayor:", ordenarNumeros(numeros));
