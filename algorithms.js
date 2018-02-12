var bubbleSort = (array) => {
    var switched = true;
    while (switched === true){
        for (var i = 0; i < array.length; i++ ){
            if (i ===  array.length - 1){
                switched = false;
            } else if (array[i] > array[i + 1]){
                    var temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    break;
            }
        }
    }
    return array;
}

//console.log(bubbleSort([2,6,4,3,1,7]))

var factorialMemo = (val) => {
    var cache = {};
    return () => {
        cache.val = cache[val - 1] * val
    }
}

var fact15 = factorialMemo(15);
console.log(fact15());