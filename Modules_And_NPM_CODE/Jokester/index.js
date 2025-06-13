const jokes = require("give-me-a-joke");
// console.dir(jokes);
// jokes.getRandomDadJoke(function (joke) {
//     console.log(joke);
// });
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});

const cowsay  = require("cowsay")

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ npm
// npm <command>

// Usage:

// npm install        install all the dependencies in your project
// npm install <foo>  add the <foo> dependency to your project
// npm test           run this project's tests
// npm run <foo>      run the script named <foo>
// npm <command> -h   quick help on <command>
// npm -l             display usage info for all commands
// npm help <term>    search for help on <term> (in a browser)
// npm help npm       more involved overview (in a browser)

// All commands:

//     access, adduser, audit, bugs, cache, ci, completion,
//     config, dedupe, deprecate, diff, dist-tag, docs, doctor,
//     edit, exec, explain, explore, find-dupes, fund, get, help,
//     help-search, hook, init, install, install-ci-test,
//     install-test, link, ll, login, logout, ls, org, outdated,
//     owner, pack, ping, pkg, prefix, profile, prune, publish,
//     query, rebuild, repo, restart, root, run-script, search,
//     set, shrinkwrap, star, stars, start, stop, team, test,
//     token, uninstall, unpublish, unstar, update, version, view,
//     whoami

// Specify configs in the ini-formatted file:
//     C:\Users\kunj5\.npmrc
// or on the command line via: npm <command> --key=value

// More configuration info: npm help config
// Configuration fields: npm help 7 config

// npm@9.6.7 C:\Users\kunj5\AppData\Roaming\npm\node_modules\npm

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ cd Jokester/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Jokester
// $ npm install give-me-a-joke
// npm WARN old lockfile
// npm WARN old lockfile The package-lock.json file was created with an old version of npm,
// npm WARN old lockfile so supplemental metadata must be fetched from the registry.
// npm WARN old lockfile
// npm WARN old lockfile This is a one-time fix-up, please be patient...
// npm WARN old lockfile
// npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

// added 2 packages, removed 47 packages, and changed 3 packages in 3s

// 2 packages are looking for funding
//   run `npm fund` for details

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Jokester
// $ node index.js
// {
//   getRandomCNJoke: [Function (anonymous)],
//   getCustomJoke: [Function (anonymous)],
//   getRandomDadJoke: [Function (anonymous)],
//   getRandomJokeOfTheDay: [Function (anonymous)]
// }

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Jokester
// $ node index.js
// I used to work for an origami company but they folded.

// Error: Cannot find module 'C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Modules_A
// nd_NPM_CODE\Jokester\install'
// ←[90m    at Module._resolveFilename (node:internal/modules/cjs/loader:1075:15)←[
// 39m
// ←[90m    at Module._load (node:internal/modules/cjs/loader:920:27)←[39m
// ←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/r
// un_main:81:12)←[39m
// ←[90m    at node:internal/main/run_main_module:23:47←[39m {
//   code: ←[32m'MODULE_NOT_FOUND'←[39m,
//   requireStack: []
// }

// Node.js v18.16.0

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Jokester
// $ npm install colors

// added 1 package, and audited 52 packages in 1s

// 2 packages are looking for funding
//   run `npm fund` for details

// 7 vulnerabilities (2 moderate, 3 high, 2 critical)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/Jokester
// $ node index.js
// Why do choirs keep buckets handy? So they can carry their tune


// Colt Steele: Okie dokie.

// So we talked about NPM in general terms,

// stands for node package manager,

// but we have yet to install any packages.

// So we're gonna do that in this video.

// It's actually gonna be a couple of videos

// that I'll show you, sort of all of the steps

// that you should go through.

// But in this video I'll show you the core mechanic,

// which is a terminal command called npm install.

// Now you don't just hit enter

// because we have to specify a particular node package

// that we want to install in this directory.

// So I'm gonna make a new directory actually

// and I think the package we're going to work with first,

// these are ones I've just found that are generally simple.

// The first one we'll work with is called give-me-a-joke,

// and it is an NPM module for random and customized jokes.

// So anytime you want to install a package, whatever it is,

// whether it's one of these really commonly used ones

// like React and Babel, what else is on here?

// Styled Components, I think I'm on the second page actually.

// Here we are, react, request, express,

// like we'll be using.

// Anytime you wanna do that and install one of them,

// you need to make sure

// you're installing the correct package name.

// All of this is based upon the names

// that packages are registered with

// and in this case it's express.

// In this case over here it's give-me-a-joke with dashes.

// So we have to copy that name correctly.

// So I'm gonna make a directory where I install this in

// and you'll see why in a moment.

// I'll call this Jokester.

// Okay, I'll see cd into jokester.

// Now I'm gonna run this command npm install

// and then give-me-dash-joke.

// I just wanna verify that was correct.

// Yes.

// Okay, so it's going to look for a package

// called give me a joke,

// registered in the npm registry and we can see it here.

// This is the package itself and I'm gonna hit enter.

// We're going to see some downloading stuff.

// It takes a little bit of time

// and then it's gonna give me a bit of an error here,

