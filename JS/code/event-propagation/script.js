const gp = document.getElementById('gp');
const p = document.getElementById("p");
const c = document.getElementById("c");
const btn = document.getElementById("btn");
btn.addEventListener('click', function ()
{
    alert("hai,button clicked")
},true)
c.addEventListener("click", function () {
	alert("child clicked")
},true)
p.addEventListener("click", function () {
	alert("parent clicked")
},true)
gp.addEventListener("click", function () {
	alert("grand parent clicked")
}, true)
let buttonsDiv = document.getElementById("buttons");
buttonsDiv.addEventListener('click', function (e)
{
    alert(e.target.textContent + " button clicked")
})
document.getElementById('inp').addEventListener('input',function (e) { console.log(e.target.value)  })