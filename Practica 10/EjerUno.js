function crearMultiplicador(base) {
    return function(numero) {
        return base * numero;
    };
}

// Ejemplos de uso:
const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(5)); 
console.log(multiplicarPor3(10)); 

const multiplicarPor5 = crearMultiplicador(5);
console.log(multiplicarPor5(4)); 
console.log(multiplicarPor5(7)); 

// También se puede usar directamente:
console.log(crearMultiplicador(2)(8)); 