import React from 'react';
import {render} from 'react-dom';
import List from './list';

render(
	<div>
		<h1>Hello World!</h1>
		<List />
	</div>,
	document.getElementById('root')
);