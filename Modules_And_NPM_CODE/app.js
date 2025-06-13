// const math = require('./math');
// console.log(math)
// console.log(math.PI)
// console.log(math.square(9))

// const { PI, square } = require('./math');
// console.log(PI)
// console.log(square(9))

const cats = require('./shelter')
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)

// Instructor: So we're gonna start

// by talking about sharing JavaScript code

// between different files.

// Outside of Node in the world of the browser

// client side JavaScript.

// If we have different JavaScript files,

// we just include them in the same HTML script

// or the same HTML document rather.

// And then we have access to all the functions

// and all the whatever, variables that we've defined, assuming

// that we've included them in the right order,

// and we do have to worry about that order.

// With Node, we have a completely different system

// where we can be very particular

// about what a single file shares and what it does not share.

// And we can require code from other files

// just like we could require code

// from a built-in module like we just saw in the last unit

// when we talked about the file system module.

// So I'll show you an example here.

// I'm in a new folder, empty folder that's not a command.

// Here we go.

// I'll make a simple file here.

// We're gonna call this math.js

// and we're just gonna put some basic functions in math.

// So nothing crazy, but you know something

// like const add = (x,y) => x + y.

// Okay, really nothing crazy.

// Maybe we'll make a variable PI = 3.14159.

// And let's also do maybe square = x => x * x.

// Great.

// Alrighty.

// So we have these different two functions

// in a single const, a single variable

// that I might wanna reuse in different files.

// And there might be one app that uses this,

// but there might be five or six

// or 1,000 apps as we'll see with things like Express,

// which we're going to get to shortly,

// that's just JavaScript code written by other people

// and it's used by hundreds of thousands,

// maybe tens of thousands, maybe millions.

// I'm not sure.

// It's used by at least thousands

// of developers in their own code

// and they are requiring those files.

// So we can write these reusable PIces that we can import

// and use in our own apps.

// So here we go.

// We've got our math.js.

// Now I'm gonna make a new file.

// I'll call this one just I don't know, how about app.js?

// And then in here, let's try what I just said.

// We can do, we can require a file that we've written.

// So instead of doing fs or some built in module,

// we can require a different file like math.

// Now we don't have to say .js.

// And if I do require that, let's just see what happens.

// const, we'll call this math = require('math').

// And then let's console.log(math).

// So what do you think is going to happen here?

// What is math going to be if we require

// the contents of a file?

// We saw how require works with built-in module like FS.

// Let's try running this.

// So node app.js.

// Oh, cannot find module math.

// Well, this is actually my fault

// and not what I intended for us to see.

// When we're referencing a file rather than a module,

// that's an existing module like fs or something,

// we actually need to do ./

// to make it clear we're referencing something

// in this directory.

// So dot is this directory /math.

// Let's try that again.

// I'm going to clear this.

// Okay. Hmm.

// What did we get?

// Well, not an error, we were able to require that file,

// but what we got when we required it is an empty object.

// So this is how node modules work.

// When we create a file like math.js, the contents

// of this file are not just automatically available

// everywhere else when we require that file.

// So this is different if we have two files in the same index,

// HTML two scripts, right?

// They're going to both load all their stuff,

// all their variables, all of their functions.

// And the second one has access

// to whatever is defined in the first one.

// That's not the case here.

// So when I require a file,

// I'm not gonna get anything from this math.js file

// unless in the math file I explicitly say

// what I want to export out of the file.

// So here's how this works.

// There's a special property called module.exports,

// and by default it is an object.

// And right now, that is what we're actually exporting,

// an empty object.

// It's just a default.

// If I set it to be something else,

// for example, 37 or the string "HELLOOO"

// and I run this, there we go.

// Now we have explicitly said this entire file,

// it doesn't matter what's in here, the only thing

// that it's ever going to export is HELLOOO, the string.

// So when we require that, the contents of module exports,

// which is usually an object,

// but in this case, well it's an object by default,

// but in this case, it's a string.

// That is what we're going to fill this math variable with.

// All right.

// So we usually don't export a string like that,

// although we can.

// But what we might do instead

// is something like module.exports.add = add.

// Module.exports.PI = PI.

