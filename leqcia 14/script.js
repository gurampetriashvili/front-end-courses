function printMessage() {
    displayThis()
}

let freeVar = 'aasdads';

const freeVar2 = 'aasdads';

let array = [1, 2, 3, 5, 9, 10 , 12];
let cars = ['prius', 'bmw', 'mercedes'];



let student = {
    name: 'guram',
    fullName: (myVar) => { return this.name}
}



function displayThis(myText = 'no text received') {

    let newArray = array.filter((value) => { return value > 3 });
    
    let testArray = [];

    let indexNumber = cars.indexOf('bmw');
    console.log(indexNumber);


    for (let i =0 ; i < array.length; i++) {
        if (array[i] > 3) {
            testArray.push(array[i]);
        }
    }

    console.log('testArray', testArray);

    console.log('newArray', newArray);

    var numberToGet = Number(document.getElementById('myText').value);
    var saveText = numberToGet > 2 ? 'metia' : 'araa meti';

    // numberToGet > 2 ? metiFunction() : naklebiFunc()

    // if (numberToGet > 2) {
    //     metiFunction()
    // } else {
    //     naklebiFunc()
    // }

    if (numberToGet > 2) {
        let ifCvladi = 3;
        saveText = 'metia'
    } else {
        saveText = 'araa meti';
    }


    switch (numberToGet) {
        case 1:
        case 3:
        case 5:
            console.log('number is odd');
            break;
        case 2:
        case 4:
            console.log('number is even');
            break;
        default:
            console.log('number is unkown');
            break;
    }



    if (numberToGet > 5) {
        console.log('metia')
    } else if (numberToGet === 5) {
        console.log('tolia')
    }
    else {
        console.log('araa meti')
    }
}