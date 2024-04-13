import { NavLink } from 'react-router-dom';

import './Header.css'

import logo from '../../img/svg/logo-white.svg'
import { BurgerMenu } from '../burgerMenu/BurgerMenu';

export const Header = () => {

	const activeLink = 'nav__link active';
	const normalLink = 'nav__link';

	return (
		<header>
			<div className="container">
				<div className="wrapper">
					<NavLink className="logo" to="/"><img src={logo} alt="Logo"/></NavLink>
					<nav className="nav">
						<ul className="list-reset nav__list">
							<li className='nav__item'><NavLink to="/" className={ ({isActive}) => isActive ? activeLink : normalLink }>Главная</NavLink></li>
							<li className='nav__item'><NavLink to="/About" className={ ({isActive}) => isActive ? activeLink : normalLink }>История</NavLink></li>
							<li className='nav__item'><NavLink to="https://do-star-konaev.ps.me/" className={ ({isActive}) => isActive ? activeLink : normalLink }>Меню</NavLink></li>
							<li className='nav__item'><NavLink to="/Delivery" className={ ({isActive}) => isActive ? activeLink : normalLink }>Доставка</NavLink></li>
							{/* <li className='nav__item'><NavLink to="/Contact" className={ ({isActive}) => isActive ? activeLink : normalLink }>Контакты</NavLink></li> */}
						</ul>
					</nav>
					<BurgerMenu/>
				</div>
			</div>
		</header>
	)
}
