// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
                                        // // ReferenceError: fs is not defined
                                        // //     at Object.<anonymous> ←[90m(C:\Users\kunj5\OneDRive\YUKTI PROGRams\Node\Node
                                        // // _Intro_CODE\←[39mboilerplate.js:4:1←[90m)←[39m
                                        // // ←[90m    at Module._compile (node:internal/modules/cjs/loader:1254:14)←[39m
                                        // // ←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)←[3
                                        // // 9m
                                        // // ←[90m    at Module.load (node:internal/modules/cjs/loader:1117:32)←[39m
                                        // // ←[90m    at Module._load (node:internal/modules/cjs/loader:958:12)←[39m
                                        // // ←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/r
                                        // // un_main:81:12)←[39m
                                        // // ←[90m    at node:internal/main/run_main_module:23:47←[39m
                                        // // Node.js v18.16.0

const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

                                    // // kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
                                    // // $ node boilerplate.js
                                    // // I COME AFTER MKDIR!!
                                    // // IN THE CALLBACK!!
// console.log("I COME AFTER MKDIR!!")
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
// console.log("I COME AFTER MKDIR!!")

// fs.mkdirSync('Cats');
// console.log("I COME AFTER MKDIR!!")

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}

                                    // // kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
                                    // // $ node boilerplate.js


                                    // // kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
                                    // // $ cd ..

                                    // // kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node
                                    // // $ node Node_Intro_CODE/boilerplate.js BoilerplateTesting

                                    // // kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node
                                    // // $ ls
                                    // // BoilerplateTesting/  Node_Intro_CODE/

// Lecturer: So I mentioned that Node comes

// with a decent amount of built-in methods,

// different properties.

// So there are things, if we look at the docs,

// that have to do with cryptography, for example.

// We're not gonna go into this,

// but there are methods that exist here to help you create

// or to encrypt data and decrypt data.

// We have things like HTTP.

// These are methods that are built in

// that help us make HTTP requests, as you can see here.

// Here's an example, so this is built in to Node,

// and again these don't exist in the browser.

// Now, the one that I wanna show you in this video,

// just as a little taste, is called FS.

// It's the file system,

// and it's something called a module.

// We'll be learning more about that in the next unit,

// next section, whatever we call them,

// and this module has to do with the file system,

// so there's tons of methods on here to read files,

// to create files, to add to files, to create new files.

// I already said that, didn't I?

// To create new directories, to open and close files.

// There's just a lot of stuff in here, change permissions.

// So we're not gonna cover more than like,

// two or three of these methods.

// So I'm thinking we're gonna make a little Node script

// that when we run it,

// it's going to create our standard HTML,

// CSS, and JavaScript files in a new folder.

// So for example, I would run it like this,

// node, and then what will the file name be?

// Maybe, you know, I don't know, boilerplate,

// boilerplate.js, and then the name of a folder

// we want it to make for us, like App or Project.

// And then when we run that,

// I want it to make a project folder for us,

// and then inside, I want it to make an index HTML,

// a CSS, and a JavaScript file, just blank files for me.

// That's something we do pretty commonly, right?

// We make a new folder and we put our basic three files

// in there, whatever we name them, but I'll go with this.

// So if I wanted to make a little script to help me do that,

// it's still not gonna be all that helpful,

// but just as a demo, I need to be able to make a folder.

// I need to be able to make files

// and put them inside that folder.

// So I'm gonna create a file here,

// I'll call it boilerplate.js,

// and then I'll open that up over here,

// and there are quite a few different methods that we can use,

// but let's start by making a new folder.

// So the method I'm looking for is mkdir,

// but you'll notice actually

// that there's another method called mkdirSync,

// or we have open, or opendir, opendirSync.

// We have things like readdir, readdirSync.

// So I dunno why I'm saying deer.

// It's directory, so should be read dir, make dir,

// but I always just say deer, I don't know why.

// Anyway, what is this Sync thing?

// Well, if we read a bit about it, I think they show it here.

// Yes, "All file system operations have synchronous

// and asynchronous forms.

// The async forms always take a completion callback

// as its last argument.

// Exceptions that occur

// using synchronous operations are thrown immediately

// and must be handled with try and catch,

// or may be handled with try_catch."

// So what it's saying here is

// that there are two different ways of reading files

// or making folders or deleting files and folders,

// or whatever the methods are.

// There's the async version

// and then there's the synchronous version.

// So remember that synchronous,

// if we use a synchronous version,

// it means do this thing and wait until it finishes

// before you move on to the next thing.

// So it's gonna block,

// I'm pretty sure they talk about this somewhere here.

// Here we go, "The synchronous versions will block

// the entire process until they complete,

// halting all connections."

// So it's going to stop any other code from running,

