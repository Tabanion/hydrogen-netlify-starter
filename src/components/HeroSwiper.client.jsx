// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation, EffectFade} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export function HeroSwiper({swiperElements}) {
  return (
    <div style={{maxWidth: '100%'}}>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper"
        effect={'fade'}
      >
        {swiperElements.map((element, index) => (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
