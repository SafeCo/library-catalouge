const test = document.querySelector('.test')
let dataStore = {}
fetch('/api/v1')
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    dataStore = data
    console.log(dataStore)
})

console.log(dataStore)



test.innerHTML= "done"