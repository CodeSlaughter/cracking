//Question 1
var maxProfitFunc = (array) => {
  var min = array[0];
  var maxProfit = array[1] - array[0];

  for (var i = 1; i < array.length; i++) {
    var currentPrice = array[i];
    var potentialProfit = currentPrice - min;
    maxProfit = Math.max(potentialProfit, maxProfit)
    min = Math.min(array[i], min);
  }
  return maxProfit;
}
//Question 2
function prodOfInt(array) {
  var results = [];
  //for ()
  var productSoFar = 1;
  for (var i = 0; i < array.length; i++) {

    results[i] = productSoFar;
    productSoFar *= array[i]
  }
  productSoFar = 1;
  for (var j = array.length - 1; j > -1; j--) {
    results[j] *= productSoFar;
    productSoFar *= array[j];
  }
  return results
}
//Question 3
function highestProdOf3(array) {
  var lowestInt = Math.min(array[0], array[1]);
  var highestInt = Math.max(array[0], array[1]);
  var lowestProdOfTwo = array[0] * array[1];
  var highestProdOfTwo = array[0] * array[1];
  var maxProduct = array[0] * array[1] * array[2];
  for (var i = 2; i < array.length; i++) {
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
function mergeMeetings(array) {
  var arrayCopy = JSON.parse(JSON.stringify(array));
  var sortedMeeings = arrayCopy.slice().sort(function (a, b) {
    return a.startTime - b.startTime;
  });
  var mergedMeetings = [sortedMeeings[0]];
  for (var i = 1; i < arrayCopy.length; i++) {
    if (mergedMeetings[mergedMeetings.length - 1].endTime >= sortedMeeings[i].startTime) {
      mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(mergedMeetings[mergedMeetings.length - 1].endTime, sortedMeeings[i].endTime)
    } else {
      mergeMeetings.push(sortedMeeings[i]);
    }
  }

  return mergedMeetings;
}
//Question 5
function makeChange(amount, coins) {
  var changeWays = [];
  for (var j = 0; j <= amount; j++) {
    changeWays[j] = 0;
  }
  changeWays[0] = 1;
  coins.forEach(function (coin) {
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      var remainingAmount = higherAmount - coin;
      changeWays[higherAmount] += changeWays[remainingAmount];
    }
  })
  return changeWays[amount];
}
//Question 7
class temperatureTracker {
  constructor() {
    this.mean;
    this.max = 0;
    this.occurances = 0;
    this.sum = 0;
    this.mode;
    this.min = 0;
    this.dataStore = [];
    this.maxOccurances = 0;
  }
  insert(val) {
    this.occurances++;
    this.sum += val;
    this.max = Math.max(this.max, val);
    this.min = Math.min(this.min, val);
    this.mean = this.sum / this.occurances;

    if (!this.dataStore[val]) {
      this.dataStore[val] = 1
    } else {
      this.dataStore[val]++
    }
    if (this.maxOccurances < this.dataStore[val]) {
      this.maxOccurances = this.dataStore[val];
      this.mode = val
    }
  }
}
//Question 9
function validBin(tree){
  var nodeAndBoundsStack = [{node: tree, lowerBound: -Infinity, upperBound: Infinity}];
  
  while(nodeAndBoundsStack.length){
    var currentNode = nodeAndBoundsStack.pop()
    var node = currentNode.node
    var upperBound = currentNode.upperBound;
    var lowerBound = currentNode.lowerBound;
    console.log(node.value);
    if(node.value > upperBound || node.value < lowerBound){
      return false;
    }
    if(node.right){
      nodeAndBoundsStack.push({node: node.right, upperBound: upperBound, lowerBound: node.value});
    }
    if(node.left){
      nodeAndBoundsStack.push({node: node.left, upperBound: node.value, lowerBound: lowerBound})
    }
  }
  return true
}
//Question 10
function secondLargest(tree){
  var nodeStack = [tree];
  while(nodeStack.length > 0){
    var node = nodeStack.pop();
    if(node.right){
      if(node.right.right === null){
        if(!node.right.left){
          return node.value
        } else {
          nodeStack.push(node.right.left)
        }
      } else {
        nodeStack.push(node.right)
      }
    }
  }
}
//Question 11 WIP
function pageStore(dataStore, word){
  var currentNode = dataStore;
  for(var i = 0; i < word.length; i++){
    if(!currentNode.hasOwnProperty(word[i])){
      if (i === word.length - 1){
        currentNode[word[i]] = 'endOfWord';
      } else {
        currentNode[word[i]] = {}
      }
    }
    currentNode = currentNode[word[i]];
  }
  return dataStore
}
//Question 12
function binarySearch(numArray, num){
  var leftPointer = numArray[0]
  var rightPointer = numArray[numArray.length - 1]
  while(leftPointer < rightPointer){
    var midPoint = leftPointer + ((rightPointer - leftPointer) / 2);
    if (midPoint === num){
      return true
    }
    if(num > midPoint){
      leftPointer = midPoint
    } else {
      rightPointer = midPoint
    }
  }
  return false
}
//Question 13
function findRotation(array){
  var leftPointer = 0;
  var rightPointer = array.length - 1;
  var midPoint;
  while(rightPointer > leftPointer){
    midPoint = Math.floor(leftPointer + ((rightPointer - leftPointer) / 2));
    if(array[midPoint] > array[0]){
      leftPointer = midPoint;
    } else {
      rightPointer = midPoint;
    }
    if ( leftPointer + 1 === rightPointer){
      break;
    }
  }
  return array[rightPointer]
}
var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]
//Question 14
function flightMovies (time, movies){
  var moviesHash = []
  for (var i = 0 ; i < movies.length; i++){
    var remainingTime = time - movies[i]
    if (moviesHash[remainingTime]){
      return true
    }
    moviesHash[movies[i]] = true
  }
  return false
}
//Question 15 Memo
class FibWrapper{
  constructor(){
    this.memo = {}
  }
  
