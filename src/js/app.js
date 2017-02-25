import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import LeftMenu from './components/leftMenu/leftMenu';
import Delete from './components/delete/delete';
import Edit from './components/edit/edit';
import Create from './components/create/create';
import Home from './components/home/home';

render(
	<Router history={browserHistory}>
		<Route path='/' component={LeftMenu}>
			<Route path='/' component={LeftMenu} />
			<Route path='edit' component={Edit} />
			<Route path='del' component={Delete} />
			<Route path='create' component={Create} />
		</Route>
	</Router>,		
	document.getElementById('root')
);