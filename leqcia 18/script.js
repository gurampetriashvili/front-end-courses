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

    document.getElementById('toDo').innerHTML = '';
    document.getElementById('progress').innerHTML = '';
    document.getElementById('testing').innerHTML = '';
    document.getElementById('done').innerHTML = '';
    for (let i=0; i < tasks.length; i++) {
        let lister = document.createElement('div');
        let taskName = document.createElement('div');
        taskName.innerHTML = tasks[i].name;
        let taskDesc = document.createElement('div');
        taskDesc.innerHTML = tasks[i].desc
        let taskAssign = document.createElement('div');
        taskAssign.innerHTML = tasks[i].assign;
        lister.append(taskName, taskDesc, taskAssign);
        console.log(tasks[i].status);
        console.log(taskName, taskDesc, taskAssign);

        switch (tasks[i].status) {
            case 'toDo': 
            lister.classList = 'list__item todo';
            document.getElementById('toDo').appendChild(lister);
            break;
            case 'inProgess': 
            lister.classList = 'list__item progress';
            document.getElementById('progress').appendChild(lister);
            break;
            case 'testing': 
            lister.classList = 'list__item testing';
            document.getElementById('testing').appendChild(lister);
            break;
            case 'done': 
            lister.classList = 'list__item done';
            document.getElementById('done').appendChild(lister);
            break;
        }


        // if (tasks[i].status === 'toDo') {
            
        // } else if (tasks[i].status === 'inProgess') {
        //     document.getElementById('progress').appendChild(lister);
        // } else if (tasks[i].status === 'testing') {
        //     document.getElementById('testing').appendChild(lister);
        // } else if (tasks[i].status === 'done') {
        //     document.getElementById('done').appendChild(lister);
        // }
    }
}