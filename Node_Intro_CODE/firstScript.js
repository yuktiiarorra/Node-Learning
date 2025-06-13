for (let i = 0; i < 10; i++) {
    console.log("HELLO FROM FIRST SCRIPT!!")
}


// Instructor: Okay, so using the node REPL can be useful,

// but it is definitely not the way we'll be writing code

// and executing code.

// Just like we don't use the Chrome console

// to type our applications and to write long scripts.

// What we do instead is write our code in a JavaScript file.

// So, let's do that here, let's make a new JavaScript file.

// If I can type.

// Microphone is blocking my keyboard.

// What should we call it? Let's do,

// I don't know, how about just firstScript.js?

// All right, then I'm going to open it up over in VS Code.

// And put some JavaScript code in this file.

// So something simple.

// We can use a console.log, as we saw previously.

// "HELLO FROM FIRST SCRIPT."

// Maybe let's use a loop.

// for(let i = 0; i < 10; i++), or something like that.

// We'll repeat this.

// All right, so some very basic JavaScript in a file,

// a .js file.

// Now, how do we run it?

// Well, normally, in the browser at least,

// I shouldn't say normally,

// but with what we've done so far,

// we would create an index or some sort of HTML file,

// include a script referencing this file,

// a script tag referencing this JavaScript file,

// and then open up the HTML file in the browser.

// But we don't need to do any of that.

// I can simply run, I'll make this larger,

// node, and then instead of hitting Enter, type a space,

// and then the name of a JavaScript file, firstScript.js.

// And there we go, I just executed it.

// And it ran as JavaScript, it ran as node.

// That's exactly what I'm saying to do here.

// I'm saying, "Take this file and execute it as node code."

// So if we have errors in there, which of course we could,

// how about something like console.ldog?

// I'll run this again, and now we get an error,

// and it says, "console.ldog is not a function."

// And it points out where the problem is.

// Okay. So that's a very basic idea of running a script.

// You make a file, .js just like before,

// we put some code inside of it,

// and then we execute it with node and the file name.

// So let me fix that.

// And then firstScript.js.

// So of course, you need to be in the correct directory

// or you just need to reference the correct path to it.

// So I could do something like,

// let me just clear this,

// node, and then I think I put it in a folder called

// 25_Node_Intro, and then /firstScript.js.

// That's fine too,

// you just need to make sure you reference the file correctly.

// So you can't just type the file name anywhere,

// it needs to be in the folder you're in,

// or you need to reference that full path,

// relative to where you are at the moment,

// and we execute it with node.

// All right, node on its own opens the REPL,

// and node with a file name, execute the script using node.


// kunj5@DESKTOP-6GU8P5E MINGW64 ~
// $ cd OneDRive

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive
// $ cd "YUKTI PROGRams"/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams
// $ cd Node

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node
// $ cd Node_Intro_CODE/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ touch firstScript.js

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ ls
// Introduction  REPL  args.js  boilerplate.js  firstScript.js  greeter.js

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node firstScript.js
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!
// HELLO FROM FIRST SCRIPT!!



// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node firstScript.js
// C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Node_Intro_CODE\firstScript.js:2
//     console.ldog("HELLO FROM FIRST SCRIPT!!")
//             ^

// TypeError: console.ldog is not a function
//     at Object.<anonymous> ←[90m(C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Node
// _Intro_CODE\←[39mfirstScript.js:2:13←[90m)←[39m
// ←[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)←[39m
// ←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)←[3
// 9m
// ←[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)←[39m
// ←[90m    at Module._load (node:internal/modules/cjs/loader:958:12)←[39m
// ←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/r
// un_main:81:12)←[39m
// ←[90m    at node:internal/main/run_main_module:23:47←[39m

// Node.js v18.16.0

