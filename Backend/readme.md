# NodeJS: -

- NodeJS is a runtime environment that execute JavaScript code outside of a browser, it uses V8 which is a JS engine, that also power google chrome.
- v8 is just a piece of C++ code, it doesn't mean c++ directly can understand your JS code, instead.
- before nodeJS, servers were build using languages like c, c++, php, java. Google created v8 engine which translate your JS code into machine code and v8 is written in C++ and that's how JS is used in backend.
- v8 can be embedded into any c++ aplication, this mean we can embedded (integrate) v8 engine into our c++ program to run and understand JS code. Just like NodeJS does, it is also a c++ application, it embeds v8 and execute JS code.

# npm and npx:

> npm

- npm is a node package manager that let's you download and install packages from the central repository
- it downloads packages into your project’s node_modules folder and adds it to package.json.
  > npx
- npx is a node package eXcute, it is used to run npm packages without installing them globally.
- npx download it temporarily, runs it and delete it.
- npx is also used for run binaries of existing packages.

> Why use npx even if installed?

> Because without npx, you’d need to either:

1. Run node_modules/.bin/parcel index.html manually, OR

- To run the binary manually, you would do: **node_modules/.bin/parcel index.html**Kz
- Instead, npx runs it for you automatically: **npx parcel index.html**

2. Install it globally with npm install -g parcel and run parcel index.html.

- Using npx avoids both headaches.

**So, npm install and npx run**
**_You installed Parcel with npm, but ran it with npx because it saves you from typing long paths or installing globally._**

- How NodeJS run code: -

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

> error code provide a **_standarized error handling machanism_** b/w client and server.
> allow developers and systems to debug issues quickly

---

- express.json() is a buit-in middleware in express that automatically parses incoming JSON data in a streaming manner.
- in HTTP requests data often arrives in chunks, not all at once
- JSON.parse() can only parse data after it has been completely received as a string.
- express.json(): -
  > listen to the data stream coming from the client
  > collect and assembles the chunk
  > uses JSON.parse() internally after the complete data is received.
  > Adds the parsed object to req.body, making it easy to access in route handlers.

# Errors should be managed using:

- try-catch blocks
- Custom error-handling middleware for cleaner code in large applications.

---

### DATABASE

# Database

- A database is a physical storage system where actual data is stored in an organized and structured format.

* People often use the term "database" loosely to refer to both:
  > Database – The physical collection of data.
  > DBMS (Database Management System) – The software used to manage and interact with that data (e.g., MySQL, MongoDB).

# File System

- A file system is the traditional method of storing data on disk in files and folders.
  > Challenges with file systems:
- Hard to search, retrieve, update, or delete data efficiently.
- No concept of relationships between data.
- Limited support for concurrency (multiple users accessing/modifying data).
- No query language to filter or process data easily.

# Database

- A database is built on top of a file system but adds:
- Organized storage (tables, rows, columns, indexes).
- Support for CRUD operations (Create, Read, Update, Delete).
- Powerful querying capabilities (SQL or NoSQL queries).
- Data consistency, reliability, and security.
- Concurrency handling for multiple users at once.

# Why Excel Sheets Are Not Considered Full Databases?

- While Excel provides a way to store and view tabular data, it cannot replace a real DBMS because:
- Limited data storage capacity (not scalable for millions of records).
- Lacks data types enforcement (e.g., can’t strictly enforce integers, dates, etc.).
- Limited data integrity rules (e.g., foreign key constraints).
- Poor handling of concurrent access (multiple users editing at once).
- No optimized query engine for complex filtering, joins, or transactions.
- No recovery mechanisms for data corruption or crashes.

# Yes, images and videos can technically be stored in databases

- They are converted into binary format (BLOB – Binary Large Object) and can be stored in database tables.
- But in practice, this is not recommended for most systems.

# Problems with storing images/videos directly in DB

> Inefficient Querying

- Databases are optimized for structured, textual, and relational data.
- You cannot run SQL queries on binary data (e.g., “find images containing a cat”) directly.
- You can only fetch them using IDs or keys, not search by content.
- Even querying links of large media files can be slow.

# Large File Size (Performance Issues)

- Images and especially videos are huge in size compared to normal text data.
  > Large BLOBs make:
- Database backups heavy and slow.
- Replication and synchronization between servers very costly.
- RAM usage high, as loading these files from disk to memory is time-consuming and space-limited.

# Scalability Problems

- Databases are not meant to act as file storage systems.
- Storing millions of large media files bloats the DB size, slowing down queries for everything else.

# Better Approach – Metadata + External Storage

