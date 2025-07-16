# React
React is a JavaScript library used to build efficient and optimized web-based user interfaces. It allows developers to create reusable components. Internally, React is implemented using JavaScript objects.

* React.createElement return a React element which is an JS object and after rendering (ReactDOM) it convert to HTML element.

                     <React>          <Render>
**React.createElement() => React element => HTML element**

# Libraries vs Frameworks
**Library**: A library is a pre-written collection of code (like functions, classes, and routines) that you call when needed. You are in control — you decide when and how to use its features.

**Framework**: A framework provides a complete structure or skeleton to build your application. It is in control — it calls your code based on its flow.

# ReactDOM
ReactDOM is used to render and manipulate HTML documents in web development.

- React and ReactDOM are exported separately from a CDN.
- React is used for both web and mobile development (via React Native).
- ReactDOM is used only in web development to render HTML documents — that’s why it's kept separate.

**React Root**
The React root is part of ReactDOM.

- It gives React full control to render content inside a specific DOM node.
- It is faster and more optimized.
- Acts as the container for the main component tree.
- Introduces concurrent mode (which helps in rendering performance).

# CDN (Content Delivery Network)
A CDN is a network of servers around the world that deliver web content faster to users based on their location.

- Static content (like images, JS, CSS) is stored on CDN servers.
- Dynamic content is stored on the main server.

# JSX (JavaScript XML)
- JSX is a syntax extension that allows writing HTML code inside JavaScript. It makes it easier and more efficient to build UI components.

* Babel is a transpiler that convert modern JS code (JSX code also) to older version of JS for browser compatibility so that the browser runs the older JS without any problem.

* Transpiler (source-to-source complier) is a tool that takes code written in one version or style of a programming language 
and converts it into another version/style of the same language.

     <Babel>                 <React>                    <ReactDOM (render)>
- JSX => React.createElement() => React Element (JSObject) => HTML Element

- array, strings, variables,render directly inside JSX but objects are not becauase JSX behaviour is ambiguous here that what you want to extract from a object A JSON string?, Just one of the keys?, Something else? and JSX needs you to provide a clear path to render something. Objects are complex and not displayable as-is, so you need to extract or format what you want from them.

- Expressions are also allowed (that produce a result), but statements are not allowed in JSX.

- User defined tag in JSX are start with capital letter.

- props is a object which contain all the arguments that you passing in a function call.

# Bundler
A bundler plays an important role in preparing production-ready code.

- It reads all files, removes unnecessary code (comments, spaces, unused code), and creates an optimized final bundle.
- Common bundlers: Webpack, Vite, Parcel.

# package.json File
This file provides metadata to NPM about your project and includes:

* Project name, version, and description
* Entry point file
* Dependencies
* Dev dependencies
* Scripts

# node_modules Directory
The node_modules folder contains:

- All the code for installed modules
- Their dependencies
- Any external code required by those modules

# package-lock.json
This file stores the exact version information of every dependency installed — ensuring consistency when the project is shared.

# Semantic Versioning (SemVer)
- Dependency section also list the version of each dependency using a technique called SemVer.
- Version numbers follow this pattern: major.minor.patch
- 1.2.3 → major = 1, minor = 2, patch = 3

* What changes mean:
- Major: Breaking changes — may require changes in your code.
- Minor: Backward-compatible new features.
- Patch: Backward-compatible bug fixes.

**Special symbols**:

* → major updates
^ → accept minor and patch updates
~ → accept patch updates only

# npm vs npx
**npm**: Stands for Node Package Manager. It downloads and installs reusable JavaScript packages (modules). It looks into the central repository, fetches all required dependencies, and stores them in the node_modules folder.

# Project Structure

1. ***Separate Every Module for Better Readability***

- In React, a “module” refers to each logical part of your app, like components, pages, utilities, etc.

- Keeping each module in its own file or folder makes the code easier to understand, debug, and scale.

🔸 Why It’s Important:

* Helps you and other developers quickly locate files.

* Encourages modular development (small, reusable parts).

* Makes the app easier to test and maintain.

src/
  components/       ← All reusable React components (JS & CSS)
  pages/            ← Full pages that combine components
  utils/            ← Dummy data, constants, helpers
  assets/           ← Images, logos, static files
  App.js
  index.js

**Export Rules and Import Syntax**

* Only One export default Per File
* A file can have one default export.
* You can also have multiple named exports.
* Named Exports Must Use Curly Braces on Import

# HOOKS

- Hooks are special functions in React 
- useState give you a array that [count,setCount] that set value of the state and anothe rone is function that call when state of the variable changed.
- Hooks call the function every time whenever the state is changed.
- Re-render simply mean call the main function again.

> useState Hook:- 

- assignment to const [color, setColor] = useState("white") mean destracture the array i.e., useState return an array and create two const color, and const setColor=()=>{} and initialize with a new value that's why does not give error.

> useEffect Hook:- 

- useEffect(callback,dependency) => useEffect(()=>{},[])
- useEffect will be executed last, it depends on dependency whenever the value of dependecy change useEffect hook will executed and if not it will not executed, if dependency is empty then it will executed initially .i.e. initial rendering and if dependecy array not given then it will executed everytime.

* react render primitive data types for twice mean it bail out but for objects and array it render only once with a similar value because object and arrays are larger.

> useMemo Hook: -

- useMemo is used to protect the component when no changes occur and it is change due to changes occur in parent here useMemo hook is play a very important to optimize your code.
- AVOID TO USE useMemo because it is also a overhead, it come with some addtional code and this make code more complex so use when there are lot of changes happen in main file.
- if we use props then if value of argument will change then useMemo will re-render the compoennt again, if it is a hard coded value then it will not re-render the component.

# Closure:
- A closure is the combination of a function bundled together with reference to its surrounding state (the lexical environment). In other words a closure gives a function access to its outer scope. In JS closure are created every time a function is created, at function creation time.

> In hook array function is created only once and it store the reference that store in heap memory. 
> Stack is used to manage function calls, but memory for functions are allocated in heap area as like arrays and objects, 

# React Router

- Web page reload only happens when new HTML file load from the server on the browser, but when JS run then content appears to change (DOM manipulation) but it can't refresh the web page mean HTML file not change that's why it is called **Single Page Application** mean whatever you want to change do it in single HTML file, you should not create another one.
-  