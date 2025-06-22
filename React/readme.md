# React
React is a JavaScript library used to build efficient and optimized user interfaces. It allows developers to create reusable components. Internally, React is implemented using JavaScript objects.

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
JSX is a syntax extension that allows writing HTML code inside JavaScript. It makes it easier and more efficient to build UI components.

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