// Module.exports.square = square.

// So you don't have to do it like this.

// It's kind of clunky.

// We'll see some alternatives, but remember, it's an object.

// So we're setting on the object called module.exports.

// We want add to be the function we define called add PI.

// PI will be PI and square will be square.

// All right, so now if we look at it, here we go.

// It's an object that we required over here.

// We imported it, it's stored in this variable we created

// called math, and now we have access to this entire object.

// We have things like math.PI.

// If we print that out, there we are.

// If I, you know, ran one of these functions,

// like let's do console.log(math.square(9)).

// Just love squaring nine,

// I don't know why.

// 81, great number.

// There we are, okay?

// And we also can destructure, as we've seen earlier

// with just plain old client side JavaScript.

// If I only wanted PI and square out of that object,

// I'll destructure it just like that.

// And so now I can just reference square

// and PI and it still works.

// All right, so if I have something else in here

// that I'm not exporting,

// like if I just stopped exporting PI,

// I'm not going to have PI available over here.

// It's not on that object.

// So that's a basic concept module

// that exports in this case is an object

// that we're just adding properties onto.

// You can replace module that exports entirely.

// So I could do something like this instead.

// I could have defined an object like const math

// equals this object.

// And then in here, I could say add: add, right?

// And PI: PI and so on.

// square : square.

// So I just have an object with those methods

// and properties defined.

// And then I can just all at once say

// module.exports = math.

// So I've just assigned it to a different object

// and this should still work for me and it does.

// The other thing I can do

// that's common is just add these directly

// onto module exports like this.

// And that should still work for us.

// Whoops.

// Square is not a function, oh, I forgot.

// I didn't mean add.

// We're using square in the file.

// Okay, so that is working as well.

// Just run it one more time.

// So those are all different options.

// It's the same exact concept.

// Each one of these sort of slight variations,

// it's just adding methods, adding properties to some object

// that we then export.

// Now, there is a shorter syntax so that we don't have

// to constantly type module.exports.

// It's just called exports.

// This is what the docs has to say about it.

// The exports variable is available

// within a module's file level scope

// and is assigned the value of module exports.

// Before the module is evaluated.

// It allows a shortcut so that module.exports.f

// equals can be written more succinctly as exports.f.

// However, be aware that like any variable,

// if a new value is assigned to exports, it's no longer bound

// to module exports.

// So it's just a quick reference to module.exports.

// So I could instead say, you know,

// exports.square = square

// like that and exports.PI = PI, like that.

// I'll run this and it still works fine.

// But if instead up top,

// if I did something like exports equals blah, blah, blah,

// now, we're not actually adding these to module.exports

// because exports has now been set to a string.

// It's just a variable.

// I can totally change it to whatever I want.

// I shouldn't, and you also shouldn't use exports

// as your own variable name anyway.

// But there we are.

// This is a shortcut syntax.

// So to summarize all of that,

// we can require files that we create.

// And when we do that, we don't automatically get access

// to everything in that file.

// We have to set module.exports

// to include whatever the properties are

// or whatever the functions

// and variables you know, that we want to have access to are.

// We have to include them in what we export.

// So there are various ways of doing this,

// but module exports by default as an empty object,

// we can add properties to that.

// We can change module lot exports

// to be something else entirely.

// Make it the number seven if you want.

// That is what you will be requiring.

// And then what we just saw is that exports is a shortcut

// to refer to that module.exports object.

// But if you do assign exports

// to something else, you can get into trouble.

// And that's pretty much it.

// So you have to explicitly export things

// and then we can require them.

// And then if we're referencing one of our own files,

// we need to reference the path to find that file.

// So we could structure this differently.

// We could have this in a directory

// called, you know, utilities or something.

// We just need to reference the correct path.

// But for this example, it's a ./math

// because we're in the same directory.

// Okay.

// Instructor: One more thing to cover

// around requiring files

// and sharing code between our scripts

// is that we can actually require an entire directory.

// So this is a pretty common pattern.

// I may have,

// lemme just make it directory here.

// Oh, I think I navigated away from where we were.

// What was that?

// 26,

// cd 26.

// Okay, we're back.

