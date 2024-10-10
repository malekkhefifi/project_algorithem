function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

// Exemple d'utilisation
let arr = [5, 3, 6, 1, 4];
console.log(insertionSort(arr)); // Sortie: [1, 3, 4, 5, 6]
