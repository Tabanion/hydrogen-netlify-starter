import CheckmarkIcon from '~/assets/icons/checkmark.svg';
import {Link} from '@shopify/hydrogen';

const bgImage =
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3626.jpg?v=1678739989';

export const PriceList = ({withNav}) => {
  return (
    <section
      className={`relative flex flex-col w-full ${withNav && '-mt-nav'}`}
    >
      <div className="w-full h-full bg-black absolute top-0 opacity-50 z-0"></div>
      <div
        className="w-full h-full sm:bg-fixed bg-cover bg-center flex flex-col gap-8 justify-center p-6 pt-16 sm:p-12 sm:pt-24 lg:px-80 lg:py-24 lg:pt-32"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {SERVICE_PRICE_LIST.map(({category, subtitle, services}) => (
          <div className="z-10">
            <div className=" text-center w-full 2xl:w-1/2 mx-auto my-6">
              <p className="font-semibold text-white drop-shadow-basic sm:text-2xl">
                {category}
              </p>
              <h1 className="text-2xl sm:3xl md:text-5xl text-white font-bold drop-shadow-basic">
                {subtitle}
              </h1>
            </div>

            <div className="flex flex-row md:justify-center align-center ">
              <ul className="list-none pl-0 w-full 2xl:px-48">
                {services.map(({title, price}, index) => (
                  <li
                    key={`${title}-${index}`}
                    className="flex text-sm whitespace-nowrap my-3 mx-0 w-full items-center transition duration-150 ease-linear hover:scale-105 hover:cursor-pointer"
                  >
                    <img className="w-4 h-4 mr-2" src={CheckmarkIcon} />
                    <div className="flex w-full">
                      <p className="whitespace-nowrap text-white font-bold sm:text-lg drop-shadow-basic">
                        {title}
                      </p>
                      <div className="w-full h-full p-1.5 pt-0 self-end">
                        <div className="w-full h-full border-b border-dotted"></div>
                      </div>
                      <p className="whitespace-nowrap text-white font-bold sm:text-lg drop-shadow-basic">
                        {price} MDL
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="https://n767677.alteg.io/">
            <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white shadow-xl">
              <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                PROGRAMEAZĂ-TE
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SERVICE_PRICE_LIST = [
  {
    category: 'Freză',
    subtitle: '',
    services: [
      {
        title: 'Freză păr scurt',
        price: 300,
      },
      {
        title: 'Freză păr mediu',
        price: 400,
      },
      {
        title: 'Freză păr lung',
        price: 500,
      },
      {
        title: 'Coafură',
        price: '500 - 1000',
      },
      {
        title: 'Aranjare',
        price: '250 - 500',
      },
      {
        title: 'Brushing',
        price: '400 - 600',
      },
      {
        title: 'Vopsirea părului',
        price: '600 - 1500',
      },
      {
        title: 'Balayage',
        price: '1800 - 2800',
      },
      {
        title: 'AirTouch',
        price: '2500 - 4000',
      },
      {
        title: 'Tonare',
        price: '800 - 1800',
      },
      {
        title: 'Vopsire rădacini',
        price: '600 - 1000',
      },
      {
        title: 'Nashi Argan FILER THERAPY',
        price: '500 - 1000',
      },
      {
        title: 'Davines Gloss',
        price: '400 - 500',
      },
      {
        title: 'Natural Tech Norshing',
        price: '500 - 1000',
      },
      {
        title: 'On Protection',
        price: '500 - 1000',
      },
    ],
  },
  {
    category: 'Make Up',
    subtitle: '',
    services: [
      {
        title: 'Expres machiaj',
        price: 400,
      },
      {
        title: 'Machiaj',
        price: 650,
      },
      {
        title: 'Machiaj de seara',
        price: 850,
      },
      {
        title: 'Gene false',
        price: 150,
      },
      {
        title: 'Stilizare sprincene',
        price: 100,
      },
      {
        title: 'Stilizare sprincene bărbați',
        price: 150,
      },
      {
        title: 'Vopsirea cu hena',
        price: 250,
      },
      {
        title: 'Biofixarea',
        price: 400,
      },
      {
        title: 'Biofixare + hena',
        price: 450,
      },
      {
        title: 'Extensii gene 2D',
        price: 400,
      },
      {
        title: 'Extensii gene 3D',
        price: 500,
      },
      {
        title: 'Extensii gene efect special',
        price: 600,
      },
    ],
  },
  {
    category: 'Nail',
    subtitle: '',
    services: [
      {
        title: 'Manichiură combinată',
        price: 200,
      },
      {
        title: 'Manichiură combinată bărbați',
        price: 250,
      },
      {
        title: 'Acoperire cu ojă',
        price: 100,
      },
      {
        title: 'Manichiură + Lac-gel / shellac',
        price: 400,
      },
      {
        title: 'Manichiură + Acoperire gel',
        price: 450,
      },
      {
        title: 'Manichiură + Alungire',
        price: '450 - 650',
      },
      {
        title: 'Inlăturare gel',
        price: 100,
      },
      {
        title: 'Design/franch',
        price: 50,
      },
      {
        title: 'Pedichiură complexă',
        price: 350,
      },
      {
        title: 'Aplicare ojă',
        price: 100,
      },
      {
        title: 'Pedichiură + lac-gel',
        price: 400,
      },
      {
        title: 'Pedichiură complexă + lac-gel',
        price: 500,
      },
      {
        title: 'Pedichiură bărbați',
        price: 500,
      },
    ],
  },
  {
    category: 'BarberShop',
    subtitle: '',
    services: [
      {
        title: 'Tunsoare copil',
        price: 200,
      },
      {
        title: 'Tunsoare copil (păr lung)',
        price: 250,
      },
      {
        title: 'Tunsoare bărbat',
        price: 250,
      },
      {
        title: 'Tunsoare bărbat (păr lung)',
        price: 300,
      },
      {
        title: 'Complex (tunsoare + barbă)',
        price: 350,
      },
      {
        title: 'Modelare barbă',
        price: 150,
      },
      {
        title: 'Epilare nas',
        price: 50,
      },
      {
        title: 'Epilare urechi',
        price: 50,
      },
    ],
  },
];
