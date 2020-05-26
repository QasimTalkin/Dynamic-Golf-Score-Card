**What is meteor ?**
* Meteor is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes a key set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.

* Meteor allows you to develop in one language, JavaScript, in all environments: application server, web browser, and mobile device.

 * Meteor uses data on the wire, meaning the server sends data, not HTML, and the client renders it.

* Meteor embraces the ecosystem, bringing the best parts of the extremely active JavaScript community to you in a careful and considered way.

* Meteor provides full stack reactivity, allowing your UI to seamlessly reflect the true state of the world with minimal development effort.

**Structure of Project**
- update meteor version. 
- create project 
``` 
meteor create app-name 
cd app-name
meteor npm install 
meteor run 
```
- add client and server folder
- imports for meteor application. 
- With **Eager Loading**, all the data is retrieved in a single query, which can then be cached to improve the Application performance. With Eager Loading, we are trading memory consumption for the database round trips. With **Lazy Loading**, we only retrieve just the amount of data, which we need in a single query.

**lazy loading**
 - es6 keyword
 - load from import directory 
 - import/utils.js -> sent to anyone that imports it. 
 - use the keyword "import"
 - ```js 
    import 'directory' // . for back .. for main folder
    import '/./../folder/myJSfile.js'
    // can import js files from folder to client or sever 
    ```
 - export keyword to export specific methods and functions.  

    - files importing it can do so using 
    - importing hello() export function  
    ```js 
    export {hello} from './location'
    ```
**Imports**
   - relative parth  import item from './../imports/item.js' 
   - npm libs import React from 'react'
   - meteor import {Meteor} from 'meteor/meteor'


**The let keyword ES6**
```js
function foo () {
let k = 5; // function scoped. 
}
var k = 5; 

/*var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.*/
```

**npn modules** 

- react dom for browser

 ```js 
 meteor npm install react react-dom
 ```
 - as we proceed with the development make sure to  update package.json. 

 - get started React 
   - create html with div to be rendered. 
   -  import react and mentor modules 
   ```js
      import './main.html';
      import React from 'react';
      import ReactDom from 'react-dom';
      import {Meteor} from 'meteor/meteor';
   ```
   - fire using meteor command 
   ```js
      Meteor.startup(function () {   
      };)
   ```
**JSX**
   - react ues JSX (javascript XML), funny way to use tags. we can use variables inside JSX using by wrapping it in curly braces:

   - only one root element! 
   
   ```js 
   const name = 'Josh Perez';
   cost peeps = function (){return [ {<p key = '1'> </p>, <p key='2'> </p>} ];};
   const element = ( <div>
      <h1>
         Hello, {name}
      </h1>
      {<p key = '1'> </p>, <p key='2'> </p>, peeps()} // can render an array of objects or functions in JSX
   </div>);
   ReactDOM.render(
   element,
   document.getElementById('root')
   )  // render (what to render, where to render);

   // map an array method - takex in a
   ```

**MAP**
```js
// MAP
let arrr = [6,7,8,8,9,9,33,33]
let newarr = arrr.map((eachArray, indexNum)=> eachArray+1 + "@[" + indexNum + "]");
console.log(arrr + " after \n" + newarr);
//OUTPUT
//6,7,8,8,9,9,33,33 after 
//7@[0],8@[1],9@[2],9@[3],10@[4],10@[5],34@[6],34@[7]
```
**VS code extension "JavaScript Docstrings"** 
   - Create JsDoc using cmd+shft+p and looking for JsDcoc 
   - example JsDoc Class 
   ```js
   /**
   * Brief description of the class here.
   * @extends ParentClassNameHereIfAny
   */
   ```
**VS code extension "Console log"** 
   - create console log command using ctrl+shift+Q
## Setting Up Data (mogoDB)


## SQL vs No SQL 
 
### SQL 
- Database (keywords like select and from, insert update delete)
- store-> pre defined table values and column (table) 
- row or record 
- name column
- relational database (user order related by id and product )
- all record adhere to schema and need to be normalized 
- one to one, many to many 
- join (retrieved data into one table)
+ data and schema 
+ relations
- not the best to perform reads
+ data distributed in multiple tables 
- horizontal scaling not supported for SQL 
+ vertical scaling (add pwr)
- complex queries with lots 
### NO SQL (mogdb, Amazon dynamo DB)
- Mongo (humongous) database
- database 
- collection of documents (collections)
- document 
- field
- collection Documents -> (json style different schema) (person with a name another without a name)
- super flexible 
- no relations in a NoSQL 
- order collection for example (key data) 
- less relation but super fast retrieval 
- great for fast read
- easy to be split horizontally. 
- great for read not the best for write given data being distrusted throughout. 
- great performance 
**No real winner**

