var maxProfitFunc = (array) => {
    var min = array[0];
    var maxProfit = array[1] - array[0];

    for (var i = 1 ; i < array.length; i++){
        var currentPrice = array[i];
        var potentialProfit = currentPrice - min;
        maxProfit = Math.max(potentialProfit, maxProfit)
        min = Math.min(array[i], min);
    }
    return maxProfit;
}

function prodOfInt(array){
    var results = [];
    //for ()
    var productSoFar = 1;
    for(var i = 0 ; i < array.length; i++){
      
      results[i] = productSoFar;
      productSoFar *= array[i]
    }
    productSoFar = 1;
    for (var j = array.length - 1; j > -1 ; j--){
      results[j] *= productSoFar;
      productSoFar *= array[j];
    }
    return results
  }