import { NavLink } from 'react-router-dom'
import './About.css'

export const About = () => {
	return (
		<section className='about'>
			<div className="container">
				<h3 className="title">История кофейни</h3>
				<div className="about__info">
						<p className="about__info-descr">Мы верим, что кофе объединяет людей ...</p>
					<NavLink to='/About'><button className='btn about__info-btn'>Узнать больше</button></NavLink>
				</div>
			</div>
		</section>
	)
}
