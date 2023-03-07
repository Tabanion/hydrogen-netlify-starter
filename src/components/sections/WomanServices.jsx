import CheckmarkIcon from '~/assets/icons/checkmark.svg';
import {Link} from '@shopify/hydrogen';

const WomanBg =
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman-2.jpg?v=1678221887';

export const WomanServices = () => {
  return (
    <section className="relative">
      <div className="w-full h-full bg-black absolute top-0 opacity-25 z-0"></div>
      <div
        className="w-full h-full bg-fixed bg-cover bg-center flex flex-col-reverse lg:flex-row lg:gap-8 justify-center lg:justify-between p-8 md:p-12"
        style={{
          backgroundImage: `url(${WomanBg})`,
        }}
      >
        <div className="flex flex-col md:flex-row lg:justify-center align-center lg:ml-12 z-10 md:gap-12">
          <div className="px-4 sm:p-4 flex md:justify-center align-center">
            <ul className="list-none pl-0">
              {SERVICES.map((text, index) => (
                <li
                  key={`${text}-${index}`}
                  className="flex items-center text-sm whitespace-no-wrap gap-4 my-3 mx-0"
                >
                  <img className="w-4 h-4" src={CheckmarkIcon} />
                  <p className="text-white font-bold text-lg">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 sm:p-4 flex md:justify-center align-center">
            <ul className="list-none pl-0">
              {SERVICES.map((text, index) => (
                <li
                  key={`${text}-${index}`}
                  className="flex items-center text-sm whitespace-no-wrap gap-4 my-3 mx-0"
                >
                  <img className="w-4 h-4" src={CheckmarkIcon} />
                  <p className="text-white font-bold text-lg">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden mt-10 flex justify-center">
            <Link to="https://n767677.alteg.io/">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                  PROGRAMEAZĂ-TE
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="z-10 w-full lg:w-1/2">
          <p className="font-semibold text-white">WHAT ELSE WE DO</p>
          <h1 className="text-2xl sm:3xl md:text-5xl text-white font-bold">
            Get An Incredible Beauty Experience with SPARKS
          </h1>
          <div className="hidden md:block mt-10">
            <Link to="https://n767677.alteg.io/">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                  PROGRAMEAZĂ-TE
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
const SERVICES = [
  'Aroma Therapy',
  'Aroma Therapy Therapy',
  'Aroma Therapy',
  'Aroma Therapy',
  'Aroma Therapy',
  'Aroma Therapy Therapy',
  'Aroma Therapy',
  'Aroma Therapy',
];
