function arrayDifference(arr1, arr2) {
    let result = [...arr1];
    for (let elem of arr2) {
        let index = result.indexOf(elem);
        if (index !== -1) {
            result.splice(index, 1);
        }
    }
    return result;
}
const array1 = [4, 5, 5, 7, 8];
const array2 = [6, 7];
console.log(arrayDifference(array1, array2));