## Creating MogoDb 
- MOGODb is synchronous 

creating a collection 
```js
Players = new Mongo.Collection('players');
```

### Imports (having all our collections)

* Imports/API (file for every collection we want to make)
* we need players collection so we add a file player.js
* for collection we make a named import for mongo 
   ```js
   import {Mongo} from 'meteor/mongo';
   ```
* creating a new collection we do so  by
```js 
export const Players = new Mongo.Collection('players');
// or 
const Players = new Mongo.Collection('players');
export const; 

// we will use this collection by using imports. 
```
* we insert values into the Players collection using the insert 
```js
Players.insert({name: 'Qasim', score: 3});
console.log(Players.find().fetch());
// find gets the document
//fetch gets the array of the document
```
* MogoDB is synchronous -> runs on real time ->insert and then fetch 
* when acessing monoDB in terminal we use 
```js
db.players.find(); 
```

**meteor start up** 
```js 
import {Meteor} from 'meteor/meteor';
Meteor.startup(() => {
//STRAT
let k = 7;
console.log("Qasim");
//END
}); 
```
- on client side this runs when dom is ready 
- runs when server fire up! 

### Mini Mongo 
**Traditional client server communication**
- node.js --- async api -- mogoDC
- Client side JS DOM intractiuon 
- Adding a player -> form submission -> node.js (HTTP)->sanitization -> mongo db request add player and respond to request -> node.js -> re run the browser.  (POOR USER Experience)

**Meteor (websocket)**
- HTTP - > request/response paradigm
- need more dynamic approach 
- Tech require the sever to send that data as soon as available. 
- Introducing *websocket* 
   - opens a persistent socket connection between the server and client 
   - allowing both parties to send data at the same time. 
   - open a web socket by simply 
      ```js
      var  WsConnection = new WebSockets('ws://somting.com/part/ope', ['soap', 'xmpp']);
      ```
   - ws -> is the URL schema for websocket connection, wss for secure connection. 
   - Testing the connection 
      ```js 
      //send dfatd to the server 
      WsConnection.onopen = function () {
         WsConnection.send('ping');
      };
      //log error messages 
      WsConnection.onerror = function (){
      console.log('webSocket Error' + error);
      };
      //log messages from server 
      WsConnection.onmessage = function (e) {
         console.log('server ' + e.data);
      }
      ```
   - once we have the connection open we may send the data using
      ```js 
      WsConnection.send('message');
      // Sending file as Blob
      var file = document.querySelector('input[type="file"]').files[0];
      connection.send(file);
      ```
**meteor uses websocket for communication**
- we have mini mongo at client side -> manipulate at client side
- simply changes the data at client side. 
- regular function call to mini mongo 
- adds new doc to mini mongo on client side (fast) "no trip yet"
- rendering the data instantly. synchronous call
- DDP (distributed data protocol1) protocol -> sync up distributed databases 
- mini mongo sends DDP request to sync up server then inerts the document 
- security -> if user is not able to add player and inform the user of restrictions. 

### rendering player with Minimongo
- when we include a collection {players}that calls a collection 
- this include on client side automatically sets a MiniMOngo on server
- Metor tracker helps us track queriers and rerun code when these queries change. 
   - its a named Export come from meteor 
   ```js
   import {Tracker} from 'meteor/tracker'; 
   Tracker.autorun(()=>{});
   ```
- adding players.js in api folder under imports 
- we start the constructor function with lowercase parameter 
```js
export const Players = new Mongo.Collection('players');
```
## Inserting a player. 
- creating a form element to get user input. 
- textbox -> type :text, name for accessing it -> playerName, placeholder -> Player name
- button to add player 
- event listener to prevent default. 
   ```js
   <form onSubmit={some function()}>
   ```
- user preventDefault to prevent loading from happening
   ```js 
      function(event){
   event.preventDefault()
      }
   ```
- prevent default, clear it up if needed and insert player using 

