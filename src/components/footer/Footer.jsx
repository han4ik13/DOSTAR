import './Footer.css'

import logo from '../../img/svg/logo-white.svg'

import 'boxicons'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
	return (
		<footer>
			<div className="container footer-container">
				<div className="wrapper">
						<NavLink className="logo" to="/"><img src={logo} alt="Logo"/></NavLink>
					<div className="footer__right">
						<ul className="list-reset social__list">
							<li className="social__item">
								<a href="https://www.instagram.com/do.star.coffee/" target='_blank' className="social__link">
									{/* <box-icon size='md' name='instagram-alt' type='logo' color='#f4c1dd' ></box-icon> */}
									<box-icon size='md' color='#f4c1dd' type='logo' name='instagram-alt'></box-icon>
								</a>
							</li>
							<li className="social__item">
								<a href="tel:+77772987593" className="social__link">
									<box-icon size='md' name='phone' type='solid' color='#f4c1dd' ></box-icon>
								</a>
							</li>
							<li className="social__item">
								<a href="https://2gis.kz/almaty/branches/70000001038329411" target='_blank' className="social__link">
								<box-icon size='md' name='map' type='solid' color='#f4c1dd' ></box-icon>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
