import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// this time we converted Clock into a component of it's own
function Clock({date}) {
	return (
		<div>
			<h1>Hello World</h1>
			<h2>It is {date.toLocaleTimeString()}.</h2>
		</div>
	);
}

// tick1 will call clock compnent and will render output on screen
function tick1(){
	root.render(<Clock date={new Date()}/>);
}

// setInterval will call tick1 every second
setInterval(tick1, 1000);