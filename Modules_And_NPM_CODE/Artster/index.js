// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const figlet = require("figlet");
// figlet('Hello World!!', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });
const colors = require("colors");
figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});

// for strict use of a dependecy use it without ^ in json dependencies

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ cd Artster/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Artster
// $ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (artster)
// version: (1.0.0)
// description:
// git repository:
// keywords:
// license: (ISC)
// About to write to C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Modules_And_NPM_CODE\Artster\package.json:

// {
//   "name": "artster",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Colt Steele",
//   "license": "ISC",
//   "dependencies": {
//     "colors": "^1.4.0",
//     "figlet": "^1.5.0"
//   },
//   "description": ""
// }


// Is this OK? (yes)

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Artster
// $ npm i figlet
// npm WARN old lockfile
// npm WARN old lockfile The package-lock.json file was created with an old version of npm,
// npm WARN old lockfile so supplemental metadata must be fetched from the registry.
// npm WARN old lockfile
// npm WARN old lockfile This is a one-time fix-up, please be patient...
// npm WARN old lockfile

// added 2 packages, and audited 3 packages in 2s

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Artster
// $ node index.js
//   _   _      _ _        __        __         _     _ _ _
//  | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
//  | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
//  |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
//  |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)


// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Artster
// $ npm i colors

// up to date, audited 3 packages in 940ms

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Artster
// $ node index.js
//   _   _      _ _        __        __         _     _ _ _
//  | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
//  | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
//  |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
//  |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)

// Instructor: So let's talk

// about this mysterious package.json.

// In every single node_modules,

// every single package that I install,

// including all of the dependencies

// that I didn't manually install.

// But let's take a look at one that I did install like,

// that Jokes one, wherever that is.

// What was it called?

// give-me-a-joke

// Here's the folder with the code for give-me-a-joke.

// It has some JavaScript code, here it is.

// But it also has this thing called, a package.json.

// And I'll make this larger for a moment.

// This is a very special file with a special name

// that we'll put inside of every Node app that we create.

// So it's not required per se, but you'll want it there.

// And it basically contains metadata

// or information about this particular project

// or package or application.

// So there's things like "description".

// There's things like the "license",

// that this package is created under or published under.

// The "name", of course.

// And then, the "version".

// And the stuff that we care about the most is going

// to be "dependencies".

// So these are, in this case,

// three different dependencies

// for this one package, this one tool,

// that Node is then gonna go and install.

// But each one of these, like express,

// comes with its own fairly large set of dependencies.

// If we look at express here,

// it has its own package.json.

// Here's the "name".

// It has a whole bunch of stuff,

// including "authors" or "contributors",

// who have created express.

// A lot of different dependencies.

// And what you'll also note,

// is that for these dependencies,

// some of them have a very specific version, "1.1.1".

// Others have what is less specific, "~1.0.4."

// Let's see if there's an example of greater than.

// I don't see that.

// But you can do things like, "^2.5".

// So these are the dependencies and the versions

// necessary for express.

// And then NPM is going to go

// and install every single one of these

// and their dependencies and so on.

// And it's always looking in the package.json file.

// And as you've probably noticed, it is a JSON file,

// just like what we've seen before, with Ajax,

// JavaScript Object Notation.

// So we can put JSON in here ourselves,

// but usually the way that we'll create this file,

// is with an NPM command.

// So I'm gonna do that now.

// I'm gonna make a new project here.

// I think we're gonna work with this tool, called Figlet,

// to make some ASCII Art.

// So I'm gonna make a new directory where we'll do that.

// Lemme get out of here.

// And this directory will be called, Artster.

// All right, then I'll cd into there.

// Now, instead of touching packaged.json myself

// and making it,

// I'm gonna run this command,

// npm init

// Just like that.

// And this is the sort of creation utility for package.json.

// You don't have to do it this way,

// but this is the easiest way to make a package.json

// that conforms to the template

// or the standard that we should follow.

// So it asks me a couple of questions including,

// package name:

// This is fine, I'll hit enter.

