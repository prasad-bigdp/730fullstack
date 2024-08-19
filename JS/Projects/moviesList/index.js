const mainDiv = document.getElementById('main');
const movieSelector = document.getElementById('movies');
let data;
const fetchData = async () =>
{
    // fetch("https://api.sampleapis.com/movies/drama")
    //     .then((res) => res.json())
    //     .then((data) => displayData(data))
    //     .catch((err) => console.log(err))
    //console.log("hello world")
    try
    {
        const res = await fetch(`https://api.sampleapis.com/movies/${movieSelector.value}`
         )
        data = await res.json();
            displayData(data)

    }
    catch(err)
    {
        console.log(err);
        mainDiv.textContent='Sorry for inconvience. error occured'
    }
}
movieSelector.addEventListener("input", fetchData)

const displayData = (movies) =>
{
    mainDiv.textContent = '';
    movies.forEach((m) =>
    {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        const movieImage = document.createElement('img');
        movieImage.src = m.posterURL;
        movieImage.alt= m.title
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = m.title
        const movieLink = document.createElement('a');
        movieLink.href = `https://www.imdb.com/title/${m.imdbId}`
        movieLink.target = "_blank";
        movieDiv.append(movieImage, movieTitle);
        movieLink.appendChild(movieDiv);
        mainDiv.appendChild(movieLink)
    })
}