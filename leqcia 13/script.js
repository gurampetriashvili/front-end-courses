var testText = '';

function addStudent() {
    var nameTest = document.getElementById('name').value;
    var lNameTest = document.getElementById('lName').value;
    var subjNameTest = document.getElementById('subject').value;
    // var dataTest = document.getElementsByTagName('input');
    // var dataTest2 = document.getElementsByClassName('test');
    // console.log('nameTest', nameTest.innerText);
    // console.log('dataTest', dataTest.innerHTML);
    // console.log('dataTest2', dataTest2);


    document.getElementById('colorChange').style.backgroundColor = '#ff0000';
    document.getElementById('colorChange').style.color = '#00ff00';
    document.getElementById('colorChange').style.width = '200px';
    document.getElementById('colorChange').className = 'redGreen';

    document.getElementById('picTest').src = 'test.jpg';

    // document.write('rame text');

    
    var newElement = document.createElement('div');
    newElement.className = 'student_container';

    var nameChild = document.createElement('div');
    nameChild.innerText = nameTest;

    var lNameChild = document.createElement('div');
    lNameChild.innerText = lNameTest;

    var subjNameChild = document.createElement('div');
    subjNameChild.innerText = subjNameTest;

    var chooseButton = document.createElement('button');
    chooseButton.innerText = 'give award';
    chooseButton.addEventListener('click', award);


    document.getElementById('addButton').removeEventListener('click');


    newElement.appendChild(nameChild);
    newElement.appendChild(lNameChild);
    newElement.appendChild(subjNameChild);
    newElement.appendChild(chooseButton);

    console.log('es aris elementi', newElement);
    document.getElementById('list').appendChild(newElement);

}

function replaceText() {
    testText = document.getElementById('overMe').innerText;
    document.getElementById('overMe').innerHTML = 'MOUSE WAS OVER ME';
}

function returnText() {
    document.getElementById('overMe').innerHTML = testText;
}


function award() {
    alert('award function');
}



function printMessage() {
    console.log('page was loaded');
}