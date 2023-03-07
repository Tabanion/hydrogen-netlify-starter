import WomanBg from '~/assets/images/woman-2.jpeg';
import CheckmarkIcon from '~/assets/icons/checkmark.svg';
import {Link} from '@shopify/hydrogen';

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

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    ',
            }}
          />
          <h2 className="text-3xl font-bold mb-12 text-center">
            Projects we are<u className="text-blue-600"> proud of</u>
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Hollywood exhibition
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Genius Loci
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Big Apple
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Sun City
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/048.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Paris flavor
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
            <div
              className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: '50%'}}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/049.jpg"
                className="w-full transition duration-300 ease-linear align-middle"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">
                      Sky is the limit
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
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
