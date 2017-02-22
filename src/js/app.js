import React from 'react';
import {render} from 'react-dom';
import List from './list';

render(
	<div>
		<List/>
		<h1>Hello World!</h1>
	</div>,	
	document.getElementById('root')
);