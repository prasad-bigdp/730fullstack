let pcount = document.getElementById('count');
let paraText = document.getElementById('para')
let inp= document.getElementById('na')
let c=0
function incr ()
{
    // alert(paraText.innerText)
    // paraText.innerHTML='<b>BYE</b>'
    paraText.textContent= "Bye "+ inp.value
    if (c < 30)
    {
        c++;
        pcount.textContent = c;
    }
    else
    {
        pcount.textContent = 0;
        c = 0;
        }
}