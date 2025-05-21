// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    //Si el regalo se encuentra en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    //Si llegamos al final de la lista y no encontramos el regalo
    if (index === gifts.length - 1) { // -1 porque ya revisamos gifts[index]
        return `${giftName} no está en la lista.`;
    }
  
    // Llamada recursiva: Si no es ninguno de los casos base, sigue buscando en el siguiente índice
    return findGift(gifts, giftName, index + 1);
}

//Ejemplos:
// Caso 1: El regalo está en la lista
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Caso 2: El regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));

//El primer elemento
giftToFind = "Muñeca";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Muñeca está en la posición 0."