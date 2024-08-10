let names = ["raj", "Prasad", "vani", "Jessica", "Priya", "Geetha"]
const m= document.getElementById('main')
names.forEach(function (n)
{
    const para = document.createElement('p');
    para.textContent = "HI, " + n
    m.appendChild(para)
})