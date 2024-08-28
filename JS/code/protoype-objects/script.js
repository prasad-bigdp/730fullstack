var title="BAd Movie"
let obj = {
    uid: "5885fg8",
    title: "Good Movie",
    run: function ()
    {
        console.log(this.title+" is running")
    }
}
function run2 ()
{
    console.log(this.movie+"is not running")
}
console.log(obj.title, obj['title'])
obj.run()
// obj.run2() // it won;t work because run2 is not a property of object
// There are three ways you can include a function
// to a object
// which doesn't belong to object
// call,apply,bind
run2.call(obj)




let obj2 = {
    x: 25,
    y: 55,
}
function sum(a,b)
{
    console.log(this.x+this.y,a+b) // this means current calling obj
}
sum.call(obj2, 5, 6)
sum.apply(obj2, [5, 6])






let obj3 = {
    username:"PRASAD"
}
function fun3 ()
{
    console.log("my name is "+this.username)
}
let fun4 = fun3.bind(obj3)

fun4() //my name is prasad

















let newFn = sum.bind(obj2)

newFn(5, 6)


// objects have inheritance.
//ES6 inheritance.. class ... "extends"
// protype inheriance
// every object in js will contain one value called protypr
// using the property of prototype, u can inherit values from another object
console.log(run2.__proto__.__proto__.__proto__)
Array.prototype.prasad = function ()
{
    console.log("hello world");
}
let arr = [2, 5];
console.log(arr.__proto__.__proto__.__proto__)
arr.prasad()

let x = {
    a: 5,
    b:3
}
let y = Object.create(x)
console.log(y,y.a)














