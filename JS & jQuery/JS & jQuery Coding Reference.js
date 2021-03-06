// JS & jQuery Coding Reference

/*
"Every piece of information must have a single, unambiguous, authoritative representation within a system"
	-Andrew Hunt, The Pragmatic Programmer, 1999
*/

// AJAX = Asyncronous JavaScript and XML
// XML = eXtensible Markup Language
// XHR = XML HTTP Request
// JSON = JavaScript Object Notations
// XSS = Cross-Site Scripting

/*
XSS Attacks
	1. Do not allow untrusted users to submit HTML markup or JS.
	2. Double-check validation on the server before displaying user content or storing it on the database ; users could bypass validation by turing off JS.
	3. The database may contain safe markup and script from trusted sources ; doesnt process the code, just simply stores it.
	4. As your data leaves the database, all potentially dangerous characters should be escaped.
	5. Only insert content generated by users into certain parts of the template files.
	6. Don't create DOM fragments containing HTML from untrusted sources. It sould only be added as text once it has been escaped.
*/

/*
XSS Escaping and Controlling Markup
	1. NEVER include data from untrusted/external sources in JS. This involves escaping all ASCII chars less than 256 (that arent alphanumeric). Ex:
		& -> &amp;
		< -> &lt;
		> -> &gt;
		` -> &#x60;
		' -> &#x27; (not &apos;)
		" -> &quot;
		/ -> &#x2F;
	2. For JS:
		DO use "textContent" or "innerText"
		DO NOT use "innerHTML"
	3. For jQuery:
		DO use .text()
		DO NOT use .html()
*/

// JS listener ID's must be unique to take action

/*
Use JS to RAMP the user web experience
	React to events triggered by the user or browser
	Access the content on the page
	Modify the content on the page
	Program rules or instructions for the browser to follow
*/

/*
HTML is the base layer, the content layer ; give basic information
	CSS is the middle layer, the presentation layer ; gives styling to the information
		JS is the top layer, the behavior layer ; enhances the interactive experience of the page
*/

/*
6 Rules/Guidelines for Naming Variables in JS
	1. Must begin with a letter, dollar signs ($), or underscores (_); must not begin with a number
	2. Must not contain dashes (-) or periods (.)
	3. Must not be the same as a keyword reserved for JS ; can have a keyword as part of the variable name
	4. Variable names are case sensitive
	5. Use names that are descriptive of their value
	6. Use camel casing or underscores (_) to seperate each word within the variable name
*/

/*
Document Object Model (DOM)
	The topmost object in the DOM is the 'document' object
	The next object is the html source
	The next object is the source body element
	NodeLists that are returned via queries are similar to arrays (0 indexed) but are called collections
		Live NodeList: When your script updates the page, the NodeList is updated at the same time, reflecting the changes
		Static NodeList The NodeList is not updated to reflect the changes made by the script
*/

// Minification = removes all unecessary whitespace from a file and is denoted as: file.min.js

// jQuery doesnt achieve anything that cant be done with vanilla JS, just makes coding simpler; "Write less, do more."

/*
Local, session, and cookies data cannot be cross referenced/accessed unless all parts of the URL match
	1. http:// 		; Protocol
	2. www.				; Sub-domain
	3. google.com ; Domain
	4. :3000			; Port
*/

/*--------------------------------------------------------------------------------------------------------------*/
// KEYWORDS & STRUCTURES
var <variable> = <value>; // defines a variable globally or locally to an entire function regardless of block scope.
let <variable> = <value>; // defines a variable locally
document; // supported by many major modern web browsers ; creates new object for each element on the page for manipulation
window;
Object; // under the hood, arrays and functions are considered objects
String;
Boolean;
Number;
Date;
Math;
Regex();
enum();
function{}; // normal functions in JS do not need to be prototyped ; function expressions need to be declared before they are called
this; // evaluates to the value of the ThisBinding of the current execution context ; access the current element being evaluated
$(this); // creates a jQuery selection; allows jQuery methods to be used on the current element being evaluated
null;
NaN;
undefined
true
false
throw
try
catch()
finally
debugger // enables debugging interrupt at location for use in the web inspect console
import()
new()
void()
while()
for()
do
with()
typeof()
switch()
	{case 'One': <expression>; break;
	 case 'Two': <expression>; break;
	 default: 	 <expression>; break;}
