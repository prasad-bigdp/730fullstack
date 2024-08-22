console.log(this) // current calling object - window is the defalut/global calling object
// function display ()
// {
//     console.log(this)
// }
// window.display()
console.log(window.location);
// location consists, host,hostname,href,reload()
//geo location
window.navigator.geolocation.getCurrentPosition((pos) => { console.log(pos.coords, pos.timestamp) }, (err) => { console.log(err) })

const button = document.getElementById('btn');
const videoElement = document.getElementById('vd');
document.getElementById('btn2').addEventListener('click', () =>
{
    videoElement.srcObject=null
})
button.addEventListener('click', function ()
{
    window.navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((v)=> videoElement.srcObject=v)
})


//memory
//There are two memory storages window object provides like localstorage and session storage
// local storage is permanant storage but session storage loses the data once the browser is closed
console.log(localStorage)
localStorage.setItem('name', 'prasad');
console.log(localStorage.getItem("name"));
localStorage.clear()

// cache , session, cookies
// cache memory is used to retrieve the data quickly
// sessions are used to keep users secirily login speciic time
// cookies are used to track users interaction to website









