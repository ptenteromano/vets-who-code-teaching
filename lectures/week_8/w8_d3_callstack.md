# DAY 3
## Week 8 - Comp Sci with Javascript
<hr>
# The Call Stack
<hr>

Well Explained Video:
https://www.youtube.com/watch?v=W8AeMrVtFLY

What is a "Stack"? What is a "Call Stack"?
- Think of how you fold clothes
- First one goes down
- Next one top
- And the next
- ....
- Which one is most accessible?

### How does the JS interpreted read code?
With the call stack!
1. Reads code sequentially, line by line
2. "Folds clothes" - add it onto stack
3. Execute it - is it done?
4. If it's done, pop it off the stack
5. If it's not done but sees something else...
      put that "something else" on top of the stack!
6. Continue execution until everything is off the stack
7. Fin.

*(This is a precursor to recursion)

Current Methods being run at the top of the call stack are referred to as the:
"Execution Context"

Fun Fact: the website "Stack overflow!" (reference to a call stack memory error)

-------------

Assignment:
1. Implement 2 different functions, each with a single console.log("(func name)")
    Name each "A", "B"
2. You can only call (emphasis on call) "A" Exactly ONE TIME.
4. Each function takes in one parameter, 'k'.
5. "A" returns the value of 'k' squared.
6. "A" cannot perform any mathematic operations.

Think about how the call stack interprets your program, which function finished first?

# This was a previous assignment
My Video:
https://www.youtube.com/watch?v=fw5qBAqHIcI
(Very exciting stuff!... one of my first videos take it easy on me)

Thursday Night:
Drawing Visualization to come over Zoom
