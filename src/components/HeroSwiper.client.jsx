import {register} from 'swiper/element/bundle';
import {Image, Video} from '@shopify/hydrogen';
register();

export function HeroSwiper({swiperElements}) {
  return (
    <>
      {/* <style>
        {`
        swiper-container {
          width: 100%;
          height: 100%;
        }
    
        swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        `}
      </style>
      <swiper-container
        class="mySwiper"
        navigation="false"
        space-between="30"
        centered-slides="true"
        autoplay-delay="4000"
        autoplay-disable-on-interaction="false"
        effect="fade"
      >
        {swiperElements.map((element, index) => (
          <swiper-slide key={index}>{element}</swiper-slide>
        ))}
      </swiper-container> */}
    </>
  );
}
