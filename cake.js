//Question 1
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
//Question 2
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
//Question 3
function highestProdOf3(array){
    var lowestInt = Math.min(array[0], array[1]);
    var highestInt = Math.max(array[0], array[1]);
    var lowestProdOfTwo = array[0] * array[1];
    var highestProdOfTwo = array[0] * array[1];
    var maxProduct = array[0] * array[1] * array[2];
    for (var i = 2 ; i < array.length; i ++){
      var current = array[i];
      maxProduct = Math.max(maxProduct, current * lowestProdOfTwo, current * highestProdOfTwo)
      lowestProdOfTwo = Math.min(lowestInt * current, highestInt * current, lowestProdOfTwo);
      highestProdOfTwo = Math.max(highestInt * current, lowestInt * current, highestProdOfTwo)
      lowestInt = Math.min(lowestInt, current);
      highestInt = Math.max(highestInt, current);
      
    }
    return maxProduct;
  }
//Question 4
function mergeMeetings(array){
  var arrayCopy = JSON.parse(JSON.stringify(array));
  var sortedMeeings = arrayCopy.slice().sort(function(a, b) {
    return a.startTime - b.startTime;
  });
  var mergedMeetings = [sortedMeeings[0]];
  for(var i = 1; i < arrayCopy.length; i++){
    if(mergedMeetings[mergedMeetings.length - 1].endTime >= sortedMeeings[i].startTime){
      mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(mergedMeetings[mergedMeetings.length - 1].endTime, sortedMeeings[i].endTime)
    } else {
      mergeMeetings.push(sortedMeeings[i]);
    }
  }

  return mergedMeetings;
}
//Question 7
class temperatureTracker {
  constructor(){
    this.mean;
    this.max = 0;
    this.occurances = 0;
    this.sum = 0;
    this.mode;
    this.min = 0;
    this.dataStore = [];
    this.maxOccurances = 0;
  }
  insert(val){
    this.occurances++;
    this.sum += val;
    this.max = Math.max(this.max, val);
    this.min = Math.min(this.min, val);
    this.mean = this.sum / this.occurances;
    
    if(!this.dataStore[val]){
      this.dataStore[val] = 1
    } else {
      this.dataStore[val]++
    }
    if(this.maxOccurances < this.dataStore[val]){
      this.maxOccurances = this.dataStore[val];
      this.mode = val
    }
  }
}

//Question 22
function deleteNode (linked, val){
  var node = linked.head;
  while(node){
    if (node.value === val){
      node.value = node.next.value;
      node.next = node.next.next;
    }
    node = node.next;
  }
  return linked;
}

  function charRev(stringLit){
    var string = stringLit.split('')
    for (var i = 0 ; i < string.length / 2 ; i ++){
      var temp;
      temp = string[string.length - 1 - i];
      string[string.length - 1 - i] = string[i];
      string[i] =  temp;
      console.log(string);
    }
    return string.join('');
  }