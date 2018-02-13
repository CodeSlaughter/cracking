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

var productsOfArray