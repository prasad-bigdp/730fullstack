const mainDiv = document.getElementById('main');
function fetchData ()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            console.log(data)
            displayData(data)
        })
        .catch(function (err)
        {
            console.log("my error  "+err)
        })
    
}
fetchData();
function displayData (data)
{
    mainDiv.textContent=''
    const para = document.createElement('p');
    const punch = document.createElement('h2');
    para.textContent = data.setup;
    punch.textContent = data.punchline;
    punch.classList.add('hide')
    const btn = document.createElement('button');
    btn.textContent="reveal"
    btn.addEventListener('click', function ()
    {
        punch.classList.remove('hide')
    })
    mainDiv.append(para,punch,btn)
}
document.getElementById('generate').addEventListener('click',fetchData)