## ES6 Arrow function. 
**This is JS**
-  much like objects functions have their own property, *this* being one of them 
- *this* always holds the reference to a single object, that defines the current line of code’s execution context.
- functions in JS are invoked in following manner 
   1.Function invocation
      - THIS with function invocation.
      - calling the function --- something()
      - this inside the something() function has value of the global objects (window object in browser environment). 
      - 'use strict' the default value of this, for any function object is set to undefined instead of the global object.

   2.Method invocation
      - Functions, when defined as fields or properties of objects, are referred to as methods. 
      - method invocation is of that function defined in an object. 
      - invoking a function within a method to avoid being global ref to *this* we user thisreference
   3.Constructor invocation
   - Constructor invocation is performed when new keyword is followed by a function name, and a set of opening and closing parentheses(with or without arguments).
   ```js 
   let person1= new People(‘John’, 21);
    ```
   Here, person1 is the newly created object and People is the constructor function used to create this object.

   **This and Arrow Functions**
   - Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
   - Another significant advantage it offers is the fact that it does not bind its own this. In other words, the value of *this* depends on enclosing context.
   - when invoking function within object the context is set to global or have to use this reference 
   - undefined without lexical bindings vs arrow function lexical binding. 
      ```js 
       let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
         // logs People 
         document.write(this); 
  
         setTimeout(function() { 
            // here this!=People 
           document.write(this.person + " is " + this.age +  
                                              " years old"); 
          }, 3000); 
        } 
      // OUTPUTS : undefined is undefined years old

       let People = function(person, age) { 
        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
            // logs People 
            document.write(this);  
  
           setTimeout(() => {  
            // arrow function to make lexical "this" binding 
            // here this=People."this" has been inherited 
            document.write(this.person + " is " + this.age  
                                           + " years old"); 
           }, 3000); 
        } 
        // OUTPUT: John is 12 years old. 

        let person1 = new People('John', 12); 
      ```
 -  In other words, an arrow function’s this value is the same as it was immediately outside it. 
- arrow functions are anno functions. 
- arrow function don't bind this keyword or arguments. 
- arrow function bind this from parent method. 
- es 5 fucntion does not. 

```js 

function qasim1() {
     let name = "abul";
     this.age = 22;
     let qasim = { name: 'Qasim', age : '23',
                topo: ()=> {
                    setTimeout(()=> {console.log(this.age)}, 1000);
                }
                }
     qasim.topo();
}
qasim1(); // outputs 22

```
```js
function qasim1() {
     let name = "abul";
     this.age = 22;
     let qasim = { name: 'Qasim', age : '23',
                topo() {
                    setTimeout(()=> {console.log(this.age)}, 1000);
                }
                }
     qasim.topo();
}
qasim1(); // outputs 23
```

getting the right parent value.m 



 **this in separated methods**
```js
 let person1 
    = new People('John', 21); 
// separating the method info() from its 
// object by storing it in a variable 
let separated = person1.info; 
```
- Once we separate the info() from the person1 object by storing it in separated, we lose all references to the person1 object
- One way is to bind the value of an object with the method when storing the method in separated 
`let separated = person1.info.bind(person1)`

**bind, call and apply**

***bind()***
- bind() allows us to explicitly define what value this will have inside a function by binding an object to that function.
- we need primarily two things – An object to bind to a function and a function that this object is to be bound to. 
`boundfunction = someFunction.bind(someObject, additionalParams);`
- binding an object explicitly to a function overrides its normal context rules and forcefully sets all this values to the bound object inside 

**call() and apply()**
- call() and apply() immediately calls the function, as opposed to simply preparing a copy of the function with a bound this value for future use.
call:
`function.call(thisValue, arg1, arg2, ...)`
apply:
`function.apply(thisValue, [ arg1, arg2, ...])`

**removing a document from MongoDb** 

- target a specific document `db.players.find({name:'qasim'})`
- remove the document by name `db.players.remove({name:"Qasim"})`
- using JSX to create button and function 
```js 
<button className="button button--round" onClick = {() => Players.remove(this.props.player._id)}> X 
</button>
```
Then we implement + and minus buttons. 

* button press -> update mongo DB 
* need to use set of operators for example $set
`collection.findAndModify()`
* $set -> set value
* $inc -> increment 

```js
<p key={player._id}>
<button onClick={()=>{
   players.update({_id:value}, {$inc: {some inc value, use negative to decrease}});
}}>
<p>
```
-------------------------------------
## React Components 
-------------------------------------
 - breaking individual parts out 
 - reusable pieces 
 - isolated components
 ```js

<CustomName/> 
use it again by just addinfg 
<CustomName/>
 ```
