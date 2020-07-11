import React from 'react';
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
// import 'swiper/css/swiper.css';

const SwiperSlider = () => {

  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    ContainerEl: 'div',
    containerClass: 'swiper-container',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 600
  }

  return (
    <>
      <div className="w-full md:w-2/3">
        <Swiper {...params} >
          <div>
            <img src="/images/books-1163695_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
          </div>
          <div>
            <img src="/images/books-1204029_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
          </div>
          <div>
            <img src="/images/books-1617327_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
          </div>
          <div>
            <img src="/images/books-1245690_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
          </div>
        </Swiper>
      </div>
      <div className="hidden md:flex flex-col ml-3 w-1/3">
        <div className="rounded mb-2 lg:mb-3">
          <img src="/images/storytelling-4203628_1920.jpg" className="rounded object-cover lg:h-40 h-28 w-full"/>
        </div>
        <div className="rounded">
          <img src="/images/professor-4860068_1280.jpg" className="rounded object-cover lg:h-40 h-28 w-full"/>
        </div>
      </div>
    </>
  )
}

export default SwiperSlider;