console.log("HELLO FROM ARGS FILE!")
console.log(process.argv)

// Instructor: So keep in mind

// that we are really approaching Node

// from a web development perspective.

// And even then, it's a pretty limited

// web development perspective.

// We could spend 30 or 40 hours

// at least just talking about web development with Node.

// Then there's a whole other universe of things we can do

// with Node that could be another 30, 40, 50 hour course

// on top of that.

// So I bring this up

// because I wanna be clear that we are not going

// to learn much about Node on its own.

// Just Node without things like Express,

// which we're going to learn shortly.

// So Node itself comes with quite a few different pieces.

// Now, if we go into the documentation,

// which to get here, go to the Node homepage, go to Docs,

// and then we need to select the version that we're on.

// And I'm using 12 point something.

// And if you ever are unsure,

// there's a couple ways of finding this.

// Whoops.

// You can do Node

// and just look at what version shows up there,

// or I believe you can do node-v.

// There we go, 12.18.3.

// One thing I didn't go into just for time sake

// and keeping things simple is managing Node versions.

// In the real world, you may want to have multiple versions

// of Node on one machine.

// You can use something called NVM, Node Version Manager.

// But again, we're not getting into that.

// Okay, so we want 12.X.

// I think I just clicked 11.

// Here we are.

// And as you can see,

// there are quite a few different topics

// and different things to learn about with Node.

// If we just take a look at one of them,

// the one we're gonna start with here is

// something called process.

// Process is an object that's available.

// It's in the global scope, anytime we're using Node.

// And it includes information, according to the docs,

// about and methods that provide control

// over the current Node js process.

// So this includes things like the version of Node,

// it has methods that allow you to get input

// and write to the standard output basically

// right to your console.

// What else is in here?

// Stuff about memory usage.

// Information about the current working directory

// that a user is running the script in.

// There's a whole bunch more.

// If we actually just head over to Node

// and I type process, it's always available.

// It's this big old object.

// So it has a bunch of methods, a bunch of properties.

// I mean, just as an example, I'll do process.version.

// Process.release is in here.

// This is the specific node release that I'm using.

// But then there are methods, things like Node.

// What am I doing?

// Node.

// process.current working directory, cwd.

// This is the path to where I am currently working

// or where I'm currently running Node.

// And this can be useful.

// I actually see an example.

// If I wanted to make a file relative to this path

// or make a folder or something like that.

// There's a whole bunch of other things, you know, in here.

// And the one I wanna focus on right now is something called,

// process.argv.

// And this is not gonna be terribly useful

// when we run this from the Node repl,

// but if I make a script, so I'm gonna get out of here.

// .exit or Control + D.

// I'm gonna make a new script.

// So I'm in the same directory.

// We'll call this touch args.js.

// Well, we won't call it touch args,

// but we'll touch args.js.

// And then in this file,

// I'm just going to do something very simple

// to start console log.

// "HELLO FROM ARGS FILE."

// All right.

// And I'm gonna execute this with Node, node args.js.

// Okay.

// Then I'm going to print inside of the same file,

// process.argv.

// All right, that's what we saw up here.

// Where was that?

// Right there.

// And it was an array that contained a string.

// We'll talk about what that is.

// But now if I run it again.

// This time, what do we see?

// Well, we see that same string at beginning

// and a second value in this array.

// The path to the file, args.js.

// All right, so what is this?

// Let's go to the docs here, process.argv.

// It returns an array containing the command line arguments

// passed when Node or the Node process was launched.

// The first element will be process.execPath.

// That's where the node executable is, I believe.

// Yes.

// Then the second value is always going

// to be the file that we're executing.

// Now, any remaining elements

// will be additional command line arguments.

// So I can pass in arguments to a script, not to a function,

// but it's a similar idea.

// I can pass in arguments to a script,

// just like I would write,

// just as an example here, ls -a.

// Or make directory.

// And then I pass in some argument to make directory.

// That's not Node specific, that has nothing to do with Node.

