 # React ![React Logo](./React.js_logo.png) First Impressions

I've been a long time web developer of sorts. I started in the early 2000s writing my first website in [Microsoft's Frontpage](https://en.wikipedia.org/wiki/Microsoft_FrontPage) (remember that?). I also maintain several Word Press sites for small businesses, but I never really had to code anything. Four months ago I didn't know the difference between a function and a data type. I didn't even understand the concept of the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction). Fortunately, I was selected to participate in [Vets Who Code](https://vetswhocode.io/). VWC is a veteran-led and operated non-profit that focuses on training veterans, like me, in web development and software engineering principles, free of charge with the focus on starting careers as javascript developers. 

 This week we started learning about [React](https://reactjs.org/). From the React site: 

 >React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
  
Based on my limited experience writing HTML/CSS/JavaScript, React is a game changer. In my opinion, it combines the best of Javascript and use the DOM API (called the virtual DOM) to create **FAST** single page applications. Though it has a pretty steep learning curve (what doesn't), I can see that learning it will improve my skills as a coder. 

While I still believe learning [vanilla JavaScript](http://vanilla-js.com/) before learning any frameworks or libraries, React is defintely going to make my life easier. Let's see how React stacks up to vanilla JS:

### JavaScript

- The user interface is created through HTML.
- Data is stored in the DOM.

- To update the UI, the JS has to interact with the DOM by adding or removing elements.
- You can structure JS any way you see fit.

### React ![React Logo](./React.js_logo.png)
- React dynamically creates the UI using components.
- Data is stored in the [virtual DOM](https://reactjs.org/docs/faq-internals.html). The virtual DOM is stored in JS variables or the memory and it is synced with the DOM as the UI is rendered. 
- The UI in React is updated automatically through setting and changing states. 
- React has to be structured as components. 
  
  To render an element into the DOM is very simple. You start with this one div in your HTML:
  
  `<div id="root"></div>`
  
  To interact with the DOM in React you render it using `ReactDOM.render()`

Hello, World! would look like this:

```javascript
const element = <h1>Hello, World</h1> 
ReactDOM.render(element, document.getElementById('root'));
```
React also let's you update state as needed. In this simple example I am going to make a button count up one every time it is pressed. 
```javascript
const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};
ReactDOM.render(<Button />, document.getElementById('root'));
```
Which become this:

![screenshot](./btn0.jpg)

Clicked 5 times:

![screenshot](./btn5.jpg)

The same code in JS is very different:

```HTML
    <p>You clicked <a id="clicks">0</a> times</p>
    <button id="btn">Click Me</button>
    <script>
        let btn = document.getElementById('btn')
        let clicks = 0
        let clickCount = () =>{
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
        }
        btn.addEventListener('click', clickCount)
    </script>
```
I think the React code was a lot easier to understand than the JS. Anyway, that's all for now. I will keep updating as I learn more. 