delete;
return; // could return a single value as normal or an array of values
break
continue


/*--------------------------------------------------------------------------------------------------------------*/
// HTML ELEMENT ATTRIBUTES
<elem
	autofocus= // gives focus to this element when the page is loaded
	placeholder= // greyed out hint in a text field about input formatting and such
	required= // checks that the field has a value ; takes a boolean?
	min= // minimum permitted number
	max= // maximum permitted number
	step= // interval by which the numbers should increase or decrease
	value= // default value for a number when the page loads
	autocomplete= // shows a list of past entries ; true by default ; exception for sensitive data
	pattern= // allows a regex specification for validation
	novalidate= // used on the form element to disable the built-in form validation
>


/*--------------------------------------------------------------------------------------------------------------*/
// METHODS

alert("string")
console.log("string")
console.group("string")
console.table(object_variable) // take JSON formatted data

parent.appendChild(newItem) // put new item at end of a list
parent.insertBefore(newItem, target) // put new item before target

selection.html("<%= j action %>") // retrieves only the HTML inside the first element in the matched set along with any of its descendents from the jQuery selection
selection.text() // will return the text from the a jQuery selection
// the 'j' will escape JS and run any embedded ruby code

elem.before() // insert content before the selected element
elem.after() // insert content after the selected element

a.prepend(b) // insert content inside the selected element(s) after the opening tag ; adds b to a
a.prependTo(b) // adds a to b
a.append(b) // insert content inside the selected element(s) before the closing tag ; adds b to a
a.appendTo(b) // adds a to b

elem.attr("attrOne", "attrTwo") // will get (one) and optionally set or update (two) a specified attrubute and its value
elem.removeAttr("attr") // obvious
elem.addClass("klass") // obvious
elem.removeClass("klass") // obvious

elem.css("property", "value") // can get and/or set css property:value pairs on elements
elem.css("property1": "val1", "property2": "val2") // manipulate multiple css property:value pairs

selection.each() // applies the same code to each element in the selection

elem.show() // displays elem
elem.hide() // hides elem
elem.toggle() // toggles between showing and hiding elem
elem.fadeIn() // obvious
elem.fadeOut() // obvious
elem.fadeTo() // changes the opacity of elem
elem.fadeToggle() // hides or shows elem by changing the opacity (the opposite of thier current state)
elem.slideUp() // obvious
elem.slideDown() // obvious
elem.slideToggle() // obvious
elem.delay() // delays execution of subsequent items in queue
elem.stop() // stops animation if it is currently running
elem.animate({[, speed][, easing][, complete]}) // creates custom animations
// "speed" indicated the duration of the animation in milliseconds ; can also take keywords like 'fast' or 'slow'
// "easing" can take 2 values: 'linear' will make the transition uniform & 'swing' has a slow start, fast middle, and slow end
// "complete" is used to call a function that should run when the animation has finished ; callback function

selection.find() // all elements within current selection that match the selector
selection.closest() // nearest ancestor (not just parent) that matches the selector
selection.parent() // direct parent
selection.parents() // all parents
selection.children() // all children
selection.siblings() // all siblings
selection.next() // the next sibling
selection.nextAll() // all subsequent siblings
selection.prev() // the previous sibling
selection.prevAll() // all previous siblings

selection.add() // adds elements to a set of matched elements
selection.filter() // reduces number of matched elements to those specified by function
selection.is() // 
selection.each() // applies same function to each element in a matched set
selection.toArray() // converts a jQuery collection to and aray of DOM elements ; enables use of array methods
selection:contains() // 
selection.not() / :not() // removes elements from a set of matched elements
selection.has() / :has() // 
// based on the dot or colon selector method syntax, the following two selectors are equivalent:
$("li").not("hot").addClass("cool");
$("li:not(.hot)").addClass("cool");
// colon selector method syntax is faster than dot, but dot is cleaner and easier to read/understand

