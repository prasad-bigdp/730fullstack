let arr = [5, 8, 1, 3, 4]
console.log(arr,typeof arr)
/* for each */

arr.forEach(function (ele,ind)
{
    console.log(ele,ind)
})
// use foreach and check whether each and every element of array is even or odd
let y= arr.forEach(function (ele) {
	  if (ele % 2 == 0) {
			return "even"
		} else {
			return "odd"
		}
})
let x=arr.map(function (ele)
{
    if (ele % 2 == 0)
    {
        return "even"
		} else {
       return "odd"
    }
})
let x2 = arr.map(function (ele) {
    return ele%2==0;
})
let x3 = arr.filter(function (ele) {
	return ele%2==0
})
console.log(x2, x3)
let x4=arr.every(function (ele)
{
    return ele%2==0
})
console.log(x4)
arr=[100,200,100,300,200]
let total=arr.reduce(function (prev,curr)
{
    return prev+curr
}, 100)
console.log(total)

/* objects */
/* objects are used to assign some properties with its values */
let obj = {
    name: "PRASAD",
    age: 55,
    walk: function ()
    {
        console.log("walking")
    }
}
console.log(obj, obj.name,obj['name'],Object.keys(obj),Object.values(obj))




