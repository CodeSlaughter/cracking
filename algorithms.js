//Bubble Sort
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

//Palindrome

var isPalindrome = (string) => {
    var stringArr = string.split('');
    var revString = '';
    for(var i = 0; i < string.length; i++){
       revString = revString + stringArr.pop();
    }
    if(revString === string){
        return true
    }
    return false;
}

//console.log(isPalindrome('jamie'));

//console.log(bubbleSort([2,6,4,3,1,7]))

var factorialMemo = (val) => {
    var cache = {};
    if (val = 1){

    }
    
    return () => {
        cache.val = cache[val - 1] * val
    }
}

var fact15 = factorialMemo(15);
console.log(fact15());