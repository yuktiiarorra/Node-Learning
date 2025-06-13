const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ cd node-group-chat-master/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/node-group-chat-master
// $ npm install
// npm WARN old lockfile
// npm WARN old lockfile The package-lock.json file was created with an old version of npm,
// npm WARN old lockfile so supplemental metadata must be fetched from the registry.
// npm WARN old lockfile
// npm WARN old lockfile This is a one-time fix-up, please be patient...
// npm WARN old lockfile
// npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)

// added 85 packages, and audited 86 packages in 4s

// 17 vulnerabilities (4 low, 2 moderate, 7 high, 4 critical)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// Instructor: Next up, I'm gonna show you

// a very important use case for the package.json file.

// We've talked about how the package.json file contains

// metadata, information about some project you're working on,

// and most importantly, it contains a list of dependencies

// or it can, if you keep it up to date

// and you, you know, you don't just like delete things

// and get rid of the dependencies, but it should be there.

// And this is nice for us,

// but it's especially nice for other people

// if they're ever going to be working on this code.

// If we're making a library, we're making a demo app,

// something, I'm gonna open source,

// and I expect people to work on

// or like the code from this course, we're going to have

// a larger code base that will be a node app

// with a bunch of dependencies.

// And what we normally don't do

// is include the node modules when I share code with you.

// So, node modules could have, you know,

// this is a pretty simple example here.

// There's just two modules in here,

// and they don't really have dependencies.

// But some of the other things that we'll work

// with like express as an example,

// if we look at this jokester,

// there's tons and tons of dependencies in here,

// and this could take up a lot of space.

// I don't know how large this is, it's probably not huge,

// but generally what we do is not share

// this part with anybody.

// We don't give node modules to other people.

// We don't include that if we're uploading code somewhere

// specifically for using a tool like GitHub and Git.

// This is just a demonstration of this principle.

// This is a tutorial that you might come across,

// and it includes a link to the GitHub code for this solution.

// So, in this GitHub repository, which it's all right,

// if you don't know much about Git or GitHub, here's the code.

// We can see there's a JavaScript file, some code,

// it's requiring some dependencies,

// but what I don't see is a node modules folder.

// I do see a package.json, and it says there

// are three dependencies, okay?

// So, I'm gonna copy, or I'm gonna download this code,

// just gonna click download zip for now,

// and then I'm gonna find that in my terminal.

// And then I just moved it into this folder,

// I unzipped it, again, we're not doing anything git specific

// and then I'm going to CD into that node group chat master.

// All right, and here's the code that I got.

// There is a package.json as we can see,

// I have everything here except node modules.

// And if I try and run this code with node index.js,

// I get an error because

// it's expecting a module called express.

// It's actually one we're about to talk about

// and spend a lot of time working with,

// but it can't find it, because I don't have it.

// I didn't install express.

// So, what I could do is manually install each

// of these three dependencies, NPM Install Express,

// but I also wanna make sure I'm using the correct versions.

// So, NPM install express,

// and then we need to specify a version,

// potentially NPM install EJS, NPM install socket.io.

// That's not too bad for three dependencies,

// but some projects might have dozens or hundreds.

// So we don't do that.

// Instead, if we're inside of a project or a directory

// with a package.json and it has dependencies listed,

// if I run the command NPM install or NPMI

// with nothing afterwards, just NPM install,

// it's going to look at the package.json

// and install all dependencies.

// Okay, so that didn't take too long,

// but now we have a node modules directory.

// Why you're not showing up over here.

// If I type LS here,

// you can see there is actually node modules.

// I don't know why vs code is not updating,

// but there is, I promise, a node modules directory.

// Here it is.

// We got all of this stuff just from running NPM install.

// All righty.

// So, now I can start my app up by running node index.js.

// Now, we haven't talked about servers and ports and all that,

// but I just started off a server

// and if I go to local host 80 80 here is our application.

// It's a little chat so I can talk,

// I'll just open this in another window too so you can see it.

// This is not the point of this video,

// but I'll do some chat here.

// Hello, and it shows up over here.

// This will be from Colt.

// Goodbye, and we have our live chat, very simple.

// That's not the point though.

// The point is running NPM install to go ahead

// and install dependencies based upon package.json files.

// So if you have code from me, a project folder,

// some demo code, some express app we're about to build,

// and there is a package.json,

// but no node modules, which is going to be pretty common

// because node modules can take up a lot of space.

// If that is the case, all you need

// to do is download the code,

// navigate into the folder using your command or command line,

// and then run NPM install with nothing afterwards.

// And then it's going to automatically look in that package,

// JSON, try and find dependencies, and then install them

// and make a node modules directory

// and put all that fun stuff in there.

// All right, so that is a really, really common workflow.

// Download some code NPM install inside of the route directory

// of that project where that package.json is,

// and then we can run our code.

// So, hopefully you can see the benefit

// of this package.json file.

// It's a record of what we've used and what our project uses.

// If you decide at some point,

// actually we don't use this thing anymore,

// delete it from your package.json.

// Otherwise, if other people have your code

// and they have that package.json,

// they're going to have that unnecessary dependency

// that will be installed when they run NPM install.

// Okay, I'm gonna stop, bye-bye.


