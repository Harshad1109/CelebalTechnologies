function taskOne() {
    return new Promise((resolve,reject) => {
        const randomNumber = Math.floor(Math.random() * 10);
        setTimeout(() => {
            if (randomNumber === 1) {
                reject(new Error("Error executing Task One"));
            } else {
                console.log("Task One completed");
                resolve();
            }
        }, 1000);
    });
}
  
function taskTwo() {
    return new Promise((resolve,reject) => {
        const randomNumber = Math.floor(Math.random() * 10);
        setTimeout(() => {
            if (randomNumber === 1) {
                reject(new Error("Error executing Task Two"));
            } else {
                console.log("Task Two completed");
                resolve();
            }
        }, 1000);
    });
}
  
function taskThree() {
    return new Promise((resolve,reject) => {
        const randomNumber = Math.floor(Math.random() * 10);
        setTimeout(() => {
            if (randomNumber === 1) {
                reject(new Error("Error executing Task Three"));
            } else {
                console.log("Task Three completed");
                resolve();
            }
        }, 1000);
    });
}
  
async function runTasks() {
    try{
        await taskOne();
        await taskTwo();
        await taskThree();
        console.log('All Tasks Completed (Async/Await Version)');
    }catch(e) {
        console.error("Error: ",e);
    }
}
  
runTasks();
