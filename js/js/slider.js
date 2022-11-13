// Инициализируем Swiper
let myImageSlider = new Swiper('.character__slider', {
	// Стрелки
	navigation: {
		nextEl: '.next',
		prevEl: '.prev'
	},
		// Количество слайдов для показа
		slidesPerView: 3,
		// Отступ между слайдами
		spaceBetween: 20,
				// Бесконечный слайдер
				loop: true,
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		630: {
			slidesPerView: 3,
		}
	},
});