  fib(n){
    var result;
    if(n === 1 || n === 0){
      result = n
    } else {
      result = this.fib(n -1) + this.fib(n-2)
    }
    this.memo[n] = result;
    return result;
  }
}
//Question 15 Bottom up
function fibber(n){
  var result;
  var prevPrev = 0;
  var prev = 1;
  if (n === 0 || n === 1){
    return n;
  }
  for (var i = 1; i < n ; i++){
    result = prev + prevPrev;
    prevPrev = prev;
    prev = i;
  }
  return result
}
//Question 17
var text = 'outside';
function logIt() {
  console.log(text);
  var text = 'inside';
}
//logIt();
//Question 20 
function Stack(){
  this.items = [];
}

Stack.prototype.push = function(item){
  this.items.push();
};

Stack.prototype.pop = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items.pop();
}

Stack.prototype.peek = function() {
  if(!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
}

class Stack {
  constructor() {
    this.dataStore = []; 
    this.currentMax = -Infinity;
    this.maxStack = [];
  }
  Spush(n){
    if(n > this.currentMax){
      this.currentMax = n;
      this.maxStack.push(n);
    }
    console.log(this.dataStore)
    this.dataStore.push(n);
  }
  Spop(){
    if( this.dataStore.pop() === this.currentMax ){
      this.maxStack.pop()
      this.currentMax = this.maxStack[this.maxStack.length - 1]
    }
  }
  getMax(){
    return this.maxStack;
  }
}

//Question 22
function deleteNode(linked, val) {
  var node = linked.head;
  while (node) {
    if (node.value === val) {
      node.value = node.next.value;
      node.next = node.next.next;
    }
    node = node.next;
  }
  return linked;
}
//Question 26
function charRev(stringLit) {
  var string = stringLit.split('')
  for (var i = 0; i < string.length / 2; i++) {
    var temp;
    temp = string[string.length - 1 - i];
    string[string.length - 1 - i] = string[i];
    string[i] = temp;
    console.log(string);
  }
  return string.join('');
}
//Question 29
function brackies (string) {
  var brackiesStack = [];
  var openers = ['{', '[', '('];
  var closers = ['}', ']', ')'];
  for (var i = 0; i < string.length; i++){
    if (openers.indexOf(string[i]) > -1){
      brackiesStack.push(string[i]);
    } else if (closers.indexOf(string[i]) === openers.indexOf(brackiesStack[brackiesStack.length - 1])){
      brackiesStack.pop();
    }
  }
  return brackiesStack.length === 0;
}
//Question 30
function permPal(string) {
  var unpairedChars = new Set();
  for (var i = 0; i < string.length; i++) {
    if (unpairedChars.has(string[i])) {
      unpairedChars.delete(string[i])
    } else {
      unpairedChars.add(string[i]);
    }
  }
  console.log(unpairedChars.size)
  if (unpairedChars.size <= 1) {
    return true
  } return false
}
//Question 32
function quickestSort(scores, highesPoss){
  var results = [];
  var sorted = [];
  for(var i = 0 ; i <= highesPoss; i++ ){
    results.push(0);
  }
  
  for (var j = 0 ; j < scores.length ; j++){
    results[scores[j]]++
  }
  for (var k = 0; k < results.length ; k++){
    for(var m = 0; m < results[k]; m++){
      sorted.push(k)
    }
  }
  return sorted;
}

//Question 33
function secondAppearance(array){
  var n = array.length - 1;
  console.log(n)
  var triSum = (Math.pow(n, 2) + n) / 2;
  var sum = 0;
  for(var i = 0 ; i < array.length; i++){
    sum += array[i];
  }
  return sum - triSum;
}

function matchyBrackies(string, position){
  var brackiesStore = []
  var openers = ['{', '[', '('];
  var closers = ['}', ']', ')'];
  var bracks = ['}', ']', ')', '{', '[', '(']
  for(var i = 0 ; i < string.length ; i++){
    if(bracks.indexOf(string[i]) > -1){
      brackiesStore.push(i);
    }
  }
  var revPosition = brackiesStore.indexOf(position);
  return brackiesStore[brackiesStore.length - revPosition - 1];
}


// {
//   value: 15, 
//   left: { 
//     value: 10, 
//     left: { 
//       value: 4, 
//       left: null, 
//       right: null
//     }, 
//     right: {
//       value: 11, 
//       left: null, 
//       right: null
//     }
//   }, 
//   right: {
//     value: 20, 
//     left: null, 
//     right: null
//   }
// }
