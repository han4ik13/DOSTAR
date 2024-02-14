import { NavLink } from 'react-router-dom';

import './BurgerMenu.css'

export const BurgerMenu = () => {

	const activeLink = 'nav__link active';
	const normalLink = 'nav__link';

	function burgerBtn () {
			document.querySelector('.body').classList.toggle('active');
			document.querySelector('.burger-menu__icon').classList.toggle('active');
			document.querySelector('.burger-menu').classList.toggle('active');
			document.querySelectorAll('.nav__link').forEach((e) => e.addEventListener('click', () => {
				document.querySelector('.body').classList.remove('active');
				document.querySelector('.burger-menu__icon').classList.remove('active');
				document.querySelector('.burger-menu').classList.remove('active');
			}))
	}

	return (
	<>
		<div className='burger-menu__icon' onClick={burgerBtn} >
			<span></span>
		</div>
		<div className="burger-menu">
				<nav className="burger-menu__nav">
					<ul className="list-reset burger-menu__nav">
						<li className="burger-menu__item"><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Главная</NavLink></li>
						<li className="burger-menu__item"><NavLink to="/About" className={({ isActive }) => isActive ? activeLink : normalLink}>История</NavLink></li>
						<li className="burger-menu__item"><NavLink to="/Menu" className={({ isActive }) => isActive ? activeLink : normalLink}>Меню</NavLink></li>
						<li className="burger-menu__item"><NavLink to="/Delivery" className={({ isActive }) => isActive ? activeLink : normalLink}>Доставка</NavLink></li>
						{/* <li className="burger-menu__item"><NavLink to="/Contact" className={({ isActive }) => isActive ? activeLink : normalLink}>Контакты</NavLink></li> */}
					</ul>
				</nav>
			</div>
	</>
	)
}
