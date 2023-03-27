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
    category: 'Femei',
    subtitle: 'Get An Incredible Beauty Experience with SPARKS',
    services: [
      {
        title: 'Tunsoare',
        price: 700,
      },
      {
        title: 'Vopsire',
        price: 800,
      },
      {
        title: 'Manichiură',
        price: 450,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
      {
        title: 'Pedichiură',
        price: 550,
      },
    ],
  },
  {
    category: 'Bărbați',
    subtitle: 'Get An Incredible Beauty Experience with SPARKS',
    services: [
      {
        title: 'Tunsoare',
        price: 200,
      },
      {
        title: 'Barbă',
        price: 150,
      },
      {
        title: 'Complex',
        price: 350,
      },
      {
        title: 'Tonare',
        price: 200,
      },
    ],
  },
];
