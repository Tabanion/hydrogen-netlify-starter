import Hair from '../../../public/hair-1.jpg';
import Haircut from '../../../public/haircut.jpg';
import Manicure from '../../../public/manicure.jpg';
import {HeroSwiper} from '../HeroSwiper.client';
import FlowerShape from '../../../public/flower-shape.png';

export const AboutUsSwiper = () => {
  return (
    <div className="m-auto mt-16 w-full xl:w-1/2 flex xl:mt-auto justify-center">
      <img
        className="left-0 bottom-48 absolute sm:top-8 sm:left-12 animate-float-object opacity-50"
        src={FlowerShape}
      />
      <div className="w-2/3 relative">
        <div className="w-full h-full absolute bottom-8 left-6 xl:bottom-16 xl:left-12 bg-beliseLight"></div>
        <HeroSwiper
          swiperElements={IMAGES.map((image) => (
            <img src={image.src} alt={image.alt} />
          ))}
        />
      </div>
    </div>
  );
};

const IMAGES = [
  {
    src: Hair,
    alt: 'woman hair style',
  },
  {
    src: Haircut,
    alt: 'Barber man style',
  },
  {
    src: Manicure,
    alt: 'woman manicure salon',
  },
];
