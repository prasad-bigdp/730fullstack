// To get the Id in the URL
const params = new URLSearchParams(window.location.search);
const pid = params.get('pid');
console.log(pid)
function fetchData ()
{
    fetch(`https://dummyjson.com/product/${pid}`)
        .then((res) => res.json())
        .then((data) => displayData(data))
    .catch((err)=>console.log(err))
}
fetchData();
const leftDiv = document.getElementById('left');
const rightDiv= document.getElementById('right')
const displayData = (p)=>{
    const img = document.createElement('img');
    img.src = p.thumbnail;
    img.alt = p.title;
    leftDiv.append(img);
    const title = document.createElement('h2');
    title.textContent = p.title
    const desc = document.createElement('p');
    desc.textContent = p.description
    const price = document.createElement('p');
    price.textContent= "Price: $"+ p.price
    const addCartButton = document.createElement('button')
    addCartButton.addEventListener("click", () => addCartFn(p))
    addCartButton.textContent = "Add Cart";
    rightDiv.append(title,desc,price,addCartButton)
}