// right here, no such file or directory.

// Something, something, something packag.json.

// This is something we'll address in the next video,

// but what you'll see is that we actually have a new folder

// that has been added inside of this directory

// and it's called node modules.

// If I open it up here, whoa, take a look at all of this stuff

// that was added in here for me.

// All of this, apparently all of these things are dependencies

// for this one package called to give me a joke.

// So whenever you install something, an npm package,

// typically it depends on a bunch of other things or it can,

// but even if it doesn't, it's code, the actual,

// the core code for give-me-a-joke,

// or whatever we're installing.

// All of that is put inside of this special directory

// made for us called node modules.

// That's the name.

// You shouldn't make a folder called that.

// You shouldn't delete it.

// Well you can delete it,

// but you need to know how to get it back,

// which is something we'll see shortly

// and you shouldn't really touch it.

// It's just there for us

// and it contains a whole bunch of stuff.

// Also, we got this file called package-lock.json.

// This is something that you should not touch either,

// but this is a record of the contents

// of that node modules directory.

// That's a short way of putting it.

// Okay, so I'm gonna make a file in here.

// I'm gonna clear.

// Let's just make a file called index.js.

// And in that index.js file,

// I want to use this give-me-a-joke package.

// So I need to require it

// and we require packages just like we require anything else.

// But rather than giving a a path to a file,

// like we don't reference node module slash whatever,

// give-me-a-joke slash index or whatever the file is.

// We just reference the name of the package

// and it's going to look automatically

// in our node modules directory.

// So I'm gonna do const, we can call it give me a joke

// or just jokes equals require

// and then give-me-a-joke.

// All right, so now we should have this thing called jokes

// and we can just verify super simply.

// We can do like a console.dir jokes,

// run this file.

// Okay, so it looks like we have four different methods

// provided by whatever's exported from give-me-a-joke

// from this package

// and we'll do get what is CN joke?

// Let's take a look at the docs.

// Custom, oh Chuck Norris.

// Eh, not crazy about those jokes.

// Let's just do give me a random dad joke.

// So it's all, it appears callback based.

// That's fine.

// It is going to be asynchronous,

// I guess it's making API calls.

// So we'll call this jokes.

// Well we're not calling it,

// that's what we already named it,

// .getRandomDadJoke and here's our callback.

// Let me just close that down.

// All right, it should print out a joke.

// Let's see.

// Did you hear about the great new restaurant on the moon?

// The food is great, but there's just no atmosphere.

// A quick shout to all the sidewalks out there.

// Thank you for keeping me off the streets.

// All right, so we are successfully using

// our very first node package that we installed

// running npm install and then the name of the package.

// You may have noticed that the instructions

// also show you npm i, that's just an alias,

// a shorter version of npm install.

// It does the exact same thing.

// So let's use another package.

// Let's get this package going called colors.

// This is a package that helps us print colored text

// to the terminal, so we need to install it.

// Here we go, npm install.

// The name of this package is colors.

// Alrighty.

// So I'm gonna do that, npm I,

// just for some variety here, colors,

// and it's going to install.

// It's gonna complain about this thing again, package.json.

// We will cover that.

// But now if we look in node modules, I should have colors.

// Here it is, and it contains a bunch of files and folders,

// but that is, you know, that's the core of colors.

// It looks like it actually does not require on any,

// or does not depend on anything, which is interesting.

// A lot of packages do.

// But if it did have dependencies,

// those would all be installed too

// and added to this node modules directory.

// So let's see how we use it.

// I'd like to print out a joke in rainbow text.

// So if we scroll down on the docs here,

// we need to require it of course.

// So we'll start there.

// Const colors equals require,

// and then the name of the package, colors.

// Cool.

// Now what method do we want

// or what do we need to do here?

// So on a string, interesting.

// It looks like we can just do .rainbow, .green.

// Let's see if that does actually work.

// Let's try it out.

// So I'm gonna do console.log joke.rainbow.

// Let's try running this, node index.js.

// Hey, and it works.

// Our wedding was so beautiful, even the cake was in tears.

// Wow.

// I got an A on my origami assignment

// when I turned my paper into my teacher.

// Hmm, that sounds more like a,

// I got a A on my transfiguration wizarding assignment.

// I turned my paper into a teacher.

// Anyway, this is actually kind of a nifty approach.

// The way that this works, rainbow is

// it's been added to the string prototype, I believe.

// Strings have been extended

// and functionality has been added to strings.

// So we're not actually calling a method,

// but here's another option where we can call methods

// like green, colors.green, colors.rainbow.

// Anyway, we've got some functionality

// that we didn't really, well, we didn't write at all.

// We're just using.

// We're relying upon it.

// And it was super easy to do, npm i colors,

// npm i give-me-a-joke.

// Require both of them and then use them.

// All right, so that's our first example

// of using these packages coming from npm.

// But there are some other things we need to cover,

// including what this weird error that we kept getting was

// about package.json.

// And yeah, that's coming up next.

// We'll get more practice with these different packages

// and installing them and using them.

// Very, very useful stuff.

// This is something we'll do all the time,

// so get used to it.

// Bye.


