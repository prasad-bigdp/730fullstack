/* basic javascript */
/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. */
console.log(a)  //undeined
console.log(b)  //undefined
// console.log(d)   // error - block scoped variables,let,const cannot access before declaration
// console.log(c)  // error - not defined
var b = 25;
var a = 32;
debugger;
let d = 25;
console.log(a)  //32
console.log(b)  //25
 
function display ()
{
    console.log(k)
    var k = 32;
    console.log(k)
}
display()