// but it is a lot easier to follow logically.

// We don't have to deal with callbacks.

// So that's what I'm gonna use for now,

// the synchronous versions,

// and again, this is really just a taste.

// We're not trying to be experts

// on the file system module here.

// So we're going to use fs.makdirSync.

// Here it is, all right, so here's the documentation,

// and on the docs for the synchronous version to the method,

// it tells you to look at the asynchronous version.

// Okay, so it explains, here's what we need to do.

// fs.mkdir, you know, we can just copy this

// if we wanted to try it,

// but we're gonna run into a problem immediately.

// If I try running this,

// node boilerplate, it's gonna complain, FS is not defined.

// Now, this is the the first thing that we need to fix,

// which is that FS is not a thing by default.

// Unlike process for example,

// which is always in scope if we're using Node,

// FS is a module that we need to actually require,

// and this is something we haven't seen before.

// We don't require files and folders and scripts

// and all of that on client side

// or when we're writing client side JavaScript,

// but this is something we'll learn more

// about in the next section.

// But basically what we need to do,

// you can find examples of this

// if we just go to the very beginning of the docs.

// I hate how they organize this, just one massive page,

// but we need to require this module, so require('fs'),

// and then we can save that in any sort

// of variable if we want, any name,

// but usually we do FS, so require('fs').

// So we don't need to download FS or anything.

// It's already here, it's just not in scope,

// it's not available by default.

// We have to go tell Node we want to use it.

// So now this should work.

// I'll zoom out here, maybe I'll make this a bit larger here.

// And I don't think I wanna do that.

// I think I'm just gonna do a console.log(fs)

// and verify that it does work.

// Okay, so you can see we do have this FS object here

// with a bunch of different methods,

// appendFile, appendFileSync, access, accessSync,

// chain or chmod, chown, chownSync, all that stuff. (chuckles)

// So now let's take a look at this mkdir, mkdir method,

// and this is the asynchronous version, right?

// So if I put something after here,

// console.log("I COME AFTER MKDIR!!"),

// and then I'll make a directory in here called,

// how about just 'Dog', 'Dogs', okay?

// And then if there's an error, we throw that error.

// So this callback will be called upon completion,

// so I can do something like console.log("AFTER"),

// or how about ("IN THE CALLBACK") let's do that,

// and I'll write this

// as ("I COME AFTER MKDIR IN THE FILE!!")

// All right, so I'm gonna execute this now.

// Oh, I shouldn't have console.logged that,

// but you'll see ("I COME AFTER MKDIR IN THE FILE!!"),

// so this line printed out first

// because this is asynchronous.

// And then when that make directory finished,

// when the directory was actually created,

// then this callback ran.

// So we should verify too that the callback

// or that the directory was created,

// and there it is, Dogs.

// So it's empty, I'm gonna just delete it,

// rmdir Dogs, or I could do rm-rf.

// Okay, so that's the asynchronous version.

// Now here is the synchronous version.

// Can just do this, fs.mkdirSync,

// and then I'll just do ('Cats') this time,

// and I don't need to pass in a callback.

// We also don't really need to care

// about this argument here with the options.

// We can pass it, I'm just gonna ignore that.

// So if I do mkdirSync for now of ('Cats'),

// I'll say I ("I COME AFTER MKDIR IN THE FILE!!").

// This should do the exact same thing,

// it should make us a new folder called 'Cats' in this case,

// and you can see it did do that, it made Cats.

// We don't really have proof, right?

// That it was synchronous here, but just know that it is,

// and it's easier to follow sometimes

// if we're just doing a couple of things in a row and we,

// like for example, if I needed this directory

// to be definitely created before we add something into it,

// then the synchronous version is easier

// 'cause I can just create the folder

// and then add stuff into it,

// and we'll be guaranteed that this code runs after this,

// whereas if I just had two of these in a row,

// this one might finish first.

// They're doing the same thing,

// but let's say I'm making a file,

// this could potentially run before that,

// and so then it's just a nightmare.

// Anyway, again, don't feel too bogged down here.

// We're just barely scratching the surface.

// So let's make that directory, but let's not call it Cat.

// Let's actually accept an argument, right?

// When you run the script, so that's going to be argv.

// So we want process.argv of, and remember we want index

// of two if we want basically the first thing

// that you type after, so node boilerplate,

// and then you know, Project, let's say that's the name

// of the folder I want you to create for me

// or I want it to create for me.

// So Project1, that is the third argument.

// First one is the executable path,

// the second one is the path to the file,

// and then the third one, an index of two in argv,

// as we saw previously, is the first argument passed in.

// Okay, so I'm gonna save that to a variable,

// const, you know, folderName = that,

// and then we could provide a default.

// How about, you know, if that's undefined,

// maybe just 'Project', okay?