$("li").eq(index) // element that matches the index number
$("li:lt(index)") // elements with an index less than specified
$("li:gt(index)") // elements with an index greater than specified
// index is 0 based like array indexes

elem.remove() // removes any matched elements from the DOM tree including any descendants
elem.detach() // same as "remove" but keeps a copy of removed elements in memory
elem.empty() // removes child nodes and descendants from any elements in the matching set
elem.unwrap() // removes parents of matched set, leaving matched elements
elem.clone() // creates full copy of matched set including descendants

array.push() // add item(s) to tail of array and returns the length
array.unshift() // adds item(s) to head of array and returns length
array.pop() // removes item from tail of array and returns the item
array.shift() // removes item from head of array and returns item
array.forEach() // executes a function once for each item in array
array.some() // checks if some/any items in array pass test specified by function
array.every() // checks if all items in array pass test specified by function
array.concat() // creates new array containing its and other array values
array.filter() // creates new array with item(s) that pass test specified by function
array.sort() // reorders item(s) in array using a function ; by default the sorting is lexicographically for numbers and strings
array.reverse() // reverses the order of the item(s) in array
array.map() // call a function on each element in array and creates a new array with results

string.replace(/^the /i, "") // takes a regex as first argument and what to replace with as the second ; replace "the " with ""

form.action() // the URL that the form is submitted to
form.method() // if to be sent via GET or POST
form.name() // rarely used, more often used is "id"
form.elements() // a collection of the elements that the form can interact with ; they can be accessed via index or thier name attribute
form.submit() // submits the form
form.reset() // resets the form to the initial values it had when the page first loaded
form.value // text if text input, value attribute otherwise
form.type // type of form element (text, password, radio, checkbox, etc)
form.name // gets or sets the name attribute of the form
form.defaultValue // the initial value when the page is loaded
form.form // the form that the control belongs to
form.disabled // disables the form element
form.checked // indicates which checkboxes or radio buttons have been checked ; returns boolean
form.defaultChecked // whether or not checkboxes or radio buttons were checked when the page loaded ; returns boolean
form.selected // indicates that and item from a select box has been selected ; returns boolean

selectBox.options // a collection of all the option elements
selectBox.selectedIndex // index number of the option that is currently thier "option"
selectBox.length // number of options
selectBox.multiple // allows to select multiple options
selectBox.selectedOptions // a collection of all the selected options
selectBox.add(option, before) // add "option" prior to index "before" ; will default to tail if no "before" is given
selectBox.remove(index) // removes option at "index"

element.isRequired() // checks whether the element has a required value
element.isEmpty() // checks whether the element has a value


/*--------------------------------------------------------------------------------------------------------------*/
// EVENTS
$("element").on("event")

// When an event "fires" on an element it "triggers" a script that takes an action.
// HTML Event Handlers ; DO NOT USE
// DOM Event Handlers ; OLDER BUT USEFUL
element.onblur() = checkUsername;
// DOM Event Listeners ; CURRENT AND PREFERRED
element.addEventListener("blur", checkUsername, false)
												(event, function_code, flow)
												// flow is false by default and uses element bubbling
												// if flow is true it uses element capturing instead ; not supported ≤ IE8

// UI
load
unload
error
resize
scroll

// Keyboard
keydown
keyup
keypress

// Mouse
click // also fires when the ENTER key is pressed and an element has focus
dblclick
mousedown
mouseup
mousemove
mouseover
mouseout
// screen > page > client is the relationship of display for any webpage and location of mouse pointer can be addressed by:
// screenX & screenY
// pageX & pageY
// clientX & clientY

// Focus
focus / focusin
blur / focusout

// Form
input
change
submit
reset
cut
copy
paste
select

// Mutation
DOMSubtreeModified
DOMNodeInserted
DOMNodeRemoved
DOMNodeInsertedIntoDocument
DOMNodeRemovedFromDocument

