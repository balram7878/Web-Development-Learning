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

---

# Difference b/w ESM and CJS:

- ES module system are asynchronous enabling feature like top-level await while CJS module system are synchronous.
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

---

- Node.JS is a runtime environment that execute your JS code outside the browser.
- It uses V8 JS engine to convert your JS code to machine code and execute it, it is written in C++, it does nothing else except running JS code.
- Global object provide quick or easy access to commonly used functions without needing to import them, e.g. console, setTimeout, setInterval, process etc.

* It acts like a container or environment that provide access to core functionalities without having to import them manually.
* These functions are provided are Node APIs, not by the JS language itself.

- libuv is a C/C++ library that handle async task (timer, I/O, event loop, thread pool).

* Node API uses libuv internally to provide non-blocking feature to your JS.

- Node APIs a.k.a C++ bindings, are provide implementation for addtional features like fs, http

- Only one Global Execution Context (GEC) is created during the entire execution of a program, and it remains active until the program finishes.
- Each time a function is called, a new Function Execution Context (FEC) is created, which also goes through two phases:

- Memory Allocation Phase
- Code Execution Phase

* During the Memory Allocation Phase:
* Variables declared with var are hoisted and initialized with undefined.
* Variables declared with let and const are hoisted but remain uninitialized, and are placed in the Temporal Dead Zone (TDZ).
* Function declarations are fully hoisted along with their definitions.

---

# Servers

- A server can be either hardware or software.
- it is a system that listens for incoming request and respond to them.
- web servers are powerful physical machines usually located in data centers.
- A software server (Node.js express, Apache, python flask) is a program that run on hardware server.

> Why you can't rely on your local machine as a server

- It's fine for local testing or very few users.
- But it is not suitable for large scale application.
- It can't handles high traffic or scaled infinitely.
- your machine must stay online 24\*7.

> Hosting on cloud services

- Cloud providers like AWS (Amazon web service), Azure, Heroku, vercel etc. are offer powerful server machines (hardware). You only need to deploy your code (HTML, CSS, JS, database, backend) onto these machines.
- These services charge based on usage (bandwidth, storgae, compute).

> A Socket a combination of a port number and an IP address. It enable communication b/w a server and a client.

# Why port number matters: -

- A port is a logical number in your system.
- Your device run multiple applications, each using a different port (browser, youtube, whatsapp)
- A port ensure that the response from the server reaches to the correct application.
  > Examples of default ports:
- HTTP → 80
- HTTPS → 443

## Client IP:Client Port <----> Server IP:Server Port

# Duplex Communication

- Full-Duplex: Both parties can send and receive data at the same time (like a phone call).
- Half-Duplex: Only one party can send data at a time (like a walkie-talkie).

# webSocket and webRTC

- webSocket and webRTC both enables two-way communication (duplex),both parties can receive or send the data at a time.
- webSocket is a protocol that enables two-way (full-duplex) communication b/w a client and a server. It start with aa HTTP handshake then upgrade the connection to webSocket, once upgrade the communication is done directly over a single TCP connection - no more HTTPs.

* webRTC enable direct real-time peer-to-peer communication (support audio,video,file sharing) b/w clients.
* However it still needs a signaling server for initial setup, where it exchange info like IP, port, encryption keys.

---

# Monolithic and Microservices

- Monolithic architecture means your entire application build as a single unit. All features- UI, authentication, payment, database access - are bundles together in one codebase, one deployable unit.
- Microservices means breaks down your application into small, independent services, where each service is responsible for one functionality.

- APIs provide a interface b/w a client and a server that allow to communicate with each other to exchange data.
- API are set of rules that enable communication b/w two different software components with each other.

---

## Express

> > Express.js is a backend web application framework built on top of Node.js

> Why use Express.js

- It simplifes writing server code in Node.js
- makes routing, middleware and request/response handling more efficient.

# HTTP (Hyper Text Transfer Protocol)

- It is a communication protocol used for transferring data b/w a client (like your browser) and a server.
- It is stateless - each request is treated as independently
- Follows request/response model.
- Uses methods like GET, POST, PATCH, PUT, DELETE

# HTTP methods

- Get: read data from the server
- Post: send new data to the server
- Patch: update part of the data (partial update)
- Put: update existing data (full replace)
- Delete: remove data from the server

# CRUD Operations

- It represent four basic operations of persistent storage (Database)
  > Create - POST - Add new data
  > Read - GET - Retrive existing data
  > Update - PATCH/PUT - Modify existing data
  > Delete - DELETE - Remove data

# Nodemon

- It is a tool that automatically restart your Node.js server whenever you make change in your files.

---

