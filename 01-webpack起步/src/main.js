//1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(22, 49));
console.log(mul(3, 9));

//2、使用ES6的模块化规范 
import {age, name, height} from "./info";

console.log(age)
console.log(name)
console.log(height)