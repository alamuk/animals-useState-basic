# Event and State System in React

1. Event system = how we detect a user doing something inside our app.
   such as clicking on button/ dragging an element / typing and so on

2. State System = how we somehow update the content on the screen.

--------------
## Event system
--------------

- the event system just tells us user is doing something. it does not alon change anything.

### Event System: 6 steps

1. decide what kind of event we want to want for.  (Note: listing the
   event) (https://legacy.reactjs.org/docs/events.html)
2. create a function. Usually called an event handler / callback function
3. Name the function using the pattern of the ``handle + EventName``
4. Pass the function as a prop to the plain element
5. make sure we pass the function using a valid event name (onClick, onMouseOver,
6. Make sure we pass a reference to the function (don't call it)

#### Note:

1. every time we do the specific event. its change the state.
   the most important event we mostly used are:

- onclick = a user clicks on something in the same page - button/ image / text/ dragging
- onChange = a user types in a text input

1. handle/ callback function means this function automatically calls by another piece of code.
   means someone going to call it.

2. name is not requiring same way, but it is a Community convention.

3. plain elements = div/ button/ span and so on.
   we use the event system for a custom component as well.
   we pass it as a prop

4. we need to pass this function in a valid event.

5. pass a reference to the function (don't call it). only the function name.

- why we don't use() with the function. because it invoked the function without calling it. as soon as the component
  renders.
- how we can pass the function.
  onClick={handleClick}
  onClick={()=> {console.log('its click')}}
  onClick={()=>console.log('its click')}
  onClick={function()=> {console.log('its click')}}

----------------------------------------------------------------------------------
## State system
---------------
if we want to update something/ change something after user does something.
we need to use the state system.
we re-render the application when update is happened.

useState: start with two parameters.

1. variable
   a function—which updated variable values

2. where will show the variable update — we can do that throw jsx return()

3. how it will be updated:
   all the logic will be in the function that comes with the state.
   the variable `value` in the function `will be changed` every time event click/ happened.

const [count, setCount] = useState(0);
`count` value beginning was (0) then `one click` - it changed to (1) two clicks changed= count= 2
useState(0)= means what value we want to show user when they will come to our app.
like — count: 0
the variable can be number, string, object, array

most of the time we the variable state in the jsx.

// NEVER GOING TO
count = 123
we always use the `setCount` to change its value.
setCount(123)
setter function = set the value every time we click.
in setCount(count Value will be here) // setCount(35) so, count= 35

- const [count, setCount] = useState(0);

array destructing = [count, setCount]


## State System: 4 steps
----------------

1. Define a piece of state with the useState function
2. Give a value to useState function. this is the default, starting value for our piece of state.
3. use the state in some way in our component (often in the return JSX)
4. When a user does something, update the piece of the state. Causes React to render the component
5. one thing update for one state.

--------------
### Array:  destructuring;
-----------

```


 function makeArray() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

    / const myArray = makeArray();
    // const firstArray = myArray[0];
    // const secondArray = myArray[1];
    // const lastArray = myArray[myArray.length - 1];

    const [firstArray, secondArray] = makeArray(); // destructuring //
    console.log(firstArray, secondArray);



    Math.random and Array
    -------------------------
    function getRandomAnimals() {
      const animals = ['cow', 'dog', 'hours', 'bird', 'camel'];

      return animals[Math.floor(Math.random() * animals.length)];
    }

    console.log(getRandomAnimals());

```

Why we are not doing push(): because its modify the state.
We never modify the state directly
animals.push(getRandomAnimals()); // its modified piece of stat.

setAnimals([...animals, getRandomAnimals()]);


-----------
### map()
---------------------
it takes the item from array one by one and creates a new array box and put in that with structure.

``` 
const renderAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  //////or ////////
  const renderAnimal = [
 <AnimalShow type={animal[0]} />
 <AnimalShow type={animal[1]} />
 <AnimalShow type={animal[2]} />
  ]



    // code //

function App() {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100);

  function handleClick() {
    setCount(count + 1); // count value beginning was (0) then `one click` - it changed to (1) 2 clicks = count= 2
    setDecrement(5);
  }
  return (
    <div>
      <button onClick={handleClick}>Add Animals</button>
      <div>Number of animals: {count}</div>
      <div>Number of animals: {decrement}</div>
    </div>
  );
}

export default App;

```
-----------------------------------------------------------------------------------------
# useEffect Hook:
-----------------
### When our arrow call-back function calls:

1. Call after first render, Never call again.

```
useEffect(() => {
console.log('hi')}, [] )

```

1. Call after first render, also call every render

```
useEffect(() => {
console.log('hi')})

```

1. Call after first render, also call after render if 'counter' variable changed.

```
useEffect(() => {
console.log('hi')}, [counter] )
```

### Understanding the Arrow call-back function's return value:

when we use useEffect we are passing a function.

`<div onClick={() => console.log('clicked')}>` test

for useEffect callback function: Return:

- Not Allow return for number.
  `return 5`

- Not Allow return for string.
  `return 'hi'`

- Cannot Use async/ await before arrow function.

```
function App() {

useeffect( async() => {         // not allow because it returns a promises automatically behind the sceens. 
const res = await fetch()
}, [])

}
```

### ONLY ALLOW:

when we use useEffect we are passing a function.
which holds another function and that we need to allow returning.
return another function

```typescript
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    return () => {
      console.log('i am allowed');
    }
  }, []);
}


// EXAMPLE - 2
useEffect(() => {
  document.body.onclick = () => {
    console.log(counter);
  };
  const cleanUp = () => {
    console.log('cleanUp');
  };
  return cleanUp;
}, []);
```

anything inside the useEffect function only be called when useEffect function runs, not the component run.

how the function call:

as it is bringing the previous value of the function every time it is called with new value of the function.
so, we need to clean up previous call by returning fn with clean up.
(we are a previous event handle and adding a brand new on it)

Note:
if we do use any function inside this useEffect, we need to undo this at the end.
Like if we use an event handler for a result. After using it, we need to remove this event.
Otherwise, it will value call that function everytime we call one for previous calls another for new call.

### Understanding State variable references

### useCallback hook

It is updating different `counter variable` not the first one. First one always stay same.
Outside the useEffect() function. Everything will updated as normal.
It froze the code inside it base on its terms above.

eslint arrow fix in useEffect
### useCallback Hook:
---------------
- it is us to tell React that our function isn't actually changing over time.
- Fixes bugs around useEffect and other similar situations
- follows similar conventions as udeEffect(second argument is an array)

```
const [books, setBooks ] = useState([])

const fetchBooks = useCallback( async () => {
 const response = await axios.get('http//') ;
 setBooks(response.data);
 }, []);

```

### map()

Top label element must be given a key prop
--------------------------------------------------------------------------------------------
# State system
--------------
### How to Design a State System

anything we use the term change content on the screen,
it's a sign that we need to use the state system

If a state changes in a page and we want it to use in different page,
we can use as a prop from that page to other page where it needed it.

### Q. where we should show the state change?

if the state is not showing this change in other place, we should define int he same component where it is needed.
But if that change needs to show in any other place we need to show it in the parent component. and send through a prop.
can be share this change with it.

### Q. Where will be event handler?

Event handler should usually be defined in the same component as the state it modifies or controls.
it might be used in a different component.

it will be used by prop system where it need it.

#### ques and ans:

1. when should I use state?
   when we need to change content on the screen, we will state.
2. what should it be called?

3. what type of data will my state be?
4. which component should it be defined in?

Essential part of the JS and React

- react does not print - booleans, nulls, undefined - true/false/null/0/undefined

Js Boolean Expressions

### || or operator - this gives back the first value that is truthy-

`100 || 200` here both are true, so it will take `100` as a true value.
`0 || 100` here `0` is false, so it will take `100` the second values and express it

Note:
it will look for the true value-whenever it find, it show the value.
If both are false, it will give the last value.

---------

### && and operator — this gives back the first false value or last true value.

`100 && 200` here both are true. so it will give expression the last value `200`
`0 && 200` here `0` is false, so it will give value  `0`
const content = isExpanded && <div>{

Note:
it will look for false value whenever it finds it will show that
If both are true, it will give the last value.

`{isExpanded && <div>{item.content}</div>}`
if `isExpanded` is true then show this  `<div>{item.content}</div>`
if `isExpanded` is false then return is false and false ie not rendering by React show nothing`

## Props Design

[
{label: `hello this is a label`, value: `hello`, }
{label: `hello this is a label`, value: `bollo`, }
{label: `hello this is a label`, value: `chllo`, }

]

Note = imaginary: object is `selected` here
if(selected.value === hello) {
sayHello();
}

lesion: 203 is very important.



-------------------
## console.log()
------------
to find out where we click in the web page

```typescript
const handleClick = (event) => console.log(event.target);
document.addEventListener('click', handleClick);


```

# Context
--------------------------------------------------------------------------------------
Normally without context, we pass down the props and event handler in many components to use it.
Specially, Event handler.E.g., editBookById, deleteBookById.

### Props:

Props all about to communicate parents and its children

### context makes it easier:

- it shares the Props across many components even it not links to each other.
- we can share: numbers, string, objects, function and many more.
- component can ask very particular of data from context. or object
- and function can ask for another component to work on it.
- it is not a replacement of Props systems
- it is not a replacement for Redux system. (centralized organization of data = redux)
-

## Steps Of context:
--------------------
### 1. Create Context
---------------------

- import the creation context {createContext} from React.
- create a const—where the context will be stored by using createContext function. Which will be an object.  
  ``const BooksContext = createContext()``
- here BookContext is an object — we name it based on where it will be store.
- this object 2 properties inside it. 1.Provider 2.Consumer
- provider: this component used to specify what data we want to share.
- Consumer: this component used to get access to data. `Not often used`

To use the Provider in our application: we will write like:
`<BooksContext.Provider/>`


### 2. Specify the data that will be shared.
--------------------------------------------
`<BooksContext.Provider value={5}/>`
`<MyComponent/>`
`<BooksContext.Provider>`

- `value={5}` = the value provider is supper special.
- whatever we put in the `value` that data will be shared with the rest of the app.
- here we are sharing number `5`.
- `<MyComponent/>` this component and its children now can access the value shared in the context value(5)
- `value` here we can pass anytype of data.
  `numbers, string, objects, arrays, objects with function and nested data on it`
- absolutely anything we can put here.
- whoever wants to use it, we need to nest up with the provider.
- `<BooksContext.Provider value={5}/>`
  `<MyComponent/>` // this
  `<BooksContext.Provider>`
- we usually put on the top of the App component.
-
    - `<BooksContext.Provider value={5}/>`
      `<App/>`
      `<BooksContext.Provider>`

### 3. Consume the Data
-----------------------

- to access the data and use it someway
- to access it - we import the `useContext` from React hook where we want to use this data
- we also import the context Object which we created in step-1
  `import { useContext } from 'react'`
  `import BooksContext from '/book'`
- then we will useContext hook and pass the context object by creating a new const.
  `const num = useContext(BooksContext)`
- here num will bring the value whatever we put in the `value` before.
- then we will use in JSX return or in the component logic.

### Value:

-`value` of the context - we can modify by using `state`.

- every time the state of the value changes from state, then it will render again to update.

### for `value` object we need to make another provider of the context.

- this provider will be for piece of `state` and `callback function`
- for custom `Provider` we will use same way, but there will be kind of state.
- Custom Provider

```javascript
import { creatContext, useState } from 'react';

const BooksContext = creatContext()

function Provider({ chidren }) {            // custom Provider
  const [count, setCount] = useState()
}

const valueToShared = {            // object that we want to share with components
  count: count,
  increment: () => {
    setCount(count + 1)             // this has a function 
  }
};

// return <BooksContext.Provider value={valueShared} children={children} />;
return <BooksContext.Provider value={valueToShared}>     
  {children} 
</BooksContext.Provider>

```

- therefore, when the count variable changes, it will render and change all the components where it has been used

- in the App we don't need to use `<BooksContext.Provider value={5}/>`
- we will use:
`import { Provider } from './StateManament/Contex/Books';`
`<Provider>`
`<App/>` // this is the children 
`<Provider>`

---------------
In the component where we are using, it will be the same as before. 
But, 
value will be `destructured` with `useContext(NameContext)`
example:
`const { count, incrementCount } = useContext(BooksContext);`
-------------------------------------------------------------------------------
### To use the context 
---------------------
we always use two things: 
#### 1. two imports:

```javascript
import { useContext } from 'react';
import NameOfTheContext from '../../file';
```
#### 2. use of useContext: 

```javascript
function Any(){
  const {'destruring anything we need from context'} = useContext(NameOfTheContext);
}
```


-----------------------------------------------------------------------------------------
# How to design state for context: 
----------------------------------
- it will be super critical when we do the redux. 
1. application State
2. Component State

## What Data we will share by Context: 
--------------------------------------
- we share objects, state, function
- it does not change anything state. it is a pro-dev approach. 

### 1. Application State:
- Data will be used by many components.
`listing Item` 
- `checkIn`
- `checkOut` // those will be in Application state.
  
### 2. Component State:
- Data will be used by few components.
`isOpen` // this will be in Component state. 

-------------------------------------------------------------------------------------------

# custom hook function: 
----------------------

```javascript
// was:
  const {books}= useBooksContext()

// we make new custom function: 
function useBooksContext(){
  return useBooksContext(BooksContext)
}

// then use new way 100% 
const {books} = useBooksContext()  

```
Note: here this custom hook allows us not to use two imports on the file. 

### 3(three) things we do fo making a custom hook: 
1. we write a function by using word `useNameOfTheHook`
custom hook use: logics the use of hook and useHooks and return it. 
2. usually reuse basic hooks like `useState` `useEffect`etc.
3. con a do a lot or do a little help to make readability and structure the code.