- Store only the metadata (structured data) about the media files in the database:
- File name, file type, size, upload date, URL, tags, etc.
  > Store the actual image/video files on:
- File systems (e.g., local storage or dedicated media server).
- CDNs (Content Delivery Networks) for fast global delivery.
- Cloud storage services like AWS S3, Google Cloud Storage, Azure Blob Storage.
  > This allows:
- Efficient searching using metadata (title, category, tags, etc.).
- Fast file delivery via optimized storage services.
- Reduced DB load, making queries faster and databases smaller.

# Semi-structured Nature of Media Files

> Media files have:

- Structured data → metadata (file name, size, format, tags, upload date).
- Unstructured data → the actual binary content (image/video pixels).
- Storing only structured metadata in relational DB allows running queries efficiently:
  → This fetches the video links, and files are served from CDN or cloud storage.

---

# Challenges with SQL Databases at Large Scale

- SQL databases are relational and store data in structured tables with rows and columns.
  > When applications have millions of users and billions of records, some problems arise:
- Adding a new column or table requires schema changes across all records, which can be time-consuming and error-prone.
- Large normalized data may be spread across multiple tables, requiring expensive JOIN operations to retrieve a single user's data.
  > Scaling horizontally (adding more servers) is difficult because:
- Different parts of a single user's data may exist on different servers.
- Performing cross-server joins becomes slow and inefficient.
- SQL databases scale vertically (by adding more CPU/RAM to a single server) better than horizontally.

# Normalization in SQL

- Normalization is the process of organizing data into multiple tables to reduce redundancy and improve data consistency.
  > Data is linked using:
- Primary keys – unique identifiers for each record in a table.
- Foreign keys – links between tables.

# Importance of SQL (ACID Properties)

- SQL databases ensure ACID compliance, making them highly reliable for transactions:
- Atomicity → All steps of a transaction succeed or none do.
- Consistency → Database remains valid after each transaction.
- Isolation → Concurrent transactions don’t interfere with each other.
- Durability → Once a transaction is committed, it persists even after crashes.
- Because of ACID guarantees, financial institutions and banking systems prefer SQL DBs.

# NoSQL Databases (MongoDB)

> MongoDB is a document-based NoSQL database:

- Stores data as JSON-like documents (BSON format internally).
- Collections = equivalent to tables in SQL.
- Documents = equivalent to rows in SQL.
- Fields = equivalent to columns.
  > Key benefits:
- Schema-less design → Flexible structure; adding new fields doesn't affect existing documents.
- No joins or normalization needed → Each document can hold all related data for a single entity.
- Easy horizontal scaling (scale-out) using sharding, where data is distributed across multiple servers efficiently.

# Limitations of NoSQL

> NoSQL databases often sacrifice strict ACID compliance for:

- Flexibility
- Speed
- Scalability

> They usually follow BASE properties:

- Basically Available
- Soft state
- Eventual consistency

---

# MongoDB

- a cluster is just a group of MonogDB servers that work together to store your data
- your database environment deployed at cloud (Atlas)

# Compass

- it is a GUI based tool that let you connect with your DB cluster and managed it visually.
  > Features:
- Browse databases & collections.
- Run queries without writing shell commands.
- Insert, update, delete documents.
- Visualize schema and indexes.

# Schema

- a schema is the structure/blueprint of how data is organized in DB.
  > It defines:
- Tables/collections
- Fields (columns)
- Field types (string, integer, date, etc.)
- Relationships (foreign keys, constraints)

> In SQL

- You must insert data following this structure (id, name, age, email).
- If you try to add a row without name → error.
- Schema is strict.

---

# MongoDB

- MondoDB is a NoSQL DB that store data in document format (JSON/BSON like).
- so to talk with the DB you need a programming language and a driver or a library for that language.
- you interact with mongoDB using MongoDB Node.js drivers (library) - JS library provide low level APIs to connect with the DB, compass (GUI - based tool) or Mongo shell commands, with the help of these you connect your Node.js application to a MongoDB database using.

# Mongoose

- A Node.js ODM (Object data modeling) sometime also called Object Document Mapper library for MongoDB.
- provide higher level abstraction over MongoDB Node.js driver
- Provides a higher-level abstraction over MongoDB.
- Lets you define schemas for collections.
- Handles data validation automatically.
- Provides powerful query building features.

---

# Security and Privacy

> Security is about protecting data to unauthorized access, attacts and leaks.

- Threat: Hackers, malware, data breaches.
- Solution: Firewalls, encryption, authentication.
  > privacy is about controlling who has access to your personal data and how it is used.
- Threat: Misuse of data by companies, governments, etc.
- Solution: Policies, laws (GDPR), user permissions, consent.

  > > Imagine you use a health app:

