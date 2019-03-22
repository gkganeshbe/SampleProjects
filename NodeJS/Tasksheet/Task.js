const fs = require('fs');
console.log('Running Task');
var readtask = () => {
    try{
        var Taskstring = fs.readFileSync('task-list.json');
        return JSON.parse(Taskstring);  
    }
    catch(e)
    {
        return []
    }
}

var savetask = (Tasks) => {
    fs.writeFileSync('task-list.json',JSON.stringify(Tasks)) ;
}

var addtask = (taskname, taskstatus, statustime, plannedeffort, deliverydate) =>{
    var Tasks = readtask();
    var task = {
        taskname: taskname,
        taskstatus: taskstatus,
        createdtime: statustime,
        plannedeffort: plannedeffort,
        deliverydate:deliverydate
    };

    var DuplicateTask = Tasks.filter((task) => task.taskname == taskname)
    console.log(DuplicateTask);
    if (DuplicateTask.length != 0)
    {
        console.log('Duplicate Task and not logged'); 
    }
    else
    {
        Tasks.push(task);
        savetask(Tasks);
        addtasklog(taskname, 'added', statustime);     
    }
}
var addtasklog = (taskname, taskstatus, statustime) =>{
    var Tasklogs = [];
    var Tasklog = {
        taskname: taskname,
        taskstatus: taskstatus,
        statustime: statustime
    };
    Tasklogs.push(Tasklog);
    fs.writeFileSync('task-log.json',JSON.stringify(Tasklogs)) 
}
module.exports = {
    addtask
};

