const mainDiv = document.getElementById('main');
function fetchData ()
{
    fetch("https://api.quotable.io/random")
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            console.log(data)
        })
        .catch(function (err)
        {
            console.log("my error  "+err)
        })
    
}
fetchData();