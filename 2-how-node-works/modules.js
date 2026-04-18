// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(10, 25));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2"); // using destructing object  ES6 feature
console.log(divide(2, 5));

// Caching
// top level cod execute once due to caching but function call multiple times, technically module loaded once
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
