function factorial(n) {
    // Caso base: factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Ejemplos de uso:
console.log(factorial(5)); 
console.log(factorial(4)); 
console.log(factorial(3)); 
console.log(factorial(2));
console.log(factorial(1)); 
console.log(factorial(0)); 