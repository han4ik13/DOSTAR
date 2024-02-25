export const Delivery = () => {

	function firstBtn () {
		const arr = [...document.querySelectorAll('.delivery__btn')];
			arr[0].classList.add('active');
			if (arr[0].classList.value == 'btn delivery__btn active') {
				arr[1].classList.remove('active');
				document.getElementById('change').href = 'https://wolt.com/ru/kaz/almaty/restaurant/dostar-coffee-makataeva';
			}
	}
		function secondBtn () {
			const arr = [...document.querySelectorAll('.delivery__btn')];
			arr[1].classList.add('active');
			if (arr[1].classList.value == 'btn delivery__btn active') {
				arr[0].classList.remove('active');
				document.getElementById('change').href = 'https://wolt.com/ru/kaz/almaty/restaurant/dostar-coffee';
			}
	}

	return (
		<section>
			<div className="container delivery-container">
				<div className="delivery__place">
					<button className='btn delivery__btn active' onClick={firstBtn}>Makataeva</button>
					<button className='btn delivery__btn' onClick={secondBtn}>Kunaeva</button>
				</div>
				<div className="delivery-info">
					<div className="delivery__item">
						<h1 className="delivery-item__title">WOLT</h1>
						<img src="./wolt.webp" alt="" className="delivery-item__img"/>
						<a id='change' href="https://wolt.com/ru/kaz/almaty/restaurant/dostar-coffee-makataeva" target='_blank'><button className='btn delivery-item__btn'>Заказать</button> </a>
					</div>
					{/* <div className="delivery__item">
						<h1 className="delivery-item__title">САМОВЫВОЗ</h1>
						<img src="./delivery.webp" alt="" className="delivery-item__img"/>
						<a id='change' href="https://habr.com/ru/articles/247857/" target='_blank'><button className='btn delivery-item__btn'>Заказать</button></a>
					</div> */}
				</div>
			</div>
		</section>
	)
}
