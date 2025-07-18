# NodeJS: -

- NodeJS is a runtime environment that execute JavaScript code outside of a browser, it uses V8 which is a JS engine, that also power google chrome.
- v8 is just a piece of C++ code, it doesn't mean c++ directly can understand your JS code, instead.
- before nodeJS, servers were build using languages like c, c++, php, java. Google created v8 engine which translate your JS code into machine code and v8 is written in C++ and that's how JS is used in backend.
- v8 can be embedded into any c++ aplication, this mean we can embedded (integrate) v8 engine into our c++ program to run and understand JS code. Just like NodeJS does, it is also a c++ application, it embeds v8 and execute JS code.

* How NodeJS run code: -

1. Parsing JS code:

   - The V8 engine has a JS parser also written in C++.
   - This parser read your JS code and breaks it into tokens.
   - Then it build an AST (Abstract Syntax Tree) - A tree structure that represent the meaning of your code.

2. Compiling to Machine Code: -
   - V8 engine uses a JIT compiler (Just-In-Time compiler) with components like ignition(interpreter) or TurboFan(optimizer) to convert JS code into machine code.
   - this AST is turned into bytecode by ignition.
   - Bytecode is a intermediate representation that is easier and fater to tun than raw source code.
   - this bytecode optimized and compiled into machine code just-in-time using turboFan.

**_ So, why C++ use to build V8 _**

- C++ is super fast and close to hardware language, perfect for building high performance engines.
- C++ written in assembly language.

**_ Why we need servers _**

- to serve a request
- for authentication and authorization
- to write business logic
- store sensitive infomartion and Database credential

# More about Async tasks: -

- NodeJS uses Node APIs and browser uses web APIs to handle async task, JS use a concurrency model called event loop to handle multiple tasks seemingly at the same time by delegating async task to the environment (Node or browser).
- Once done these task put in callback queue (a.k.a task queue) and the event loop is checks if the stack is empty and then moves callback to be executed.
- There is also a microtask queue (a.k.a job queue), this is for promices and have higher priority then callback queue. Microtasks are tasks that should run immediately after the current operation, before rendering or other tasks.


# IIFE (Immediately Invoked Function Expression)
- IIFE also known as self-executing anonymous function.
- IIFE is an idiom in which a JS function run as soon as defined.
- Arrow IIFE 
(()=>{

})();
- Standard IIFE
(function (){

})();
- so function declaration are fully hoisted and can be called before their declaraion.
- but in case of IIFE they are treated as function expression, function expression mean assig a function to a varibale, not fully hoisted that's why IIFE are called immediately.
* IIFE are used to run a piece of code immediately and IIFE are used to create a private scope, they variables inside IIFE don't polute global scope.

# Modules

- by default NodeJS support CJS(common JS) module system, which uses require and module.exports
- require is used to import whatever is assigned to module.exports from other modules.
- module.exports starts as an empty object and it is used to export functions, objects or variables from a modules.
- import and export are part of ESM (ECMAScript modules) also called ES modules and modern JS module system.
- to make nodeJS support import and export 
1. you either need to create a package.json file and set type="module" or
2. you add .mjs extension to your script files.

------------------------------------------------------------------------------------------------------------

# Difference b/w ESM and CJS:

- ES module system  are asynchronous enabling feature like top-level await while CJS module system are synchronous.
- ES module system is designed for modern JS, async loading and better browser support while CJS is older, NodeJS spacific.
- ES module system run in strict mode while CJS module system run in non-strict mode.

* In CJS when you import a directory (using (require("./folderName")) then nodeJs automatically looks for a index.js file inside that folder and import it.
* This allow you to organize multiple require statements or module export in separate file, and then centralize them in one index.js file. Later you can simply require the folder of importing each module individually.

# OS

- A processor (CPU) is a hardware chip on the motherboard that contain and coordinate cores. A core is a part of the processor, a unit inside the CPU that fetch, decode and execute intructions from the RAM (RAM is used to temporary store instructions and respective data for CPU).

* fetch - reads/get the instruction from the memory (RAM).
* decode - understand the instruction mean what the instruction want
* execute - perform the task

- Single core processor can't run multiple threads parallelly, it run threads by switching b/w them very fast (called context switching).
- Hyper-threading (technology of Intel) - this mean each core can run 2 threads.




