import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(() => {
		console.log('run function');
		return 4;
	});

	function decrementCount() {
		setCount((prevCount) => prevCount - 1);
	}

	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
	}

	return (
		<div>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;
