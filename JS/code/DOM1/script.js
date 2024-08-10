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
    console.log(x3.innerText)
   // x3.textContent = " Welcome World"
    // x3.innerText= " Welcome World "
    x3.innerHTML = `<b>Good bye</b>`
    //x3.style.backgroundColor = 'blue'
    x3.classList.toggle('x')
}
