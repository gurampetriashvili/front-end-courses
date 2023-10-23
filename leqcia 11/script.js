var testArray = [
    'guram', 
    'petriashvili' , 
    31
];

var carsArray = [
    { name: 'mercedes',  model: 'slk', year: 2000},
    { name: 'bmw',  model: 'm5', year: 4444, imgSource: 'bird.jpg'},
    { name: 'toyota',  model: 'asdasd', year: 5455, imgSource: 'bird.jpg'},
    { name: 'opel',  model: 'astra', year: 1990, imgSource: 'bird.jpg'},
];


console.log(testArray[0]);

var favCar = {
    name: 'mercedes', 
    model: 'slk', 
    year: 2000,
    imgSource: 'test.jpg',
    fullInfo: function() { return this.name + '|' + this.model + '|' + this.year }
};

var news = {
    title: '',
    text: '',
    date: '',
    author: '',
}

function logger() {
    console.log(carsArray[0]);
    console.log(carsArray);

    for (var i = 0; i < carsArray.length; i++) {
        console.log(carsArray[i]);

    }

}

console.log(favCar.name);
console.log(favCar.fullInfo());

function numberDisplay() {
    var myNumber = Number(document.getElementById('carNumber').value);
    // favCar.name = carsArray[myNumber].name;


    for (var i = 0; i < carsArray.length; i++) {
        if (myNumber === i) {
            favCar.name = carsArray[i].name;
            favCar.model = carsArray[i].model;
            favCar.year = carsArray[i].year;
        }
     }
     startValues();
}

function startValues() {
    document.getElementById('carName').innerHTML = favCar.name;
    document.getElementById('carModel').innerHTML = favCar.model;
    document.getElementById('carYear').innerHTML = favCar.year;
    document.getElementById('carImage').src = favCar.imgSource;
    // document.getElementById('fullCar').innerHTML = favCar.fullInfo();

}

function changeCar() {
    console.log('gilakze dacherisas');
    favCar.name = document.getElementById('inputName').value;
    favCar.model = document.getElementById('inputModel').value;
    favCar.year = document.getElementById('inputYear').value;
    favCar.imgSource = 'https://www.myauto.ge/build/assets/e597003b90e0b50af00e.png';
    startValues();

    // 
}


function displaySugge() {
    document.getElementById('suggest').style = 'display: block';
}