// And then we're going to make a folder with that name,

// folderName, just like that, so why don't we begin there,

// and just see if that's working for us?

// So I'm going to execute this with a folder name of Chickens,

// (keys clicking)

// and it made me an empty Chickens folder.

// If I just take a look in there, it's empty.

// If I try running it with nothing,

// it should move me a folder called Projects hopefully,

// or Project, and there it is.

// Okay, so now what I wanna do is to create those three files

// inside of this folder, whatever that folder was,

// and to do that, we have a method to make a file for us.

// There's quite a few options,

// but we're gonna go with writeFile, where are you?

// Here we go, writeFile,

// writeFileSync is really what we want.

// It's going to write data to a file,

// replacing the file if it already exists,

// meaning it will create the file for us if it does not exist.

// So for now, we're not gonna bother

// with putting anything in the file.

// We'll just make three empty files.

// So we just need to provide the file name.

// Alrighty, so we're gonna do fs.writeFileSync,

// and then the file name,

// I don't want just do index.html.

// What I really want is to go inside of that directory,

// so we can use a string template literal, ${},

// and then {folderName}/index.html,

// and then I'll just repeat that.

// And we don't really need this to be synchronous,

// but meh, that's fine.

// Here, we'll do app.js or something

// if that's the boilerplate we want,

// and then app.css, or styles.css,

// or whatever we wanna call this,

// so our three basic files, and they go inside

// of whatever that folder was that we just created.

// Now, we don't have any error handling.

// There are, definitely there's potential

// that things go wrong, so we should add a try and a catch,

// but let's just see if this works anyway for now.

// All right, so I'm gonna try,

// why don't I just remove these directories first,

// Cats, Chickens, Project.

// All right, and now I'm gonna run it again,

// node and then boilerplate, and I want this to go with,

// how about, or go inside of Portfolio.

// Okay, so let's take a look at Portfolio, and check it out,

// our three files were made for us inside of that folder.

// So that's all I'm really gonna do here is just, (chuckles)

// I just wanted to show you that.

// There is one thing to be aware of,

// which is that if I go out of here

// and I run this script from a different location,

// for example, I can run, you know,

// this boilerplate.js from out here,

// it's just located inside of a different directory.

// So if I do node and then the folder,

// which is 25_Node_Intro and then boilerplate,

// and then I want it to be called LizardProject

// and I hit Enter, I'm just gonna clear that,

// my LizardProject file or the folder was made

// in this directory right here.

// So if I cd into LizardProject, there are my files.

// So what I'm trying to show you is that it was made

// where I ran the script from, where I was actually located,

// not where the script itself lives.

// Anyway, we should add a try and a catch in here

// just in case something goes wrong,

// because there's no error callback or anything like that

// like we have for the asynchronous forms,

// which are definitely important to know that they exist,

// especially if you're doing any sort

// of intensive stuff around files.

// Callbacks in general are are pretty common in Node,

// but here, just for simplicity's sake,

// we're using the synchronous versions.

// So we'll have our try and then our catch

// if there's an error, and if there is an error,

// you know, we'll be pretty boring,

// console.log("SOMETHING WENT WRONG!!!"),

// and then we'll print the error as well.

// Okay, so I think that's pretty much it

// for the intro to this FS module.

// Remember, we have to require it

// in order for any of this to work.

// Save that in some variable name, it's up to you.

// You need to be able to remember it (chuckles)

// and reference it whenever you're using it.

// When we do this, we get an object in that variable.

// It has a bunch of methods, quite a few methods,

// as you can see here, a lot,

// and we just saw two of them.

// I guess technically, we saw four

// because we saw the synchronous versions

// and the asynchronous versions

// to make a directory and to write files.

// So we could also use this to add contents to the file,

// So you could modify this if you wanted it to, you know,

// add the boilerplate HTML content

// like the standard doc type and the head

// and the body and all of that,

// and you could even have it so that it linked to the app.js

// as a script tag and a a link tag for your CSS,

// but we're not doing that, but you could.

// If you provide another argument here,

// that content will be written to the file,

// it will create a file and add content.

// So there's a lot more that we could cover,

// but remember, our goal is to get on and to move on

// to web development in Express,

// and creating servers and all of that.

// So this is just a taste of Node on its own, Peer Node,

// and some people love doing this stuff.

// Other people, in my experience,

// some students don't care for it

// and just wanna get onto to web dev,

// so that's what we're going to do.

// It's a whole big world out there,

// and I think this video has been excruciatingly long.

// I'm sorry about that, especially for a video (chuckling)

// where I said multiple times it's not that important,

// but I feel like if I just don't even mention any

// of this stuff, people yell at me, so I'm mentioning it.

// Okay, goodbye, I'll see you soon.


