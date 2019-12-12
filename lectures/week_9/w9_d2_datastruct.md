# DAY 2
## Week 9 - Comp Sci with Javascript
<hr>
# Data Types and Structures
-------------------------

Video:
https://www.youtube.com/watch?v=DuDz6B4cqVc&t=183s

No Article because there are many different data structures
You can go down whichever rode you please
But you must implement the given 4 below.

-------------------------

##  What are Data Types?
You guys should know this by now.
- Primative, Composite, ADT

1. Examples of Primatives?

2. Composite Data Types:
    1. Think of the word 'composite'
    2. Just a combination of primative datatypes
    3. Combined, they form a singular composite DT.

    - Examples?

3. Abstract Data Types:
    1. Simply, "Objects" (or classes)
    2. Custom objects built to do a job
    3. Mostly in the form of "containers"
      i.e., a `Player class` is a container for all the things a `Player` does

ADT's are the foundation for OOP and object manipulation

-------------------------

Data Structures
1. A set of ADT's that each serve specific purposes
2. Most are implemented natively, or in standard libraries
3. Foundational - manage the underlying flow and structure of programs

There are MANY Data Structures
Data Structures are implemented all the time!
  - Customized to how YOU want to handle a problem set

-------------------------

Some "Lower Level" data structures: (don't be too concerned)
These mostly require memory pointers, used in `C` and assembly
1. Linked List, Doubly Linked-List, etc.
2. Trees (Binary, Heaps, B-trees, AVL trees)
3. Graphs - (A nodes-edges graph, typical math graph)

What we will worry about:
"Higher Level", array-like data structures:
1. Set
2. Stack
3. Queue
4. Map / Hash (actually, just an `object-literal` in Javascript!)

Start to think about what each of the above 4 data structures do.
- What makes them... them?
- This is the first step to self-implementation
- I.E, What do we want our "Set" to do?

Before moving on, try to guess or think about what each of these do!

-------------------------

Set
- A set is just an unordered list (like an array) - but it has NO duplicates!
- Think of a math set {1, 2, 3}, etc.

Stack
- We went over stack already
- LIFO - Last in, first out!
- What does a `Stack` class do?
- We can add to the stack
- We can remove from the stack
- We can check if the stack is empty or not
- We can initialize it in multiple ways, too

Queue
- Kind of the opposite of a stack
- FIFO - First in, first out!
- It's just a line, like the line at the grocery store
- Now, think about what a Queue does

Map / Hash
- Think of an `object-literal` in JS.
- It has a `Key` and that key reveals a `Value`
- `Key --> Value`
- Think of an array... what's the key?... the index!
- What else can our `Map` class do? Add, remove, etc?

Of course, these data structures can be easily called from native JS or libraries
But Self-implementation helps you understand their structure
While also allowing you your own customization!

-------------------------

Assignment
1. Implement a Class for each of Set, Stack, Queue, Map
2. Each one should cover all of its capabilities
3. Each one can be initalized either empty, OR with initial values
4. Implement obj.isEmpty()

Notes:
- For Map, you can ONLY USE arrays. NO OBJECT-LITERALS. - That's cheating!
- Avoid built-in functions, if it feels like a shortcut, then it is a shortcut

Extras:
- Implement obj_1.equals(obj_2), where both objs are of the same Class
- This checks if all values (and in some cases, the order) are equal

Congrats, you've built four of your own data structures!

You are free to add and manipulate them how you like!
For example, look up "Priority Queue" (little advanced)
