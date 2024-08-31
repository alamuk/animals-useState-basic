# Event and State System in React  

1. Event system = how we detect a user doing something inside our app.
 such as clicking on button/ dragging an element / typing and so on

2. State System = how we somehow update the content on the screen.


--------------
Event system
--------------
- event system just tells us user is doing something. it does not alon change anything.


### Event System: 6 steps
1. decide what kind of event we want to want for.  (Note: listing the event) (https://legacy.reactjs.org/docs/events.html)
2. create a function. Usually called an event handler / callback function
3. Name the function using the pattern of the ``handle + EventName``
4. Pass the function as a prop to the plain element
5. make sure we pass the function using a valid event name (onClick, onMouseOver,
6. Make sure we pass a reference to the function(don't call it)



#### Note:
1. every time we do the specific event. its change the state.
 the most important event we mostly used are:
- onclick = a user clicks on something in the same page - button/ image / text/ dragging
- onChange = a user types in a text input

2. handle/ callback function means this function automatically calls by another piece of code.
means someone going to call it.

3. name is not requiring same way but it is a Community convention.

4. plain elements = div/ button/ span and so on. we use the event system for a custom component as well.
we pass it as a prop

5. we need to pass this function in a valid event.

6. pass a reference to the function(don't call it). only the function name.
- why we dont use() with the function. because it invoked the function without calling it. as soon as the component renders.
- how we can pass the function.
onClick={handleClick}
onClick={()=> {console.log('its click')}}
onClick={()=>console.log('its click')}
onClick={function()=> {console.log('its click')}}




--------------
## State system
--------------
if we want to update something/ change something after user doing something. we need to use the state system.
we re-render the application when update is happened.

useState: start with two parameters.
1. variable
 a function—which updated variable values

2. where will show the variable update — we can do that throw jsx return()

3. how it will be updated:
all the logic will be in the function that comes with the state.
the variable `value` in the function `will be changed` every time event click/ happened.

const [count, setCount] = useState(0);
`count` value beginning was (0) then `one click` - it changed to (1) 2 clicks changed= count= 2

useState(0)= means what value we want to show user when they will come to our app. like-  count: 0
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
3. use the state in some way in our component ( often in the return JSX)
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
----------
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