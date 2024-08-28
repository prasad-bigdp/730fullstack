const cartItems = JSON.parse(localStorage.getItem('myItems'));
console.log(cartItems);
const mainDiv = document.getElementById("cartsList")
const displayItems = (data) =>
{
    mainDiv.textContent=""
    data.forEach((d,i) =>
    {
        const div = document.createElement('div');
        div.classList.add('cartItem')
        const img = document.createElement('img');
        img.src = d.thumbnail;
        img.alt = d.title;
        const title = document.createElement('h2');
        title.textContent = d.title;
        const price = document.createElement('p');
        price.textContent="$"+d.price;
        const removeButton = document.createElement('button');
        removeButton.textContent = "❎"
        removeButton.addEventListener("click", () => removeItems(i))
        div.append(img, title, price, removeButton);
        mainDiv.appendChild(div)
    })

}
displayItems(cartItems);
let to = document.getElementById("to")
function updatePrice (data)
{
    console.log(to.textContent)
    const cartTotal = data.reduce((prev, curr) => prev + curr.price, 0)
    console.log(cartTotal);
    to.textContent="$"+cartTotal.toFixed(2)
    console.log(to.textContent)
}
updatePrice(cartItems);
function removeItems(index)
{
    console.log(index)
    cartItems.splice(index, 1);
    let count = document.getElementById('total').textContent;
    count--;
    document.getElementById("total").textContent = count;
    localStorage.setItem("itemsCount", count);
    localStorage.setItem('myItems', JSON.stringify(cartItems));
    displayItems(cartItems);
    updatePrice(cartItems)
}