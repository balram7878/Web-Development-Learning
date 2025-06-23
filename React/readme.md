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

    <Babel>                 <React>                    <ReactDOM (redner)>
- JSX => React.createElement() => React Element (JSObject) => HTML Element

- array, strings, variables render directly inside JSX but objects are not becauase JSX behaviour is ambiguous here that what you want to extract from a object A JSON string?, Just one of the keys?, Something else? and JSX needs you to provide a clear path to render something. Objects are complex and not displayable as-is, so you need to extract or format what you want from them.

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

