
let ele = document.querySelector('.modal')
let bg = document.querySelector(".bg-overlay")
function display ()
{
    ele.classList.remove('none');
    ele.classList.add("animate__bounceInUp")
   bg.style.display="block"
}
function disappear ()
{
    ele.classList.add('none')
       bg.style.display = "none"

}