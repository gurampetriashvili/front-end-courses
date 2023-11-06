"use strict";
let sacyisi = 5;
let saboloo = sacyisi;

let student1 = {
    name: 'ggggg', 
    lname: 'ffff', 
    age: 123,
    fullInfo: function() {
        return this;

    } 
};
let student2 = student1;


let listOfCars = [{brand: 'toyota', model: 'camry'},{brand: 'bmw', model: 'm5'}];


console.log(this);

// document.getElementById('btn')

function validateForm() {
    let myBrand = document.forms['carForm']['brand'].value;
    let myModel = document.forms['carForm']['model'].value;
    console.log('forma', document.forms['carForm']);
    console.log('forma brand', document.forms['carForm']['brand']);
    console.log('forma brand value', myBrand);

    if (myBrand.length == '' && myModel.length < 3) {
        alert('insufficient text');
        return false;
    }
}


function printButton(something) {
    console.log('result', something);
    document.getElementsByTagName('body')[0].removeChild(something);
}


function printMessage() {

    for (let i = 0; i < listOfCars.length; i++ ) {
        console.log('car in list - ', listOfCars[i]);
        let carElement = document.createElement('div');
        console.log('carElement', carElement);
        carElement.classList = 'carContainer';
        carElement.innerHTML = listOfCars[i].brand + ' | ' + listOfCars[i].model;
        document.getElementById('carList').appendChild(carElement);
    }



    // saboloo = saboloo + 3;

    // console.log('in function', this);

    // console.log('cvladi - ', sacyisi);
    // console.log('cvladi2 - ', saboloo);


    // student2.name = 'shecvlili';
    // console.log('pirveli', student1);
    // console.log('meore', student2);


    // console.log('object', student1.fullInfo());
    // document.getElementById('info').innerHTML = student1.fullInfo();
}



function addCar() {
    let myBrand = document.forms['carForm']['brand'].value;
    let myModel = document.forms['carForm']['model'].value;
    listOfCars.push(
        {brand: myBrand, model: myModel }
    );

    console.log('listOfCars', listOfCars);

    document.getElementById('carList').innerHTML = '';
    
    printMessage();
}