// But I can make my own Node scripts like I have here args.js

// and then pass arguments like puppies and chickens.

// And I don't know, hello.

// Separate them by spaces

// and they're all added to this argv array.

// So the first two things are always going to be,

// well, they're not guaranteed to be the same,

// but they're always going to be the executable path

// and then the path to the file that you're actually running.

// So we can ignore those most of the time.

// But if we look after those first two elements,

// we have arguments that have been passed in.

// So I could make a really simple script.

// This is gonna be very stupid.

// We'll call this greeter.

// Okay, and greeter, let me just touch that here,

// is just going to take

// any number of arguments that we pass in.

// So it would be like, you know, node greeter.js,

// and then colt and rusty.

// And we're just gonna say hi

// to each argument that you pass in.

// So I'm gonna open up that file

// and then in here we're going to look at process.

// Not that, .argv,

// but we don't care about those first two elements.

// So what I'm going to do is slice after

// or at the index of two onwards.

// We don't want index of zero or one.

// So I'm gonna call this args

// and then I'll just loop over args.

// So, for(let arg of args).

// We'll just greet each one.

// We'll console that log.

// And let's do, "Hi, there,"

// and I'll do a string template literal,

// and then we'll put that arg right there.

// So let's see if that works.

// Greeter.js, colt rusty.

// "Hi there, colt.

// Hi there, rusty."

// All right, so I could pass in as many people as I want.

// Tammy and Chicken Face.

// "Hi there, Colt, Hi there, Rusty, Hi there, Tammy,

// Hi there, Chickenface."

// So this is all silly, of course,

// and we're not really going to be doing much

// with argv at all.

// I'm just showing it to you as a taste of Node

// because remember, people use Node

// to create very complicated command line scripts

// and tools for the command line that have nothing to do

// with servers and web development.

// And this is just one of the tiny pieces that you can use

// to get arguments from the command line.

// So the first two things we always ignore, well,

// I shouldn't say always, but if we're looking

// to see custom arguments that have been passed in,

// we ignore those first two elements in argv.

// All right, so just a quick intro to this process object.

// It's always available in Node, it's in the global scope,

// and it contains a whole lot of stuff,

// most of which we're never going to touch.

// Next up, I am gonna show you one other piece of Node

// that has nothing to do with web development and servers,

// just as an end cap to all of this section,

// but it's just a little taste, so that's coming up.


// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node
// Welcome to Node.js v18.16.0.
// Type ".help" for more information.
// > process
// process {
//   version: 'v18.16.0',
//   versions: {
//     node: '18.16.0',
//     acorn: '8.8.2',
//     ada: '1.0.4',
//     ares: '1.19.0',
//     brotli: '1.0.9',
//     cldr: '42.0',
//     icu: '72.1',
//     llhttp: '6.0.10',
//     modules: '108',
//     napi: '8',
//     nghttp2: '1.52.0',
//     nghttp3: '0.7.0',
//     ngtcp2: '0.8.1',
//     openssl: '3.0.8+quic',
//     simdutf: '3.2.2',
//     tz: '2022g',
//     undici: '5.21.0',
//     unicode: '15.0',
//     uv: '1.44.2',
//     uvwasi: '0.0.15',
//     v8: '10.2.154.26-node.26',
//     zlib: '1.2.13'
//   },
//   arch: 'x64',
//   platform: 'win32',
//   release: {
//     name: 'node',
//     lts: 'Hydrogen',
//     sourceUrl: 'https://nodejs.org/download/release/v18.16.0/node-v18.16.0.tar.g
// z',
//     headersUrl: 'https://nodejs.org/download/release/v18.16.0/node-v18.16.0-head
// ers.tar.gz',
//     libUrl: 'https://nodejs.org/download/release/v18.16.0/win-x64/node.lib'
//   },
//   _rawDebug: [Function: _rawDebug],
//   moduleLoadList: [
//     'Internal Binding builtins',
//     'Internal Binding errors',
//     'Internal Binding util',
//     'NativeModule internal/errors',
//     'Internal Binding config',
//     'Internal Binding timers',
//     'Internal Binding async_wrap',
//     'Internal Binding constants',
//     'Internal Binding types',
//     'NativeModule internal/util',
//     'NativeModule internal/util/types',
//     'NativeModule internal/validators',
//     'NativeModule internal/promise_hooks',
//     'Internal Binding task_queue',
//     'Internal Binding symbols',
//     'NativeModule internal/async_hooks',
//     'NativeModule internal/linkedlist',
//     'NativeModule internal/priority_queue',
//     'NativeModule internal/assert',
//     'Internal Binding icu',
//     'NativeModule internal/util/inspect',
//     'NativeModule internal/util/debuglog',
//     'NativeModule internal/timers',
//     'NativeModule events',
//     'Internal Binding buffer',
//     'Internal Binding string_decoder',
//     'NativeModule internal/buffer',
//     'Internal Binding blob',
//     'NativeModule internal/encoding',
//     'Internal Binding messaging',
//     'NativeModule internal/worker/js_transferable',
//     'NativeModule internal/constants',
//     'NativeModule internal/blob',
//     'NativeModule internal/file',
//     'NativeModule buffer',
//     'NativeModule internal/modules/esm/handle_process_exit',
//     'Internal Binding process_methods',
//     'NativeModule internal/process/per_thread',
//     'Internal Binding credentials',
//     'NativeModule internal/process/promises',
//     'NativeModule internal/fixed_queue',
//     'NativeModule async_hooks',
//     'NativeModule internal/process/task_queues',
//     'Internal Binding worker',
//     'NativeModule internal/util/parse_args/utils',
//     'NativeModule internal/util/parse_args/parse_args',
//     'NativeModule internal/mime',
//     'NativeModule util',
//     'Internal Binding performance',
//     'NativeModule internal/perf/utils',
//     'NativeModule internal/event_target',
//     'NativeModule timers',
//     'NativeModule internal/abort_controller',
//     'NativeModule internal/streams/utils',
//     'NativeModule internal/streams/end-of-stream',
//     'NativeModule internal/streams/destroy',
//     'NativeModule internal/streams/legacy',
//     'NativeModule internal/streams/add-abort-signal',
//     'NativeModule internal/streams/buffer_list',
//     'NativeModule internal/streams/state',
//     'NativeModule string_decoder',
//     'NativeModule internal/streams/from',
//     'NativeModule internal/streams/readable',
//     'NativeModule internal/streams/writable',
//     'NativeModule internal/streams/duplex',
//     'NativeModule internal/streams/pipeline',
//     'NativeModule internal/streams/compose',
//     'NativeModule internal/streams/operators',
//     'NativeModule stream/promises',
//     'NativeModule internal/streams/transform',
//     'NativeModule internal/streams/passthrough',
//     'NativeModule stream',
//     'NativeModule internal/worker/io',
//     'NativeModule internal/structured_clone',
//     'Internal Binding trace_events',
//     'NativeModule path',
//     'NativeModule internal/process/execution',
//     'NativeModule internal/process/warning',
//     'Internal Binding fs',
//     'NativeModule internal/querystring',
//     'NativeModule querystring',
//     'Internal Binding url',
//     'NativeModule internal/url',
//     'NativeModule internal/fs/utils',
//     'Internal Binding fs_dir',
//     'NativeModule internal/fs/dir',
//     'Internal Binding fs_event_wrap',
//     'Internal Binding uv',
//     'NativeModule internal/fs/watchers',
//     'NativeModule internal/fs/read_file_context',
//     'NativeModule fs',
//     'Internal Binding serdes',
//     'Internal Binding mksnapshot',
//     'NativeModule internal/v8/startup_snapshot',
//     'Internal Binding profiler',
//     'Internal Binding heap_utils',
//     'Internal Binding stream_wrap',
//     'NativeModule internal/stream_base_commons',
//     'NativeModule internal/heap_utils',
//     'Internal Binding options',
//     ... 113 more items
//   ],
//   binding: [Function: binding],
//   _linkedBinding: [Function: _linkedBinding],
//   _events: [Object: null prototype] {
//     newListener: [ [Function: startListeningIfSignal], [Function (anonymous)] ],
//     removeListener: [ [Function: stopListeningIfSignal], [Function (anonymous)]
// ],
//     warning: [Function: onWarning],
//     SIGWINCH: [Function: refreshStdoutOnSigWinch]
//   },
//   _eventsCount: 4,
//   _maxListeners: undefined,
//   domain: [Getter/Setter],
//   _exiting: [Getter/Setter],
//   config: [Getter/Setter],
//   dlopen: [Function: dlopen],
//   uptime: [Function: uptime],
//   _getActiveRequests: [Function: _getActiveRequests],
//   _getActiveHandles: [Function: _getActiveHandles],
//   getActiveResourcesInfo: [Function: getActiveResourcesInfo],
//   reallyExit: [Function: reallyExit],
//   _kill: [Function: _kill],
//   cpuUsage: [Function: cpuUsage],
//   resourceUsage: [Function: resourceUsage],
//   memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
//   constrainedMemory: [Function: constrainedMemory],
//   kill: [Function: kill],
//   exit: [Function: exit],
//   hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
//   openStdin: [Function (anonymous)],
//   allowedNodeEnvironmentFlags: [Getter/Setter],
//   assert: [Function: deprecated],
//   features: {
//     inspector: true,
//     debug: false,
//     uv: true,
//     ipv6: true,
//     tls_alpn: true,
//     tls_sni: true,
//     tls_ocsp: true,
//     tls: true,
//     cached_builtins: [Getter]
//   },
//   _fatalException: [Function (anonymous)],
//   setUncaughtExceptionCaptureCallback: [Function (anonymous)],
//   hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCal
// lback],
//   emitWarning: [Function: emitWarning],
//   nextTick: [Function: nextTick],
//   _tickCallback: [Function: runNextTicks],
//   _debugProcess: [Function: _debugProcess],
//   _debugEnd: [Function: _debugEnd],
//   _startProfilerIdleNotifier: [Function (anonymous)],
//   _stopProfilerIdleNotifier: [Function (anonymous)],
//   stdout: [Getter],
//   stdin: [Getter],
//   stderr: [Getter],
//   abort: [Function: abort],
//   umask: [Function: wrappedUmask],
//   chdir: [Function (anonymous)],
//   cwd: [Function: wrappedCwd],
//   env: {
//     ACLOCAL_PATH: '/mingw64/share/aclocal:/usr/share/aclocal',
//     ALLUSERSPROFILE: 'C:\\ProgramData',
//     APPDATA: 'C:\\Users\\kunj5\\AppData\\Roaming',
//     'asl.log': 'Destination=file',
//     COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
//     'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//     CommonProgramW6432: 'C:\\Program Files\\Common Files',
//     COMPUTERNAME: 'DESKTOP-6GU8P5E',
//     COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
//     CONFIG_SITE: '/etc/config.site',
//     DISPLAY: 'needs-to-be-defined',
//     DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//     EFC_9196: '1',
//     EXEPATH: 'C:\\Program Files\\Git',
//     HOME: 'C:\\Users\\kunj5',
//     HOMEDRIVE: 'C:',
//     HOMEPATH: '\\Users\\kunj5',
//     HOSTNAME: 'DESKTOP-6GU8P5E',
//     INFOPATH: '/mingw64/local/info:/mingw64/share/info:/usr/local/info:/usr/shar
// e/info:/usr/info:/share/info',
//     JAVA_HOME: 'C:\\Users\\kunj5\\AppData\\Local\\Programs\\Eclipse Adoptium\\jd
// k-17.0.7.7-hotspot\\',
//     LC_CTYPE: 'en_US.UTF-8',
//     LOCALAPPDATA: 'C:\\Users\\kunj5\\AppData\\Local',
//     LOGONSERVER: '\\\\DESKTOP-6GU8P5E',
//     MANPATH: '/mingw64/local/man:/mingw64/share/man:/usr/local/man:/usr/share/ma
// n:/usr/man:/share/man',
//     MINGW_CHOST: 'x86_64-w64-mingw32',
//     MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
//     MINGW_PREFIX: '/mingw64',
//     MSYSTEM: 'MINGW64',
//     MSYSTEM_CARCH: 'x86_64',
//     MSYSTEM_CHOST: 'x86_64-w64-mingw32',
//     MSYSTEM_PREFIX: '/mingw64',
//     NUMBER_OF_PROCESSORS: '8',
//     OLDPWD: '/c/Users/kunj5/OneDRive/YUKTI PROGRams/Node',
//     OneDrive: 'C:\\Users\\kunj5\\OneDrive',
//     OneDriveConsumer: 'C:\\Users\\kunj5\\OneDrive',
//     ORIGINAL_PATH: 'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\
// \usr\\bin;C:\\Users\\kunj5\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\S
// ystem32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System
// 32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs;C:\\Program Fi
// les\\dotnet;C:\\Users\\kunj5\\AppData\\Local\\Programs\\Python\\Python312\\Scrip
// ts;C:\\Users\\kunj5\\AppData\\Local\\Programs\\Python\\Python312;C:\\Users\\kunj
// 5\\AppData\\Local\\Programs\\Python\\Launcher;C:\\Users\\kunj5\\AppData\\Local\\
// Programs\\Eclipse Adoptium\\jdk-17.0.7.7-hotspot\\bin;C:\\Users\\kunj5\\AppData\
// \Local\\Microsoft\\WindowsApps;C:\\Users\\kunj5\\AppData\\Local\\Programs\\Micro
// soft VS Code\\bin;C:\\MinGW\\bin;C:\\Users\\kunj5\\AppData\\Roaming\\npm;C:\\Pro
// gram Files\\heroku\\bin',
//     ORIGINAL_TEMP: '/tmp',
//     ORIGINAL_TMP: '/tmp',
//     OS: 'Windows_NT',
//     PATH: 'C:\\Users\\kunj5\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Progra
// m Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files
// \\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr
// \\bin;C:\\Users\\kunj5\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\Syste
// m32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\
// OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs;C:\\Program Files\
// \dotnet;C:\\Users\\kunj5\\AppData\\Local\\Programs\\Python\\Python312\\Scripts;C
// :\\Users\\kunj5\\AppData\\Local\\Programs\\Python\\Python312;C:\\Users\\kunj5\\A
// ppData\\Local\\Programs\\Python\\Launcher;C:\\Users\\kunj5\\AppData\\Local\\Prog
// rams\\Eclipse Adoptium\\jdk-17.0.7.7-hotspot\\bin;C:\\Users\\kunj5\\AppData\\Loc
// al\\Microsoft\\WindowsApps;C:\\Users\\kunj5\\AppData\\Local\\Programs\\Microsoft
//  VS Code\\bin;C:\\MinGW\\bin;C:\\Users\\kunj5\\AppData\\Roaming\\npm;C:\\Program
//  Files\\heroku\\bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Fi
// les\\Git\\usr\\bin\\core_perl',
//     PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
//     PKG_CONFIG_PATH: '/mingw64/lib/pkgconfig:/mingw64/share/pkgconfig',
//     PKG_CONFIG_SYSTEM_INCLUDE_PATH: '/mingw64/include',
//     PKG_CONFIG_SYSTEM_LIBRARY_PATH: '/mingw64/lib',
//     PLINK_PROTOCOL: 'ssh',
//     PROCESSOR_ARCHITECTURE: 'AMD64',
//     PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 142 Stepping 12, GenuineIntel'
// ,
//     PROCESSOR_LEVEL: '6',
//     PROCESSOR_REVISION: '8e0c',
//     ProgramData: 'C:\\ProgramData',
//     PROGRAMFILES: 'C:\\Program Files',
//     'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//     ProgramW6432: 'C:\\Program Files',
//     PS1: '\\[\\033]0;$TITLEPREFIX:$PWD\\007\\]\\n\\[\\033[32m\\]\\u@\\h \\[\\033
// [35m\\]$MSYSTEM \\[\\033[33m\\]\\w\\[\\033[36m\\]`__git_ps1`\\[\\033[0m\\]\\n$ '
// ,
//     PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\sy
// stem32\\WindowsPowerShell\\v1.0\\Modules',
//     PUBLIC: 'C:\\Users\\Public',
//     PWD: '/c/Users/kunj5/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE',
//     SESSIONNAME: 'Console',
//     SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
//     SHLVL: '1',
//     SSH_ASKPASS: '/mingw64/bin/git-askpass.exe',
//     SYSTEMDRIVE: 'C:',
//     SYSTEMROOT: 'C:\\WINDOWS',
//     TEMP: 'C:\\Users\\kunj5\\AppData\\Local\\Temp',
//     TERM_PROGRAM: 'mintty',
//     TERM_PROGRAM_VERSION: '3.6.3',
//     TMP: 'C:\\Users\\kunj5\\AppData\\Local\\Temp',
//     TMPDIR: 'C:\\Users\\kunj5\\AppData\\Local\\Temp',
//     USERDOMAIN: 'DESKTOP-6GU8P5E',
//     USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-6GU8P5E',
//     USERNAME: 'kunj5',
//     USERPROFILE: 'C:\\Users\\kunj5',
//     WINDIR: 'C:\\WINDOWS',
//     ZES_ENABLE_SYSMAN: '1',
//     _: '/usr/bin/winpty'
//   },
//   title: ' ',
//   argv: [ 'C:\\Program Files\\nodejs\\node.exe' ],
//   execArgv: [],
//   pid: 9752,
//   ppid: 16136,
//   execPath: 'C:\\Program Files\\nodejs\\node.exe',
//   debugPort: 9229,
//   argv0: 'C:/Program Files/nodejs/node.exe',
//   exitCode: undefined,
//   _preload_modules: [],
//   report: [Getter],
//   setSourceMapsEnabled: [Function: setSourceMapsEnabled],
//   [Symbol(kCapture)]: false
// }
// > process.version
// 'v18.16.0'
// > process.release
// {
//   name: 'node',
//   lts: 'Hydrogen',
//   sourceUrl: 'https://nodejs.org/download/release/v18.16.0/node-v18.16.0.tar.gz'
// ,
//   headersUrl: 'https://nodejs.org/download/release/v18.16.0/node-v18.16.0-header
// s.tar.gz',
//   libUrl: 'https://nodejs.org/download/release/v18.16.0/win-x64/node.lib'
// }
// > process.cwd()
// 'C:\\Users\\kunj5\\OneDRive\\YUKTI PROGRams\\Node\\Node_Intro_CODE'
// > process.argv
// [ 'C:\\Program Files\\nodejs\\node.exe' ]
// > .exit

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ ls
// Introduction  REPL  args.js  boilerplate.js  firstScript.js  greeter.js

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ touch args.js

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node args.js
// HELLO FROM ARGS FILE!
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\kunj5\\OneDRive\\YUKTI PROGRams\\Node\\Node_Intro_CODE\\args.js'
// ]

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node args.js puppies chicken hello
// HELLO FROM ARGS FILE!
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\kunj5\\OneDRive\\YUKTI PROGRams\\Node\\Node_Intro_CODE\\args.js',
//   'puppies',
//   'chicken',
//   'hello'
// ]

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ touch greeter.js

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Node_Intro_CODE
// $ node greeter.js colt rusty
// Hi there, colt
// Hi there, rusty

