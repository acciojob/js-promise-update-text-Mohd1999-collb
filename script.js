//your JS code here. If required.
const output = document.getElementById("output");

// Create a function that returns a promise which resolves with a string Hello, world! after 1 second. Use this promise to update the text of an HTML element with an ID of output after it resolves.
async function callMe(){
    let promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello, world!");
        }, 1000)
    })
    return promise;
}

callMe().then((data)=>{
    output.innerText = data;
})