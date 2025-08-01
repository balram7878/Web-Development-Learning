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

- It is a communication protocol used for transferring (exchange) data b/w a client (like your browser) and a server.
- It is stateless - each request is treated as independently
- Follows request/response model.
- Uses methods like GET, POST, PATCH, PUT, DELETE

# HTTP methods

- Get: read data from the server

* Get method also send data through the URL using query parameter but for small and non-sensitive data. But there are somolimitations to send data from get method

1. Visible data in the browser's address bar (not secure)
2. Limited data size
3. cached and bookmarked which is not good for sensitive data

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

# POSTMEN:-

- A postmen is a GUI based API client tool or software used to send request and receive response from the server, more or less it let's you test how an API work.

# HTTP APIs: -

- APIs is a set of rules and a interface to communicate b/w a server and a client.
- So, HTTP API is an API that used HTTP protocol to exchange data.
- app.get(). app.post() are APIs end point.

# Why we can't POST data via browser URL like we fetch data with GET

> Browser address bar only send GET request to the server, because GET is used for read the data from the server. But POST method and other method require header, body and other things.

- **req** containe all the data coming from the frontend to the server.
- **res** is used to send the data back from the server to the frontend.

# How the Server Knows What to Respond With

- When a client sends different types of requests to the same server, the server determines how to respond based on the information in the req object.
- The req object includes details such as the HTTP method (GET, POST, etc.), URL path, headers, query parameters, and request body. This helps the server decide what response to send.

# Browser Adds Default Information

- When we make a fetch() request from the browser without specifying a method, the browser defaults it to a GET request.
- Even if you don’t explicitly pass headers or method, the browser attaches additional metadata (like headers, content-type, etc.) to help the server understand the request.

# Frontend vs Backend Language Compatibility

- Frontend of a web application is usually built using HTML, CSS, and JavaScript.
- Backend can be built using many languages like C++, Java, JavaScript (Node.js), Python, etc.
- JavaScript objects can't be directly understood by backend languages other than JavaScript. So, to ensure compatibility, data is sent in JSON (JavaScript Object Notation) format.

# Why JSON?

- JSON is a text-based format that can be easily understood and parsed by different programming languages.
- We convert JavaScript objects to JSON using JSON.stringify(), because converting plain text to binary (0s and 1s) is easier than converting a complex object.

# Parsing and Serialization

- On the server, incoming JSON data needs to be parsed back into native data structures.
- In Express.js (Node), this is done using express.json().
- In Python (Flask/Django), different JSON parsers are used.
- In C++, structures or libraries are used for JSON parsing.
- When the server responds with data, it's also in JSON format so that the client (browser) can convert it back into a JavaScript object using response.json() in the frontend.

# Diffreence b/w JS object and JSON

Feature -- JavaScript Object -- JSON
Type -- Object (code-level) -- String (text-based)
Keys -- Can be without quotes or with single/double quotes -- Must be in double quotes
Data -- Types Can include functions, undefined, symbols -- Only string, number, boolean, array, object, null
Trailing Comma -- Allowed -- Not allowed
Usage -- Used in live JavaScript code -- Used to send data between client and server
Conversion -- Native -- Requires JSON.stringify() and JSON.parse()

- Valid JSON must either be an object {} or an array [].

> header section in the req contain metadata such as:

- content-type specifies the format of the request or expected response.
  > application/json, application/xml etc
- this help the server that how to interpret incoming request and how the client expect the response to be formatted.

---

# Query Parameter and Dynamic Parameter

- GET /book?author=Balram Meena --> this is query parameter used for filtering and searching. It’s optional, and you can have multiple like ?author=Balram&year=2024.
- GET /book/:id --> this is a dynamic route parameter, used to fetch specific resources by ID, title etc.
  Parameter Type --- Sent in --- Use with methods --- Best for --- Notes
  Query Params --- URL --- GET, DELETE --- Filtering, search --- Visible in URL, not for sensitive data
  Route Params --- URL --- GET, PUT, PATCH, DELETE --- Identifying specific resource --- Fixed structure like /book/:id
  Request Body --- Body --- POST, PUT, PATCH --- Sending full or partial data --- Use application/json; secure and maintains structure
  > Why use Request Body for Sensitive Data
  > URLs are: Visible in browser history, Shared when copying links
  > Bodies: Sent securely (especially over HTTPS), Not visible in address bar, Keep objects, types, and structure intact (e.g., { id: 1, title: "...".
  > Format Difference
- URL Parameters & Queries: Always strings
- Request Body (JSON): Preserves types

# Middleware

- middleware is a function that has access to: (res,res,next)
- it is executed b/w when the server receives a request and send a response.

1. it can modify request and response
2. end the request-response cycle
3. call next() to pass control to the next middleware/handler

app.use() --> middleware mounting
app.get() and app.post() --> route handler

# TCP: One Request = One Response

- In HTTP over TCP, the server cannot send multiple responses to a single request.
  Once the client sends a request, the server sends one response. That request-response cycle is finished after that.
- That’s why: You can’t call res.send() more than once.
- If the client doesn’t receive a response (e.g., due to an error or bug), it might keep retrying (in a loop) until timeout.

# Why Store Logs?

> Logs help us:

- Monitor user activity
- Debug errors or bugs
- Track API usage (for rate limiting or analytics)
- Know what happened if something breaks

> Route handlers respond to specific HTTP route and methods
> app.use() register middleware and routers

---

# Authentication

- The process of verifying a user's identity.

# Authorization

- the process of verifying the actions or resources a user is allowed to access.

# Error codes

200 -- OK -- request was successfull and the server returned the expected response
201 -- created -- a new resource is successfully created (POST)
400 -- bad request -- the server can't process the request due to invalid input from the client.
401 -- unauthorized -- the user require authentication (user not logged in or invalid credential)
403 -- forbidden -- the server understood the request but denies access
404 -- Not found -- the requested resource does not exist on the server.
500 -- internal server error -- server-side issue prevented to fullfilling the request.

> error code provide a ***standarized error handling machanism*** b/w client and server.
> allow developers and systems to debug issues quickly