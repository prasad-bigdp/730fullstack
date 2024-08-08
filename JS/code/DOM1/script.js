console.log(document)
let x1 = document.getElementsByTagName('p');
let x2 = document.getElementsByClassName('para')
let x3 = document.getElementById('pa') 
let x4 = document.querySelector('p')
let x5= document.querySelectorAll('p')
console.log(x1[0])
console.log(x2[0])
console.log(x3)
console.log(x4)
console.log(x5)
function change ()
{
    x3.textContent = " Welcome World"
}
