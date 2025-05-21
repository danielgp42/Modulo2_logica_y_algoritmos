const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        const inicialInicio = arr[inicio].charAt(0);
        const inicialSiguiente = arr[siguiente].charAt(0);

        if (inicialInicio === inicialSiguiente) {
            // Si coinciden, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }

        // Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));