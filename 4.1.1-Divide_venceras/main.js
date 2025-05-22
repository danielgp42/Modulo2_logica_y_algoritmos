function findMax(arr) {
    // Caso base: Si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); 
    const left = arr.slice(0, mid);       
    const right = arr.slice(mid);         

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos de ambas mitades
    return Math.max(leftMax, rightMax);
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

const numbers2 = [15];
console.log(findMax(numbers2)); // Salida esperada: 15

const numbers3 = [1, 2, 3, 4, 5];
console.log(findMax(numbers3)); // Salida esperada: 5

const numbers4 = [100, 20, 50, 70, 5];
console.log(findMax(numbers4)); // Salida esperada: 100