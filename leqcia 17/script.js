function addTask() {
    const newTask = {};
    console.log('form', document.forms['task'])
    newTask.name = document.getElementById('taskName').value
    newTask.desc = document.forms['task']['taskDescription'].value
    newTask.assign = document.forms['task']['taskAssignee'].value
    newTask.status = document.forms['task']['taskStatus'].value
    console.log('newTask', newTask);
    addData(newTask)
}

function addData(task) {
    fetch('http://localhost:3000/tasks', {
        
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
    },
    body: JSON.stringify(task)
    }).then(() => getData())

}

async function getData() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    console.log(tasks);

    document.getElementById('list').innerHTML = '';
    for (let i=0; i < tasks.length; i++) {
        let lister = document.createElement('div');
        lister.classList = 'list__item';
        let taskName = document.createElement('div');
        taskName.innerHTML = tasks[i].name;
        let taskDesc = document.createElement('div');
        taskDesc.innerHTML = tasks[i].desc
        let taskAssign = document.createElement('div');
        taskAssign.innerHTML = tasks[i].assign
        let taskStatus = document.createElement('div');
        taskStatus.innerHTML = tasks[i].status;
        console.log(taskName, taskDesc, taskAssign, taskStatus);
        lister.append(taskName, taskDesc, taskAssign, taskStatus);
        document.getElementById('list').appendChild(lister);
    }
}