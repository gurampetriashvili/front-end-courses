// alert('Hello world!');

var randomVariable1 ='asda';
var randomVariable2 = 1;
var randomVariable3 = false;

var myFunc = function(receivedText) {
    alert(receivedText)
}

function changePicture(imageToSet) {
    document.getElementById('testImage').setAttribute("src", imageToSet);
}

function calculateServiceFee(amount, percent = 10) {
    var sumToAdd = 2;
    if (percent) {
        return (amount * percent) / 100 + sumToAdd;
    } else {
        return (amount * 10) / 100 + sumToAdd;
    }
    
}

function printCheck() {
    var amount = document.getElementById('totalPrice').value;
    var fee = document.getElementById('totalFee').value;
    document.getElementById('finalCost').innerHTML = 
        'total amount: ' + amount + ' service fee: ' + calculateServiceFee(amount, fee);
}

function messageAlerter(receivedText, receivedSecondText) {
    console.log('im in a function');
    alert(receivedText);
    alert(receivedSecondText);
    console.log(receivedText + receivedSecondText)

    if (receivedText > receivedSecondText) {
        alert(calculateServiceFee(20, 5));
    }

    if(receivedText === 'Hello') {
        alert('Hello to you too');
    } else {
        alert('please say hello');
    }

    document.getElementById('textReceive').innerHTML = receivedText + receivedSecondText;

}