> break out the app into isolated components (eg:title, player, player list, add player, parent app component)
- ES6 classes. 
**Classes to support React component**
   - inheritance module in JS
   - class expression and class declaration (like function declaration [normal function], and expression [no name function let fss = {return something}]
   - Function declaration (hoisted) vs Class declaration (not hoisted)
      - Hoisting : can declare the function later to aces it. Class needs to be declared first to be hoisted. 
      - if not ReferenceError
   - Class declaration are named `Class Qasim {constructor (age, name){this.age=age; this.name=name;}};`
   - class expression can be unnamed `let Qasim = Qasim {constructor (age, name){this.age=age; this.name=name;}};`
   - The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).
      ```js 
      // unnamed
      let Rectangle = class {
      constructor(height, width) {
         this.height = height;
         this.width = width;
      }
      };
      console.log(Rectangle.name);
      // output: "Rectangle"

      // named
      let Rectangle = class Rectangle2 {
      constructor(height, width) {
         this.height = height;
         this.width = width;
      }
      };
      console.log(Rectangle.name);
      // output: "Rectangle2"

      ```
   - operates in strict mode! 
      - First, strict mode makes it impossible to accidentally create global variables
      - Second, strict mode makes assignments which would otherwise silently fail to throw an exception. 
      - Third, strict mode makes attempts to delete undeletable properties throw
      - Fourth, strict mode prior to Gecko 34 requires that all properties named in an object literal be unique. 
         `'use strict'; var o = { p: 1, p: 2 }; // !!! syntax error`
      - Fifth, strict mode requires that function parameter names be unique. `fucntion qas(a,a,n) \\wrong`
   - There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
   - The static keyword defines a static method for a class. 
   - static methods are called without instantiating their class and cannot be called through a class instance.  
      ```js 
      class Point {
      constructor(x, y) {
         this.x = x;
         this.y = y;
      }

      static distance(a, b) {
         const dx = a.x - b.x;
         const dy = a.y - b.y;

         return Math.hypot(dx, dy);
      }
      }
      const p1 = new Point(5, 5);
      const p2 = new Point(10, 10);
      p1.distance; //undefined
      p2.distance; //undefined

      console.log(Point.distance(p1, p2)); // 7.071067811865475
      ```
   - The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
- instead of returning string "qqqq" + this.name... we use betel versions **template strings**
like use back tick ` to start the template string and call arguments using ${this.someValue}
- we need to ue *Extends* to create react components. 
PLAYGROUND
```js 
class Qasim {
    constructor(name, age = Infinity){
        this.name = name; // referees to individual instance 
        this.age = age;
    }

    getSomeString() {
        return `Hello ${this.name}, you dont look ${this.age} at all`
    }
}


class Title extends Qasim {
    constructor (name, age,title){
        super(name, age);
        this.title = title;
    }
    getSomeString() {
        return `Hello ${this.name}, you don't look ${this.age} at all and you sure are a good ${this.title}`
    }
}
let me = new Title ('abul', 12, 'Dev');
console.log(me.getSomeString());
```

**React Components**

- Components are independent and reusable bits of code,  and returns HTML via a render function.component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
   ```js 
      class Car extends React.Component {
         render() {
            return <h2>Hi,s I am a Car!</h2>;
         }
      }
   ```
- Props are arguments passed into React components as attributes on custom tags, Props are passed to components via HTML attributes.
- reactDocs

- components, <randomnamee some porps />, Name.propTypes = { player:React.protypes.object.isRequired };
---- **Callback** ----
when this happens do this
we use bind, regardless of what happens use this
- adding player we use 
```js
// onlick or onsubmit needs to store the binding 

    <form onSubmit={this.addUser.bind(this)} className="form" >
```

---- **conditional rendering** ----
- usage login show this that 
- our use we will show list if no list we will show diffrent message 
- playlist 
```js
renderPlayers(){
    if (this.props.players.length === 0){
      return (<div className="item">
                <p className="item__message" > Welcome 😎 Please start by adding players </p>
              </div>
              );
    }
    else {
    return this.props.players.map((player)=>{ //after maping
      return <Player key={player._id} player={player}/>;
      });
    }
  }

```
- **The App component**
<titlebar> <playerlsit> <addplayer> 
- import titilebar addpl

--- **Sorting players** ----

- sorting in mongo db `db.players.find().sort({name:-1})`