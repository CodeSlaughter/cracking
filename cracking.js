// 1.1
var isUnique = (string) => {
    var obj = {}
    for (var i = 0; i < string.length; i++){
        var key = string.charCodeAt(i);
        if (obj[key]){
            return false;
        } else {
            obj[key] = string[i]
        }
    }
    return true
}

//console.log(isUnique("jamiej"));

//1.2

var objMaker = (string) => {
    var obj = {}
    for (var i = 0; i < string.length; i++){
        if (obj[string[i]]){
            obj[string[i]]++
        } else {
            obj[string[i]] = 1;
        }
    }
    return obj
}

var isPermutation = (string1, string2) => {
    var obj1 = objMaker(string1);
    var obj2 = objMaker(string2);

    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    for (var i = 0; i < keys1.length; i++){
        if (keys1[i] !== keys2[i]){
            return false
        }
    }

    for (var i = 0; i < keys1.length; i++){
        if (keys2[i] !== keys1[i]){
            return false
        }
    }
    return true;
}

var isPermutationAlt = (string1, string2) => {
    if (string1.length !== string2.length){
        return false
    }
    var arr = []
    for (var i = 0; i < string1.length ; i++){
        if (arr[string1.charCodeAt(i)] === undefined){
            arr[string1.charCodeAt(i)] = 1
        } else {
            arr[string1.charCodeAt(i)]++
        }
    }
    for (var j = 0 ; j < string2.length ; j++){
        if (arr[string2.charCodeAt(j)] === undefined){
            return false
        } else {
            arr[string2.charCodeAt(j)]--;
            if (arr[string2.charCodeAt(i)] < 0){
                return false
            }
        }
    }
    return true
}

console.log(isPermutation('bob', 'blo'));
console.log(isPermutationAlt('bob', 'bbo'));

// var matrixRotate = (array) => {
//     for (var i = 0; i < array[])
// }

//6.