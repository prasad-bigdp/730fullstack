const mainDiv = document.getElementById('main');
function fetchData ()
{
    fetch("https://fakestoreapi.com/products")
        .then(function (res)
        {
          return res.json()
        })
        .then(function (data)
        {
            console.log(data);
            displayData(data)
        })
        .catch(function (err)
        {
            console.log("my error: " + err);
        })
}
fetchData();
function displayData (data)
{
    data.forEach(function (pro)
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        const proImage = document.createElement('img');
        proImage.src = pro.image;
        proImage.alt= pro.title
        const title = document.createElement('h2');
        title.textContent= pro.title
        const proPrice = document.createElement('p')
        proPrice.textContent = "Price: $" + pro.price;
        const AddCart = document.createElement('button');
        AddCart.textContent="add to cart"
        productDiv.append(proImage, title, proPrice,AddCart);
        mainDiv.appendChild(productDiv)
   })
}