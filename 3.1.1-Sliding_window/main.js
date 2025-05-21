function findLongestWord(text) {
    // Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        // Comparar la longitud de la palabra actual con la más larga
        if (currentWord.length > longestWord.length) {
            // Actualizar palabra más larga
            longestWord = currentWord;
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación parangaracutirimicuaro increíble para aprender.";
// Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"