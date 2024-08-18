const mainDiv = document.getElementById('main');
const inputElement = document.getElementById('inp');
const button = document.getElementById('btn')
const fetchData = () =>
{
    fetch(`https://www.omdbapi.com/?s=${inputElement.value}&apikey=d39a8504`)
        .then((res)=> res.json())
        .then((data)=>displayData(data.Search))
        .catch((err)=> console.log(err))   
}
button.addEventListener('click', fetchData)
const displayData = (movies) =>
{
    mainDiv.textContent=''
    movies.forEach((m) =>
    {
        const movieDiv = document.createElement('div');
        const movieImage = document.createElement('img');
        const movieTitle = document.createElement('h2');
        movieDiv.classList.add('movie');
        movieImage.src = m.Poster;
        movieImage.alt = m.Title;
        movieTitle.textContent = m.Title;
        movieDiv.append(movieImage, movieTitle);
        mainDiv.appendChild(movieDiv)
    })   
}