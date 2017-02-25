import React, { Component } from 'react';

//import styles from './leftMenu.css';

export default class LeftMenu extends Component {
	render () {
		return (
			<div className="left-menu">
				<ul className="left-menu__list">
					<li className="left-menu__item">
						<a className="left-menu__link" href="#">Сущность 1</a>
							<ul className="left-menu__drop-down">
								<li className="left-menu__drop-down_edit">Редактирование</li>
								<li className="left-menu__drop-down_remove">Удаление</li>
								<li className="left-menu__drop-down_create">Создание</li>
							</ul>
					</li>	
					<li className="left-menu__item"> 
						<a className="left-menu__link" href="#">Сущность 2</a>
					</li>
				</ul>	
			</div>
		);	
	}
}