- Security: The app uses encryption so hackers can’t steal your health data.
- Privacy: Even though the data is secure, the app company itself might sell your health data to advertisers without asking you. That’s a privacy issue, not a security one.

**Security is about protection of data and Privacy is about control over personal data**

---

# Digital Signature

- it is like an electronic stamp or seal that proves:

1. the message came from the real sender (authentication)
2. the message was not changed on the way (integrity)
3. The sender can't deny sending it (non-repudiation)

> How digital signature work

- instead of encrypting the whole message, we encrypt a hash of the message with the sender's private key

1. Sender creates a hash of the message (e.g., using SHA-256).
2. Sender encrypts the hash with their private key → This is the digital signature.
3. Receiver gets:

- The original message
- The digital signature

4. Receiver decrypts the signature using the sender’s public key to get the hash.
5. Receiver also computes the hash of the message they got.
6. If both hashes match → message is authentic & unchanged.

# Encryption & Decryption

- Encryption = Converting plain text (e.g., a password) into unreadable text (ciphertext) using a key.
- Decryption = Converting the encrypted text back to the original text using the same key (or a related key).

> Symmetric Encryption

- one single key is required for both encryption and decryption
  > Asymmetric key cryptography
- private key: - used for encryption
- public key: - used for decryption

> > Confidentiality → public → private.
> > Authenticity → private → public.

# Public and Private Key

- private key: kept secret by the owner
- public key: shared with everyone

* what is encrypted with one can be decrypted only with the other.

### Authenticity + Confindentiality

- first, encrypt the message with receiver's public key so only receiver can decrypt it with own private key. (confidentiality)
- sign the hash with sender's private key -> so receiver decrypt it wiht sender's public key (authenticity)

# Hashing vs Encryption

Feature --- Encryption --- Hashing (e.g., bcrypt)
Reversible? --- Yes, can be decrypted --- No, one-way process
Key needed? --- Yes (for encryption/decryption) --- No key required
Usage --- Messages, files, confidential data --- Passwords (so even admin can't see real password)

For passwords → Hashing is preferred, not encryption.

---

# Salting

- If two people have the same password and you hash both passwords → Both hashes will be identical.
- That’s risky because hackers can use rainbow tables (precomputed hash dictionaries) to crack them.

* Solution → Salting:

- A random string (salt) is added to the password before hashing.
- Even if passwords are the same, the hashes will be different.

# Bcrypt

- Bcrypt is a password hashing library that makes hashes secure and slow enough to resist brute-force attacks.
  > Steps in bcrypt:
- Generate Salt → Bcrypt generates a random salt for each password.
- Combine Password + Salt → Makes each hash unique.
- Hash with Work Factor (Cost) → Higher cost = slower hashing = harder for attackers.
- Store Hash + Salt together in DB.
  > When user logs in, bcrypt repeats the process with the given password and compares hashes.

$2b$12$9O6Oup7VQvW8DJJb2rYlJuiD57A5x9Ry0GH1U7rH5nPTZXsnj1vWe
\_\_/ \_\_/ \_****\*\*****\_\_\_\_****\*\*****/ \_**\*\*\*\***\_\_\_\_**\*\*\*\***/
| | | |
| | | +--> Hashed password (after salting & key derivation)
| | |
| | +--> 22-character salt (Base64 encoded)
| |
| +--> Cost factor / Work factor (log2 of iterations, here 2^12 = 4096 rounds)
|
+--> Version identifier (`2a`, `2b`, `2y`, etc.)

> Version ($2b$)

- tells which dcrypt algorithm version was used.
  > Cost factor ($12$)
- also called round or work factor
- 12 means bcrypt will run the hashing algorithm 2^12=4096 times -> making brute force harder.
  > salt
- a random 128-bit value
- ensure same password generate different hash each time.
  > password hash
- Final hashed output after combining password + salt and running through bcrypt algorithm.
- Length is 31 characters (Base64 encoded).

**_So bcrypt hash = version + cost + salt + password hash. When you call bcrypt.compare(), it extracts the salt & cost from this string automatically to hash the user input the same way for comparison._**

# Why bcrypt is Secure

- Salt ensures uniqueness of hashes.
- Cost factor makes hashing intentionally slow → prevents attackers from trying millions of guesses quickly.
- One-way hashing → even if DB is leaked, original password can’t be found.

---

# JWT (Jason Web Token) Token
- also called access token
- JWT token consist of **Header.payload.Digital_Signature**
- header contain token type and algorithm used to signature
- header and payload neither encrypted nor hashed, they are encoded in Base64 formatting

---

# Refresh Token