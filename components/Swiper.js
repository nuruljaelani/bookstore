import SwiperCore,{ Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation, Pagination])

export default () => {
    return (
        <>
            <div className="w-full md:w-2/3">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    loop={true}
                    speed={200}
                    autoplay={{delay:500}}
                    pagination={{clickable:true, el: '.swiper-pagination'}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    wrapperTag={'div'}
                >
                    <SwiperSlide>
                        <img src="/images/books-1163695_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/books-1204029_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/books-1617327_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/books-1245690_1920.jpg" className="rounded object-cover h-60 lg:h-84 w-full" />
                    </SwiperSlide>
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
    );
  };