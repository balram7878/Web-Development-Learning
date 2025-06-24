# NodeJS: -
- NodeJS is a runtime environment that execute JavaScript code, it uses V8 engine, that also power google chrome.
- It is just a piece of C++ code that can understand JS code.

* The beast behind this logic is: -
1. Parsing JS code:
   - The V8 engine has a JS parser.
   - This parser read your JS code and breaks it into tokens.
   - Then it build an AST (Abstract Syntax Tree) - A tree structure that represent the meaning of your code.

2. Compiling to Machine Code: -
   - V8 engine uses a JIT compiler (Just-In-Time compiler) like ignition or TurboFan.
   - These compilers convert the AST into machine code.

*** So, why C++ use to build V8 ***
* C++ is super fast and close to hardware language, perfect for building high performance engines.
* C++ written in assembly language.

*** Why we need servers ***

- to serve a request 
- for authentication and authorization
- to write business logic
- store sensitive infomartion and Database credential


