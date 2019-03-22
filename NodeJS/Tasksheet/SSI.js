const Tasks = require('./Task.js');
const Yargs = require('yargs');

const argv = Yargs.argv;
var command =  argv._;
console.log('Running SSI Task', command);
if (command == 'add')
{
    Tasks.addtask(argv.taskname, 'open', argv.time, argv.plannedeff, argv.deliverydate);
}
else if (command == 'start')
{
    console.log('starting task');
}
else if (command == 'pause')
{
    console.log('Set task to pause');
}
else if (command == 'close')
{
    console.log('Task Completed');
}
else if (command == 'getcurrent')
{
    console.log('Current Task');
}
else if (command == 'listopen')
{
    console.log('Open tasks listed');
}
else if (command == 'listall')
{
    console.log('All task listed');
}