const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

// module.exports = "HIIIIIII"
// module.exports = math;
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;

// exports = "gfmfkykgljh"
exports.square = square;
exports.PI = PI;

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// {}

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// HIIIIIII

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// { add: [Function: add], PI: 3.14159, square: [Function: square] }

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// 3.14159
// C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Modules_And_NPM_CODE\app.js:4
// console.log(square(9))
//         ^

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// 3.14159
// 81

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// 3.14159
// 81

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// undefined
// 81

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// 3.14159
// 81

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// 3.14159
// 81

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ node app.js
// undefined
// C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Modules_And_NPM_CODE\app.js:8
// console.log(square(9))
//             ^

// TypeError: square is not a function
//     at Object.<anonymous> (C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Modules_A
// nd_NPM_CODE\app.js:8:13)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_ma
// in:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.16.0

