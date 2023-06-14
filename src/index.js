import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// here we're directly rendering whole UI using root.render

function tick() {
	const element = (
		<div>
			<h1>Hello World!!!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);

	// root.render will update the UI every time tick is called.

	root.render(element);
}

// setInterval will call function tick every second 

setInterval(tick, 1000);