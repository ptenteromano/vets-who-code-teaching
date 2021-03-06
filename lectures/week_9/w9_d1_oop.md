# DAY 1
## Week 9 - Comp Sci with Javascript
<hr>
# Object Oriented Progamming
Classes and Objects
<hr>

We will start with ZOOM.

Well Explained Video:
https://www.youtube.com/watch?v=T-HGdc8L-7w

Article:
https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

Lets start with Data Types:
- A data type can be one of:
1. integer
2. char
3. string
4. boolean
5. float
6. double
7. etc...

Javascript is "loosely typed",
We declare variables like:

`let a = 5`

Javascript infers the type, in this case an integer
Then it will re-type it if it has to:

`a = "hello"`

Now the varaible `a` is of type string

These simple types are often called "primatives" or "primative types"

Natively, the JS engine knows how to handle these when it sees them.

------------

But what if we wanted our own custom "type"?
Examples:
- Bank Account
- User
- Car
- etc, etc, etc.

So, just like what we did with primatives we can do things like:

`const myFirstCar = new Car(color="blue")`

`const mySecondCar = new Car(color="red")`

What is "Car()"? It looks like a function!
- Well, it is and it isn't.
- These lines are called "Instantiating a class", or creating an Object

So What are Classes?
- They are the custom types!
- A template
- We can use "Encapsulation" to really define what our Class does
- A class can even act like a primative type (in most cases)
- It is completely up to your own implementation

So then what are objects?
- Objects are an "instance" of a class
- A class does not really exist until it is instantiated
- Every language that supports classes has their own syntax for this

A more Technical view of objects:
- simply: collection of data stored in memory
- this data is a combination of primatives, other objects, and methods (functions)

How does the Class know how to be instantiated?
- This is called a "Constructor"
- A Constructor is the first function called when the Class is instantiated into an object
- It "Constructs" the Object from the template
- Constructors are customizable too, they are just functions!

-------------

Assignment:
1. Design your own Class, it can be anything (Player, Car, Home, Account)
2. Build out all your own methods and variables
3. Instantiate it into an Object
4. Show off all your object's methods!

Bonus:
- Research "inheritence", and nested Objects
- I.E., both Car and Plane objects can inherit from Vehicle
- I.E., a Bank can have many nested BankAccounts and Users
