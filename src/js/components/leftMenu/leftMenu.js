import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './leftMenu.css';

export default class LeftMenu extends Component {
	render () {
		return (
			<div className={styles.leftMenu}>
				<ul className={styles.leftMenu__list}>
					<li className={styles.leftMenu__item}>
						<Link to="/" className={styles.leftMenu__link}>Сущность 1</Link>
							<ul className={styles.leftMenu__dropDown}>
								<li className={styles.leftMenu__dropDown_edit}>
									<Link to="/edit" className={styles.dropDowm__link}>Редактирование</Link>
								</li>
								<li className={styles.leftMenu__dropDown_remove}>
									<Link to="/del" className={styles.dropDowm__link}>Удаление</Link>
								</li>
								<li className={styles.leftMenu__dropDown_create}>
									<Link to="/create" className={styles.dropDowm__link}>Создание</Link>
								</li>
							</ul>
					</li>	
					<li className={styles.leftMenu__item}> 
						<a className={styles.leftMenu__link} href="#">Сущность 2</a>
					</li>
				</ul>
				{this.props.children}	
			</div>
		);	
	}
}