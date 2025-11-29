# React

React is a JavaScript library used to build efficient and optimized web-based user interfaces. It allows developers to create reusable components. Internally, React is implemented using JavaScript objects.

- React.createElement return a React element which is an JS object and after rendering (ReactDOM) it convert to HTML element.

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

* Render mean turned JS code (react components) into actual visible HTML elements.
* Manipulate HTML ducument means updating/changing parts of the HTML page without reoading the entire page.

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

- Project name, version, and description
- Entry point file
- Dependencies
- Dev dependencies
- Scripts

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

- → major updates
  ^ → accept minor and patch updates
  ~ → accept patch updates only

# npm vs npx

**npm**: Stands for Node Package Manager. It downloads and installs packages. It looks into the central repository, fetches all required dependencies, and stores them in the node_modules folder.

# Project Structure

1. **_Separate Every Module for Better Readability_**

- In React, a “module” refers to each logical part of your app, like components, pages, utilities, etc.

- Keeping each module in its own file or folder makes the code easier to understand, debug, and scale.

🔸 Why It’s Important:

- Helps you and other developers quickly locate files.

- Encourages modular development (small, reusable parts).

- Makes the app easier to test and maintain.

src/
components/ ← All reusable React components (JS & CSS)
pages/ ← Full pages that combine components
utils/ ← Dummy data, constants, helpers
assets/ ← Images, logos, static files
App.js
index.js

**Export Rules and Import Syntax**

- Only One export default Per File
- A file can have one default export.
- You can also have multiple named exports.
- Named Exports Must Use Curly Braces on Import

# HOOKS

- Hooks are special functions in React
- useState give you a array that [count,setCount] that set value of the state and another one is function that call when state of the variable changed.
- Hooks call the function every time whenever the state is changed.
- Re-render simply mean call the main function again.

> useState Hook:-

- assignment to const [color, setColor] = useState("white") mean destracture the array i.e., useState return an array and create two const color, and const setColor=()=>{} and initialize with a new value that's why does not give error.

> useEffect Hook:-

- useEffect(callback,dependencies) => useEffect(()=>{},[])
- useEffect will be executed last, it depends on dependency whenever the value of dependecy change useEffect hook will executed and if not it will not executed, if dependency is empty then it will executed initially .i.e. initial rendering and if dependecy array not given then it will executed everytime.

**The most important concept behind the useEffect hook is that it runs after the component has rendered. This is why, in some cases, it's better to use the useMemo hook, as it helps avoid an extra render cycle. In contrast, useEffect requires one additional render to reflect changes based on the updated state.**

- react render primitive data types for twice mean it bail out but for objects and array it render only once with a similar value because object and arrays are larger.

> useMemo Hook: -

- useMemo hook is memorizes the result of a calculations b/w renders.
- It prevent unnecessary recalculations of values if the dependencies have not changed.
- use useMemo to optimize performance:

* you have heavy computation
* A child component depend on a computed prop, and you want to avoid re-rendering it unless is used.

> Avoid using useMemo

- it adds extra complexity to the code.
- it add the overhead to maintain the cache internally.
- use it only when necessary (large computation, frequently re-rendering components).

> Behaviour with props

- if a prop or dependency value changes, useMemo recompute the value.
- if the value is hardcoded and dependency don't changed, the previous cache result is reused.
- This helps in avoiding unnecessary re-renders of child components when props are memorized.

* const cachedValue=useMemo(callbackFn,dependencies);

> useRef Hook

- useRef hook does not cause a re-render when it's value change.
- It is used to store a mutable value that persist across component renders.
- useRef() returns an object with a single property: .current.

* This .current property holds the value you assign to it.

> useContext Hook

- first create a context using createContext() and store it in a varible (const myContext=createContext();).
- To provide a value, wrap the relevant component tree inside the <myContext.provider value={someValue}>...</myContext.provider>
- To consume the value, use the useContext(myContext) hook. This hook return the context value directly.
- If used without a provider, useContext() will return the default value defined in createContext(default value).
- useContext is alternative to prop drilling, instead of passing props through multiple components, you can directly access the needed value from any level.
- This approach is useful for sharing global data like theme, language, or user authentication state, across your component tree.

