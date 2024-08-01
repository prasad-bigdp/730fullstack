let x = 25;
console.log(x, typeof (x))  //25 number
let y = 35.33569;
console.log(y, typeof y) // 35.33 number
console.log(y.toFixed(3))
console.log(y.toPrecision(3))
console.log(y.toString(2))
console.log(Math.max(2, 3))
console.log(Math.min(2, 3))
console.log(Math.sqrt(16))
console.log(Math.cbrt(27))
console.log(Math.pow(2, 3), 2 ** 3)
console.log(Math.floor(-3.6589)) // -4
console.log(Math.ceil(1.212)) //2\
console.log(Math.round(1.5)) //2
console.log(Math.round(Math.random() * 10000)) // random number from 0.0-1.0

let p = "sita"
p="prasad"
console.log(p, typeof p, p[0], p[1], p[2], p[3])
//In JS strings '' or "" are similar
let time = "5'o clock"
let quote = 'the kalam said "dream big"'
let price = 25;
console.log(`price is ${price * 4}`)
console.log('price is'+price*4)

let str = " javascript is so easy "
console.log(str.length) // prints no-of-characters
console.log(str.split(' ')) // split into array based on delimiter like ' '
console.log(str.replace('a', 'b')) // replaces first a with b , to replace all, use replaceAll
console.log(str.startsWith('bava')) //false - checks whether givens string starts with bava or not
console.log(str.endsWith('sy')) //true
console.log(str.slice(2, 5)) // vas -- consider string from 2 to 5 but 5 is not included
console.log(str.trim()) //removes spaces at ends
console.log(str.toUpperCase()) // converts string into uppercase
console.log(str.toLowerCase()) //converts whole string into lower case
console.log(str.charAt(5), str.indexOf('a'), str.lastIndexOf('a'))
//Template literal