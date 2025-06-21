function taskOne() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                console.log('Task One Completed');
                resolve('Task One Completed Successfully');
            } catch(error) {
                reject(new Error('Error in Executing Task One'));
            } 
        },1000);
    });
}
  
function taskTwo() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try {
                console.log('Task Two Completed');
                resolve('Task Two Completed Successfully');
            } catch(error){
                reject(new Error('Error in Executing Task Two'));
            }
        }, 1000);
    });
}
  
function taskThree() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                console.log('Task Three Completed');
                resolve('Task Three Completed Successfully');
            } catch(error){
                reject(new Error('Error in Executing Task Three'));
            } 
        }, 1000);
    });
}
  

function main() {
    taskOne()
    .then(taskTwo)
    .then(taskThree)
    .then(() => {console.log("All Tasks Completed (Promise Version)")})
    .catch((e) => {console.error("Error:", err)})
}
main();