# Closure:

- A closure is the combination of a function bundled together with reference to its surrounding state (the lexical environment). In other words a closure gives a function access to its outer scope. In JS closure are created every time a function is created, at function creation time. It also store reference of all the variables that this function used.
- const cachedfn=useCallback(fn,dependencies)
- array, objects and functions are stored in heap section by reference.

> In hook array function is created only once and it store the reference that store in heap memory.
> Stack is used to manage function calls, but memory for functions are allocated in heap area as like arrays and objects,

---

# State Lifting

- moving state up to the closest common ancestor component so that multiple childs components can share or communicate through that state.
- Two or more child components needs to access or modify the same state.
- Lift the state up to their parent compoenent, so the parent control the state and passes it down as props.
- share data b/w child components.

# Props Drilling

## Props drilling is when you pass data (props) from a top-level parent component down through multiple nested components, even if some them don't need it, just to reach a deeply nested child component.

> Passing data to many levels of component this makes code hard to manage and read as your component tree grows.

- can lead to unnecessary re-renders in intermediate compoenents.

---

# React Router

- Web page reload only happens when new HTML file load from the server on the browser, but when JS run then content appears to change (DOM manipulation) but it can't refresh the web page mean HTML file not change that's why it is called **Single Page Application** mean whatever you want to change do it in single HTML file, you dont have to create another one.

# Route Params

---

# Redux

- Redux is a **state management library** commonly used in react applications but it can be used with any JS framework.
- State is a special object (internally) that store dynamic data. When the state is changes, react re-renders the component to reflect the new data.
- Redux help you to manage and centalize the application's state in a single place (called store) so that components can access and update the state.
  **In redux we don't write state modification logic directly inside individual components. Instead all the logic that changes the state are write in a central place - redux store. This ensure that: -**

1. There is only one source of truth
2. Everyone follow the same rules and patterns to update the state
   **If Redux allowed state-changing logic in components, different developers might write conflicting or buggy logic, leading to uncontrolled updates, difficult debugging, and unexpected side effects. That’s why Redux enforces a strict architecture — to improve maintainability, testability, and debugging.**

# Why Redux: -

> Passing data through many levels of components (props drilling) become hard to manage. Redux solves this by

- store all states at single place
- making it accessible to every components wihtour deeply nested props

# Reducer

- Reducer is a function that receive the current state and an action and return a new updated state.

# Store

- used to centralize, and manage all states of the application at a single place so that components can access and update the state.

# Dispatch

- a method used to send actions to the reducer

# Slice

- slice is a way to organize and manage a piece of your store (glabal redux state).
  > A slice include:

1. name - a unique name of the slice
2. initial state - the default value for this piece of state
3. reducers - functions that define how this slice state changes in response to actions
4. actions - redux toolkit automatically generates action creator for each reducer.

# useSelector

- useSelector is a hook that is used to read the state from the store inside a component.
- const count = useSelector((state) => state.counter.value);
- state={
  slice:{
  count:0
  }
  }

- state is like a whole store

* when you use useSelector, you are subscribing to a specific part of the state.

# useDispatch

- useDispatch is a hook in react-redux that give you access to the dispatch function so you send the actions to the store.

---

# CORS (Cross-Origin Resourse Sharing)

- It is a security feature in a web browser that prevent a web page access sensitive information from the server of different origin.
- origin header : protocol + domain + port
- when you make a request to the server it compare this origin against the origin it allows, if your origin doesn't allowed then it blocks the request and doesn't include the right **Access-Control-Allow-Origin** 
- Browser have a same origin policy (SOP) to prevent malicious website from reading sensitive data from other sites.
- so cors is enforced by browsers not by internet or servers.

---

# Local state varibles loose their value when you change your route so the solution for this is read value from the store.