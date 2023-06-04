const test = document.querySelector(".testing")

console.log(test)
setTimeout(()=>{
    test.innerHTML = "it Has changed"
}, 6000)