var simpleVariable = 'simple text variable'; 
var myVariable = ['guram', 'petriashvili', 31, true];
var myArray = [];
var vegetables = ['tomato', 'cucumber', 'potatoe']

var fruitArray = ['apple', 'pear']

var arrayString = myVariable.toString();
var arrayJoin = myVariable.join('*');

// var newArray = new Array('giorgi', 'giorgadze')

console.log(simpleVariable);
console.log(myVariable);
console.log(myVariable[1]);
console.log(myArray);
console.log('-------------------------------------');
console.log('sigrdze', myVariable.length);
console.log('bolo elementi', myVariable[myVariable.length - 1]);
console.log('to string', arrayString);
console.log('to join', arrayJoin);



function startValues() {
    if (myVariable[3] === true) {
        myVariable[1] = 'ragacgvarishvili';
        myArray[0]= 'start';
        myArray[1]= 'continue';
        myVariable.push();
    }
    console.log(myVariable);
    console.log(myArray);
    document.getElementById('valueHolder').innerHTML = myVariable[1];
}

function removeFruit() {
    fruitArray.pop();
    showNewArray();

}

function removeFruitFromStart() {
    fruitArray.shift();
    showNewArray();

}


function addFruit() {
    var myFruit = document.getElementById('fruit').value;
    if (myFruit.length > 0) {
        fruitArray.push(myFruit);
    }
    showNewArray();

    console.log(myFruit);
}

function addFruitFront() {
    var myFruit = document.getElementById('fruit').value;
    if (myFruit.length > 0) {
        fruitArray.unshift(myFruit);
    }
    showNewArray();
}

function showNewArray() {
    console.log(fruitArray);
    document.getElementById('basket').innerHTML = fruitArray;

}

function addManyElements () {
    fruitArray.splice(1, 0, 'kiwi', 'banana');
    showNewArray();
}

function removeManyElements () {
    var newFruits = fruitArray.slice(2, 4);
    document.getElementById('newBasket').innerHTML = newFruits;
}

function mixWithVegetables() {
    var fullBasket = fruitArray.concat(vegetables);
    console.log(fruitArray);
    console.log(vegetables);
    console.log(fullBasket);
    document.getElementById('fullBasket').innerHTML = fullBasket;
}