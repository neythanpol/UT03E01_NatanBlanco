// Contar elementos repetidos de un array

//Escribe una función repetidos() que tome un array y devuelva otro array especificando el número de veces que se repite cada elemento del primer array

// Por ejemplo:
//Si la entrada es [2, 3, 2, 2] la salida debe ser [3, 1]
//Si la entrada es [1, 1, 1] la salida debe ser [3]
//Si la entrada es [2, 3, 3, 2] la salida debe ser [2, 2]

function repetidos(array) {
    const contador = []; // Array que almacena cada elemento
    const yaContados = []; // Array de los elementos que ya hemos contado para que no vuelva a ponerlos

    for (let i = 0; i < array.length; i++) {
        const valor = array[i]; // Obtenemos el valor actual

        // Si el elemento ya ha sido contado se lo salta
        if (!yaContados.includes(valor)) {
            // Si el elemento no ha sido contado entonces inicializamos un contador a 0
            let cont = 0;

            // Recorremos el array para comprobar si el valor se repite
            for (let j = 0; j < array.length; j++) {
                if (array[j] === valor) {
                    // Si el valor se repite se le suma 1 cada vez
                    cont++;
                }
                
            }
            // Añadimos el conteo al array contador
            contador.push(cont);
            // Añadimos los valores al array de ya contados
            yaContados.push(valor);
        }
    }
    // Devolvemos el array de los elementos contados
    return contador;
}
// Lo probamos
const numero = [2, 4, 4, 5, 1];
console.log(repetidos(numero));