let a = 36;
if (a > 35)
{
    console.log("success")
}
a = 32;
if (a > 35) {
	console.log("success")
}
else
{
    console.log("failure")
}

a = 30;
if (a > 20)
{
    if (a < 50)
    {
        console.log("good")
    }
    else
    {
        console.log("bad")
    }
}

let role = "admin";
if (role == "admin")
{
    console.log("welcome to admin")
}
else if (role == "teacher")
{
    console.log("welcome to teacher")
}
else if (role == "student")
{
    console.log("welcome to student")
}
else
{
    console.log("welcome to guest")
}

switch (role)
{
    case "admin": console.log("welcome to admin"); break;
    case "teacher": console.log("welcome to teacher"); break;
    case "student": console.log("welcome to student"); break;
    default: console.log("enter valid role");       
}
// a = 5; //initialization
// while (a < 15) //condition
// {
//     console.log(a);//5
//     a++;//updation
// }
// a = 22;
// do
// {
//     console.log(a);
//     a--
// } while (a > 5);
// print in console 30 to 1 using while and do while
// a = 30;
// while (a >= 1)
// {
//     console.log(a);
//     a--;
// }
// a = 30;
// do
// {
//     console.log(a)
//     a--
// } while (a >= 1);

// for (let i = 30; i >= 1; i--)
// {
//     console.log(i)
// }
let arr=[5,6,3,4,2]
// for..of
for (let i of arr)
{
    console.log(i)
}
//for..in
for (let i in arr) {
	console.log(i)
}
//forEach
arr.forEach(function (ele)
{
    console.log(ele)
})