// So often we may have multiple files

// that are working together

// to form some application

// or a library or some cohesive thing.

// So, related files.

// For example, in a really simple, silly example,

// maybe I have a directory

// called, I don't know,

// How about Catshelter?

// Alright.

// Or maybe just shelter, like that.

// And then inside of shelter,

// let's touch a couple different cat files.

// So, Blue is one of my cats.

// How about Sadie?

// One of my friends' cats when I was a kid,

// got eaten by a coyote.

// And then how about Janet?

// Three different cats.

// Okay?

// And then inside of each one of those files,

// we'll just do something very simple and silly.

// Why don't, make this a bit larger?

// And then we'll do module.exports equals

// where we'll have a name set to blue

// and I dunno, what else do we want?

// (keyboard clicking)

// Color

// (keyboard clicking)

// is grey.

// She's a grey cat with the name of Blue.

// Alright, so we'll just duplicate this

// and put that in each one of these.

// We'll change their name to be Janet.

// And Janet is going to be an orange Tabby.

// And then same thing for Sadie.

// Change the name and color will be,

// she's a black cat.

// So, what I want to show now,

// we have these three separate files.

// Each one is just a, you know, exports a very simple object.

// I'm gonna combine all three

// and put them in an array

// in a file instead of shelter.

// And this file,

// I'm gonna give a very particular name

// and you'll see why in a moment.

// I'm gonna call it

// index.js.

// Okay?

// And then in here I'm going to require all three objects.

// So I'm gonna do const blue equals require./

// and then blue.

// And then I'll duplicate this.

// What else do we have?

// Sadie

// and then Janet, right?

// Okay?

// So we have our three cats

// and then I'm just gonna combine them into an array

// for this file.

// So I'm just gonna call this const cat

// or all cats or something

// equals, and then those three,

// Blue, Sadie and Janet.

// And then why don't we just print that out

// and make sure that's working.

// So this is nothing new at this point,

// just more practice with modules

// and exports.

// So, let's try running index

// node,

// index.js.

// Okay, here's our array

// with three separate cats.

// Very silly example,

// imagine each one of these is actually

// a lot more complicated

// and has a lot more information in here.

// Even then it's a bit of a stretch

// to put them in separate files.

// But anyway,

// we've done it,

// we've imported them all

// or we've required them into a common

// or into a single file called index.js

// and I've stored them in an array.

// Now the reason that I'm demoing this

// is that I want to actually require

// the entire contents of shelter

// from outside of this directory.

// And this is the pattern that's common.

// We have any number of JavaScript files in a directory

// and a single index.js,

// and that's a particular name in Node.

// It's sort of like the entry point,

// it's the the main file, if you will,

// for this directory.

// So when I require an entire directory,

// Node is going to look

// for an index file

// and whatever that file exports

// is what the directory will export.

// So I'm gonna set

// module.exports

// to be all cats,

// just like that.

// And now, outside of this folder,

// let's make a new file

// just somewhere,

// lemme clear this.

// I guess we could just do it in our app.js if we wanted to.

// app.js down here.

// I'm going to require

// const cats

// equals require.

// And then the entire directory,

// which is just ./shelter.

// It's not a file,

// but it's a directory.

// So why don't we then console.log cats,

// just do that.

// I guess I'll comment that out.

// (keyboard clicking)

// And I'll say something like

// required an entire directory

// and then comma cats.

// Okay?

// Let's see what happens.

// node app.js.

// And it worked.

// So I required a directory.

// In this case, shelter.

// Shelter has an index file in it.

// Index.js, whatever that file exports

// is what we will be importing

// or what we get when we call require shelter.

// So this is super, super common, as I've said.

// In just a moment,

// we're going to learn how to work with packages,

// basically libraries that other people have written

// and they all are going to have an index.js file.

// So even if this seems silly,

// what we'll see later

// is not silly.

// It's very real.

// And an index.js plays a very important role

// when we're creating libraries or working with libraries.

// So that's it.

// And now we've pretty much covered

// everything you need to know about module.exports

// and require.

// In the next video, we're going to move on

// to some exciting stuff.

// We're gonna talk about npm.


