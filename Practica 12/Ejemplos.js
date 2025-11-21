// For
// for (initialization; condition; incremento)
for (let i = 5; i >= 1; i--) {
    console.log("Iteration numero: ", i)
}

// While
console.log("\nEJEMPLO 2\n")
let contador = 1 
while (contador <= 5) {
    console.log("Contador: ", contador)
    contador++
}

// Do-While
console.log("\nEJEMPLO 3\n")
let isOn = false
do {
    console.log("Esta encendido? ", isOn) 
} while (isOn == true)

// Bucle for...of
console.log("\nEJEMPLO 4\n")
const nombres = ["Daniel", "List", "Fernanda", "Martha", "Cristian", "Elisa", "Pablo", "Ikar", "Edwardo"] 
for (const nombre of nombres) { 
    console.log("Hola, ", nombre) 
}