document.getElementById('total').textContent =
    localStorage.getItem('itemsCount') ?? 0
let count = localStorage.getItem("itemsCount") ?? 0;
let cartArr = JSON.parse(localStorage.getItem("myItems")) ?? []
const addCartFn = (p) =>
{
    count++;
    document.getElementById('total').textContent = count;
    localStorage.setItem("itemsCount", count)
    cartArr.push(p);
    console.log(cartArr)
    localStorage.setItem('myItems',JSON.stringify(cartArr))
}