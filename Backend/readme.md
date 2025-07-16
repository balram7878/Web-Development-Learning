# NodeJS: -

- NodeJS is a runtime environment that execute JavaScript code outiside of a browser, it uses V8 which is a JS engine mean run JS code, that also power google chrome.
- It is just a piece of C++ code, it doesn't mean c++ directly can understand your JS code, instead.

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


