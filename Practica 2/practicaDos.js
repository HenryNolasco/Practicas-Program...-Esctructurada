

//Ejercicio Uno
const texto = "Bienvenidos a la practica #2";

console.log(".:: Ejercicio Uno ::.");
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

//Ejercicio Dos 
console.log("\n\n .:: Ejercicio Dos ::.")
const frase = " Hola mundo ";
const fraseLimpia = frase.trim();
console.log(fraseLimpia);

//Ejercicio Tres 
console.log("\n\n .:: Ejercicio Tres ::.")
const palabra = "HotWheels"
const palabraNueva = palabra.substring(3, 9)
console.log(palabraNueva)

// Ejercicio tarea
// Contar los caracteres de una cadena ("su nombre") sin contar los espacios (Hacer uso de .trim() y .replace())


//Ejercicio Cuatro
console.log("\n\n .:: Ejercicio Cuatro ::.")
function contarCaracteresCompleto(nombre) {
    // Primero eliminar espacios al inicio y final con trim
    const nombreTrimmed = nombre.trim();
    // Luego eliminar todos los espacios internos con replace
    const nombreSinEspacios = nombreTrimmed.replace(/\s/g, '');
    return nombreSinEspacios.length;
}

// Ejemplo de uso
const nombreConEspacios = "   Ana María López   ";
const resultado = contarCaracteresCompleto(nombreConEspacios);
console.log(`El nombre "${nombreConEspacios}" tiene ${resultado} caracteres sin espacios`);

