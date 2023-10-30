var subjectStatus = 'Active';

var testNumbe = 5;

var carsArray = ['bmw', 'merc', 'audi']

var testNumber2 = testNumbe;


function StudentInfo(incomingName, incomingLastName, incomingAge) {
    this.name = incomingName;
    this.lastName = incomingLastName;
    this.age = incomingAge;
    this.subject = 'IT';
}

var testStudent = new StudentInfo('guram', 'ptr', 31)
var testStudent2 = new StudentInfo('giorgi', 'giorgadze;', 32);

var student = {
    name: 'guram',
    lastName: 'petriashvili',
    age: 30,
    subject: 'information technologies',
    fullInfo: function(additionalInfo) { return this.name + ' | ' + this.lastName + ' | ' + this.subject + ' | ' + subjectStatus + ' | ' + additionalInfo}
};

var student2 = {
    name: 'guram',
    lastName: 'petriashvili',
    age: 30,
    subject: 'information technologies',
    fullInfo: function(additionalInfo) { return this.name + ' | ' + this.lastName + ' | ' + this.subject + ' | ' + subjectStatus + ' | ' + additionalInfo}
};
student2.name = 'giorgi';


var collector = {
    name: 'giorgi',
    lastName: 'maisuradze',
    cars: ['bentley', 'mustang', 'lamborgini'],
    garages: {
        garageName: 'personal',
        address: 'vake'
    }
}



function startValues(useNumber) {

    console.log('testStudent', testStudent);
    student2.wentToSchool = true;

    delete student2.lastName;

    for (var i=0; i < carsArray.length; i++) {
        console.log('my car', carsArray[i]);
    }

    for (let mnishvneloba in student2) {
        console.log('current key', mnishvneloba);
        console.log('val', student2[mnishvneloba]);
    }


    console.log('student', student);
    console.log('student2', student2);

    document.getElementById('name').innerHTML = student.name;
    document.getElementById('lName').innerHTML = student.lastName;
    document.getElementById('fullInfo').innerHTML = student.fullInfo('Honor student');
    document.getElementById('name2').innerHTML = student2.name;
    document.getElementById('lName2').innerHTML = student2.lastName;
    document.getElementById('fullInfo2').innerHTML = student2.fullInfo('Average student');
}

function myFunction(textToPrint, numberToAdd) {
    console.log(textToPrint);
    console.log(numberToAdd);
}

