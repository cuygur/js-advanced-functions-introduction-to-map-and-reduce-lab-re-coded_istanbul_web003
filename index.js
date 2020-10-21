// Your code here
sourceArray = [1, 5, 8]

function mapToNegativize(arr) {
    let x = []
    let y;
    for ( y of arr) {
       x.push(y * -1)
    }
    return x
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let x = []
    let y;
    for ( y of arr) {
       x.push(y * 2)
    }
    return x
}

function mapToSquare(arr) {
    let x = []
    let y;
    for ( y of arr) {
       x.push(y * y)
    }
    return x
}

function reduceToTotal(arr, startingPoint=0) {
    let total = startingPoint
    let y;
    for ( y of arr) {
       total += y 
    }
    return total
}

function reduceToAllTrue(arr) {
    let y;
    for (y of arr){
       if (!y)
       return false 
    }
    return true
}

function reduceToAnyTrue(arr) {
    let y;
    for (y of arr){
       if (y)
       return true 
    }
    return false
}