// version: (1.0.0)

// Just hit enter and go with the default.

// description:

// I'm just gonna skip.

// entry point: (index.js)

// We'll learn more about that,

// but I'll leave it at the default.

// test command:

// Skip, skip, skip.

// author:

// Sure, I can put my name in there if I want.

// Skip for, license:

// Okay, now if I look at what I get as an end result...

// Oh, I still have to hit "okay" one more time.

// There we go.

// It makes me a package.json.

// There's nothing really

// in here that's all that important,

// but now there is a file packaged.json.

// It is JSON, right?

// It has a "name" and a "version",

// empty "description",

// it has its "main": "index.js",

// and that's good enough for now.

// So next, what I'm going to do is install a package here.

// And if you remember,

// before we saw an error in the command line.

// It was more of a warning.

// It still installed the package in node_modules,

// but it said it couldn't find a package.json.

// But now that we have a package.json,

// if I install Figlet, for example.

// npm i figlet

// In this directory, I'm gonna do it right here,

// npm i figlet

// Okay, take a look at what happened here.

// No error, no warning,

// and my package.json now shows me

// in "dependencies": { "figlet": "^1.5.0" }

// It needs this package called, figlet.

// And it's documented it in this package.json.

// So this acts as a record of everything that I'm using

// in this application.

// And if at some point I stop using Figlet,

// I can delete this.

// But this does not mean anything to my code.

// You know, I don't have to have this here

// in order to use Figlet.

// I need it in my node_modules.

// But I wanna keep this in sync

// with what I'm doing with node_modules,

// so that later on if my node_modules is deleted

// or if I send this file to you or someone else,

// you can go and get all the appropriate dependencies.

// And I'll show you how to do that in just a bit

// in the next video.

// So now, if I make a file in here.

// Let's do index.js

// And I require Figlet,

// and I just follow the instructions.

// Let's see, const figlet = require("figlet").

// And then, let's just try this.

// Just gonna copy and paste, honestly.

// Like that.

// 'Hello World!!'

// It wants a callback.

// If there's an error, we'll print it out.

// Otherwise we'll print out the data,

// which I assume is the ASCII Art that it's made for us.

// So let's try running it.

// There we go.

// node index.js

// "Hello World!!"

// So let's see if maybe we could combine this

// with a rainbow text package, Colors.

// So let's install Colors.

// So I'm gonna do that from my command line.

// npm i colors

// It's going to try and find the package.json,

// if there is one.

// And it's going to add into it an entry,

// under "dependencies" for "colors".

// And this is the version we're using right now, "^1.4.0".

// So this, it makes it very clear in the future,

// don't use, you know, 1.0 or 0.5 or something.

// And I could be very specific

// and say "1.4.0" if I wanted to,

// but I'll just leave it.

// And now, I can use Figlet and Colors.

// This doesn't give me any new features,

// it doesn't unlock anything,

// it's just a record of what I've already installed.

// But this is important going forward.

// And again, we'll see that in the next video.

// But let's require Colors.

// require("colors")

// And then, let's see.

// I believe, if I go back to Colors...

// I'm not gonna do rainbow.

// Let's just do one of these colors,

// like let's print it out in green.

// So I think I can do this.

// Let's see if that works.

// node index.js

// And there we are,

// "Hello World!!" in green.

// Alright, so to summarize what we saw here.

// npm init, is an easy way of making a package.json,

// which will be filled out with whatever answers you enter.

// Again, the package.json file is a special file

// in npm or in the world of Node that includes metadata

// about your project or your package

// or whatever you're working on.

// So we typically put this in the root directory of a project.

// And where we care about it the most for now,

// is that if we have a package.json

// and we install dependencies,

// those dependencies will automatically be added

// to the dependencies section of package.json

// or of the package.json file.

// And this is useful,

// one, for just keeping a record of what we're using,

// but two, for sharing this file with other people

// or with myself on a different machine

// where I can actually go

// and download these dependencies in one shot.

// So that's what I'll show you in the next video.