// Properties
target // target of the event (most specific element interacted with)
type // type of event that was fired
cancelable // whether or not you can cancel the default behavior of an event

// Methods
preventDefault() // canel the default behavior of an event (if cancelable)
stopPropagation() // stops the event from bubbling or capturing any further

$("li").on("click" events[, selector][, data], function(e) { // the event object
	eventType = e.type; // type of event (click, mouseover, etc.)
	eventData = e.data; // object literal containing extra information passed to the function when the event fires
	eventTarget = e.target; // DOM element that initiated the event
	eventX = e.pageX; // mouse position from left edge of viewport
	eventY = e.pageY; // mouse position from top edge of viewport
	eventTimeStamp = e.timeStamp; // number of milliseconds from Jan 1st, 1970, to when the event was fired (Unix Time)
	eventActioner = e.which; // which button or key that was pressed to fire the event
	e.preventDefault(); // see function definition in this file
	e.stopPropagation(); // see function definition in this file
});
// "selector" lets you respond to a subset of the elements in the initial jQuery selection that will filter its descendants
// "data" lets you pass extra info to the function that is called when the event is fired ; the info is passed along with 'e'


/*--------------------------------------------------------------------------------------------------------------*/
// STRINGS
title = "Mollys Special Offers"; // can use a single single quote inside double quotes
message = '<a href=\"sale.html\">25% OFF!</a>'; // use \ to escape characters inside of a single or double quoted string


/*--------------------------------------------------------------------------------------------------------------*/
// ARRAYS
var <arrayName> = ['hello', true, 69]; // array literal
var <arrayName> = new Array('hello', true, 69); // array dynamic constructor
// two ways to declare an array
// elements inside arrays in JS do not all need to be of the same datatype
<arrayName>[<index>] // classic array access
<arrayName>.item(<index>) // can access the items inside an array with the item() function/method


/*--------------------------------------------------------------------------------------------------------------*/
// OPERATORS
1+2 // 3
3-4 // -1
5/6 // .83333333333
7*8 // 56
9%10 // 9
i++ // increment by 1
j-- // decrement by 1
<var1> = <var2> // assignment
<var1> == <var2> // loose or abstract equality comparison ; similarity ; type conversion
<var1> === <var2> // strict equality comparison ; identity ; no type conversion
<var1> != <var2> // loose or abstract inequality comparison ; type conversion
<var1> !== <var2> // strict inequality comparison ; no type conversion
<var1> > <var2>
<var1> >= <var2>
<var1> < <var2>
<var1> <= <var2>
a&&b // logical AND
c||d // logical OR
!<expression>
conditional ? "do it true" : "do if false" // ternary


/*--------------------------------------------------------------------------------------------------------------*/
// FUNCTIONS (Inside objects they are called methods)

// JS has what is called "Lexical Scope" (or Static Scope)
	// nested functions have access to variables contained within thier parents
	// but parents do not have access to variables contained within thier children

// Immediately Invoked Function Expressions (IIFE) ("iffy")
var area = (function() // 
{
	var width = 3;
	var height = 2;
	return width * height;
}());
// the internal parenthesis tell the interpreter to call the function immediately
// the external parenthesis tell the interpreter to treat as an expression
// the variable area will hold the value of the return statement rather than the function itself


$("li").each(function() {
	var ids = this.id;
	$(this).append("<em class='order'>" + ids + '</em>');
});


var prices = [1, 2, 125, 2.5, 19, 14, 13.6]
prices.sort(function(a, b){
	return a - b; // sort in ascending order
	return b - a; // sort in descending order
})


/*--------------------------------------------------------------------------------------------------------------*/
// OBJECTS

