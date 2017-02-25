import React, { Component } from 'react';
import { Link } from 'react-router';

//import styles from './leftMenu.css';

export default class LeftMenu extends Component {
	render () {
		return (
			<div className="left-menu">
				<ul className="left-menu__list">
					<li className="left-menu__item">
						<Link to="/" className="left-menu__link">Сущность 1</Link>
							<ul className="left-menu__drop-down">
								<li className="left-menu__drop-down_edit">
									<Link to="/edit">Редактирование</Link>
								</li>
								<li className="left-menu__drop-down_remove">
									<Link to="/del">Удаление</Link>
								</li>
								<li className="left-menu__drop-down_create">
									<Link to="/create">Создание</Link>
								</li>
							</ul>
					</li>	
					<li className="left-menu__item"> 
						<a className="left-menu__link" href="#">Сущность 2</a>
					</li>
				</ul>
				{this.props.children}	
			</div>
		);	
	}
}