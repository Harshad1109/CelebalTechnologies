function taskOne(callback) {
    const randomNumber = Math.floor(Math.random() * 10 );
    if(randomNumber == 1){
        callback(new Error("Error executing Task One!"))
    } else {
        setTimeout(() => {
            console.log('Task One executed');
            callback(null);
        }, 1000);
    } 
}
  
function taskTwo(callback)  {
    const randomNumber = Math.floor(Math.random() * 10 );
    if(randomNumber == 1){
        callback(new Error("Error executing Task Two!"))
    } else {
        setTimeout(() => {
            console.log('Task Two executed');
            callback(null);
        }, 1000);
    } 
}
  
function taskThree(callback)  {
    const randomNumber = Math.floor(Math.random() * 10 );
    if(randomNumber == 1){
        callback(new Error("Error executing Task Three!"))
    } else {
        setTimeout(() => {
            console.log('Task Three executed');
            callback(null);
        }, 1000);
    } 
}
  
// Executing tasks in sequence
taskOne((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Task One completed successfully");
    }
    taskTwo((err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Task Two completed successfully");
        }
        taskThree((err) => {
            if(err){
                console.log(err);
            } else {
                console.log("Task three completed successfully");
            }
            console.log('All Tasks Completed (Callback Version)');
        });
    });
});
  
