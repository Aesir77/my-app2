import React, { useEffect, useState } from 'react';
import './Counter.css';

function Counter() {
const [count, setCount] = useState(0);

function Reset() {
    setCount(0);
};

useEffect(() => {
    document.title = `Why are you clicking for ${count} times`;
},[count]);

return (
<div className='Counter'>
<p>You clicked {count} times</p>

<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
<button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
<button onClick={Reset}>Reset</button>

</div>
);
};

export default Counter;