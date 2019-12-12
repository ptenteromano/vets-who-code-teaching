# DAY 4
## Week 8 - Comp Sci with Javascript
<hr>
# Recursion
The big scary word
<hr>

We will start with ZOOM.

Well Explained Video:
https://www.youtube.com/watch?v=KEEKn7Me-ms&t=103s

Description of "Recursion"?
- Let's say we have a very complex problem
- This problem requires a long history, or trail
- We can't solve this problem unless we know this history
- So we have to keep going through history
- But history itself doesn't know the answer
- Until it does.
- Then, the "solvable" history tells it's next neighbor it's answer
- And then it keeps going back up.
- Think of it like dominoes going one way to get the answer.
- Once the answer is found, the dominoes fall back the way they came.

Pros:
- It's elegant.
- Some (few) problems really need them.
- Depending on the situation, it may be the best solution

Cons:
- A ton of overhead (constantly looking back at itself)
- Could become a unappealing Big O
- Code can very implicit, even hard to understand
- Tough to debug
- Many problems have closed-form solutions!

Good news:
- Not very common at all in front end development
- But of course, a good skill (and problem-solving mindset) to have

-------------
Recursion in Code is just a function calling itself over and over again.
The calling function waits for its own return value when it calls itself.
-------------

The form Recursion takes:
- Recursion looks back and back until it has an answer
- The answer is called the BASE CASE.
- BASE CASE is a simple conditional that returns a real value.
- If the base case is not found, we move to the...
- RECURSIVE CASE
- The RECURSIVE CASE is the part that looks at it's own history.
- The RECURSIVE CASE will be called most of the time.
- The RECURSIVE CASE will sit and wait for a return value
- The call stack is very important in all of this

IMPORTANT
- The RECURSIVE CASE MUST NOT CALL THE EXACT THING AS ITSELF
- The argument given in the recursive case MUST be altered in some way, heading towards the base case.
-------------

Assignment:
1. We want to know the sum of the first N integers. ie: n=5, then 5+4+3+2+1 = 15
2. First, find the closed form solution of this, and code a function.
3. Then, write the recursive function of this.
4. Think about the factorial method we went over.

Bonus:
4. If you truly want a challenge, code the fibonacci sequence (recursively).
