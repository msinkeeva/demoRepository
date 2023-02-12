function sum (array) {
    let sum = 0 
    for (let i=0; i<array.lenght; i++){
        sum+=array[i]
    }
    return sum
}
module.exports = sum