var hotel = { // creating an object using literal notation
	name: 'Quay',
	rooms: 40,
	booked: 25,
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var object = {} // empty curly brackets will create an empty object using literal notation

var parksHotel = new hotel("Park", 69, 42);
parksHotel.rooms // 69
// create instances of already created objects using the object constructor notation


/*--------------------------------------------------------------------------------------------------------------*/
// AJAX, JSON, AND XML

// browsers only let AJAX load HTML and XML if the data is from the same domain
// JSON is unforgiving ; missing any punctuation will break the file
// JSON is JS and can contain malicious content ; dont trust external JSON files

var xhr = new XMLHttpRequest(); // new instance of an 'X'ML'H'ttps'R'equest
xhr.open("GET", "data/test.json", true) // specify the type of request, the data, and the asynchronous status
xhr.send("search=arduino") // sends the instance to the server ; default argument is NULL, but extra info can be sent optionally
xhr.onload() // when the browser has received and loaded a response from the server
xhr.status() // returns the status code of the request (200, 201, 401, 500, 304, etc...)
xhr.load() // loads HTML fragments into an element ; simplest method for retrieving data

$.get(url[, data][, callback][, type]) // loads data using the HTTP GET method, used to request data from the server
$.post(url[, data][, callback][, type]) // loads data using the HTTP POST method, used to send data to the server
$.getJSON(url[, data][, callback]) // loads JSON data using a HTTP GET request
$.getScript(url[, callback]) // loads and executes JS data using a HTTP GET request
// these are methods of a global jQuery object which is why they start with '$' ; they only request data from the server
// they do not automatically use that data to update the elements of a matched set, which is why the '$' is not followed by a selector
// "url" specifies where the data is fetched from
// "data" provides any additional information to send to the server
// "callback" indicated that the function should be called when data is returned (can be named or anonymous)
// "type" shows the return type of data to expect from the server

$.ajax(type: "GET", url: "https:// www.example.com", timeout: 2000, beforeSend: function(){}, success: function(){}, error: function(){}, complete: function(){})
// the methods above use "$.ajax" under the hood ; used to perform all requests
// "timeout" is the number of milliseconds to wait before the event should fail
// "beforeSend" is a function that executes before the AJAX request starts
// "success" is basically the same as the .done() method (mentioned below)
// "error" is basically the same as the .fail() method (mentioned below)
// "complete" runs after "success" or "error" events ; similar to .always()??? (mentioned below)

jqXHR.responseText // the text data
jqXHR.responseXML // the XML data
jqXHR.status // status code
jqXHR.statusText // status description ; typically about an error
jqXHR.done() // code runs if the request was successful
jqXHR.fail() // code runs if the request fails/was unsuccessful
jqXHR.always() // code to run always no matter whether the code was successful or unsuccessful
jqXHR.abort() // halt the HTTP communication
// when using the .load() method the HTML returned from the server is inserted into a jQuery selection
// you can specify what should be done with the data that is returned using the jqXHR object


/*--------------------------------------------------------------------------------------------------------------*/
// APIs

// history API works like a stack, new pages that are visited are pushed to the top of the stack
// navigating backwards moves you down the stack
// navigating forwards moves you up the stack

history.back() // obvious
history.forward() // obvious
history.go(+ - integer) // takes you to a place in the histories index originating at 0
history.pushState(state, "title", url) // pushes an item to the history stack
history.replaceState(state, "title", url) // edits the current history item
history.lenth // how many items are in the stack

// AngularJS is a MVC development approach for JS


/*--------------------------------------------------------------------------------------------------------------*/
// ERRORS

// Objects
Error // generic
SyntaxError // obvious
ReferenceError // scope error
TypeError // unrecognized datatype that cannot be coerced
RangeError // number(s) not within an accepted range
URIError // URI methods used incorrectly
EvalError // eval() used incorrectly

// Properties
name // type of execution
message
fileNumber // name of JS file
lineNumber

try // return, break, and continue keywords will all skip to the finally clause
{
	// try to execute this code
}
catch(exception)
{
	// if an exception is raised, run this code
}
finally
{
	// this always gets executed
}

throw new Error("message");


/*--------------------------------------------------------------------------------------------------------------*/
// MISC

var $jq = jQuery.noConflict();
var $mt = MooTools.noConflict();
var $y = YUI.noConflict();
// you can specify a custom alias to avoid shorthand conflicts with certain JS libraries
