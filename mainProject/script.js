const productsListDiv = document.getElementById("productsList");
const cat= document.getElementById('cat')
const fetchCategories = () =>
{
    fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) =>
        {
            data.forEach((data) =>
            {
                const op = document.createElement("option")
				op.textContent = data.name
				op.value = data.slug
				cat.append(op)
            })
    })
}
fetchCategories();
document.getElementById('cat').addEventListener('input', function (e)
{
    fetch(`https://dummyjson.com/products/category/${e.target.value}`)
        .then((res) => res.json())
    .then((data)=>displayData(data.products))
})
const fetchData = async () =>
{
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    displayData(data.products)
}
fetchData();
function displayData (products)
{
    productsListDiv.textContent=''
    products.forEach((pro) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('product')
        const proImage = document.createElement('img');
        proImage.src = pro.thumbnail;
        proImage.alt = pro.title;
        const proLink = document.createElement('a');
        proLink.href = `./product.html?pid=${pro.id}`
        proLink.target="_blank"
        const proTitle = document.createElement('h2');
        proTitle.textContent = pro.title
        proLink.append(proTitle)
        const proPrice = document.createElement('p');
        proPrice.textContent= "Price: $"+pro.price
        const addCartButton = document.createElement('button');
        addCartButton.textContent = "Add Cart"
        addCartButton.addEventListener('click',()=>addCartFn(pro))
        proDiv.append(proImage, proLink, proPrice, addCartButton);
        productsListDiv.appendChild(proDiv)
   })
}