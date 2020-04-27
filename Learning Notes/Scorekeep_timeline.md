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