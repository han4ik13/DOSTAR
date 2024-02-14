import './Intro.css'

export const Intro = () => {
	return (
		<section className="intro-section">
				<div className="intro">
					<h1 className="intro__title">Do.Star</h1>
					<h2 className="intro__subtitle">Friendly coffee</h2>
					<a href="https://www.instagram.com/do.star.coffee/" target='_blank'>
						<button className='btn intro__btn'>Жизнь кофейни</button>
					</a>
				</div>
		</section>
	)
}
