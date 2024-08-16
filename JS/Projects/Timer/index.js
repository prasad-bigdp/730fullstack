const mainDiv = document.getElementById('main')
let c = 0
setInterval(function ()
{
    let dt = new Date()
    mainDiv.textContent = dt.toLocaleTimeString()+ dt.toLocaleDateString();
}, 1000)
function x()
{
   return new Promise(function (resolve, reject)
{
    setTimeout(resolve("hello world"), 5000)
}); 
}
const y = x()
console.log(y)











