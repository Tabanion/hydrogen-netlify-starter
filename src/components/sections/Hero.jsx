import {Image, Link, Video} from '@shopify/hydrogen';
import {HeroSwiper} from '../HeroSwiper.client';

import {Heading} from '~/components';
import {ChevronDown} from '../index';
import Logo from '/logo.png';

export function Hero({height, loading, spread, spread_2, spread_3, top}) {
  const swiperElements = [];
  if (spread?.reference) {
    swiperElements.push(
      <>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          <div className="animate-scale-image scale-110">
            <SpreadMedia
              scale={2}
              sizes={'(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'}
              widths={[500, 900, 1400]}
              width={750}
              data={spread.reference}
              loading={loading}
            />
          </div>
        </div>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip bg-black opacity-25"></div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32">
            <div>
              <div className="animate-reveal-top-bottom">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <img className="object-cover h-64 w-64 m-auto" src={Logo} />
                </div>

                <div className="text-center text-white">
                  <Heading format as="h2" size="display">
                    SPARKS
                  </Heading>
                  <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                    BEAUTY & CARE
                  </h2>
                  <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold font-serif">
                    Salon de Frumusețe și Îngrijire Corporală
                  </p>
                </div>
                <div className="animate-reveal-bottom-top">
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="https://n767677.alteg.io/">
                      <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                        <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                          PROGRAMEAZĂ-TE
                        </span>
                      </button>
                    </Link>
                  </div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>,
    );
  }

  if (spread_2?.reference) {
    swiperElements.push(
      <>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          <div className="animate-scale-image scale-110">
            <SpreadMedia
              scale={2}
              sizes={'(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'}
              widths={[500, 900, 1400]}
              width={750}
              data={spread_2.reference}
              loading={loading}
            />
          </div>
        </div>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip bg-black opacity-25"></div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32">
            <div>
              <div className="animate-reveal-top-bottom">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <img className="object-cover h-64 w-64 m-auto" src={Logo} />
                </div>

                <div className="text-center text-white">
                  <Heading format as="h2" size="display">
                    SPARKS
                  </Heading>
                  <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                    BEAUTY & CARE
                  </h2>
                  <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold font-serif">
                    Salon de Frumusețe și Îngrijire Corporală
                  </p>
                </div>
                <div className="animate-reveal-bottom-top">
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="https://n767677.alteg.io/">
                      <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                        <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                          PROGRAMEAZĂ-TE
                        </span>
                      </button>
                    </Link>
                  </div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>,
    );
  }

  if (spread_3?.reference) {
    swiperElements.push(
      <>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          <div className="animate-scale-image scale-110">
            <SpreadMedia
              scale={2}
              sizes={'(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'}
              widths={[500, 900, 1400]}
              width={750}
              data={spread_3.reference}
              loading={loading}
            />
          </div>
        </div>
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip bg-black opacity-25"></div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32">
            <div>
              <div className="animate-reveal-top-bottom">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <img className="object-cover h-64 w-64 m-auto" src={Logo} />
                </div>

                <div className="text-center text-white">
                  <Heading format as="h2" size="display">
                    SPARKS
                  </Heading>
                  <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                    BEAUTY & CARE
                  </h2>
                  <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold font-serif">
                    Salon de Frumusețe și Îngrijire Corporală
                  </p>
                </div>
                <div className="animate-reveal-bottom-top">
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="https://n767677.alteg.io/">
                      <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                        <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                          PROGRAMEAZĂ-TE
                        </span>
                      </button>
                    </Link>
                  </div>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>,
    );
  }

  return (
    <section
      className={`relative justify-end flex flex-col w-full ${
        top && '-mt-nav'
      } ${
        height === 'full'
          ? 'h-screen'
          : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
      }`}
    >
      <HeroSwiper swiperElements={swiperElements} />
    </section>
  );
}

function SpreadMedia({data, loading, scale, sizes, width, widths}) {
  if (data.mediaContentType === 'VIDEO') {
    return (
      <Video
        previewImageOptions={{scale, src: data.previewImage.url}}
        width={scale * width}
        className="block object-cover w-full h-full"
        data={data}
        controls={false}
        muted
        loop
        playsInline
        autoPlay
      />
    );
  }

  if (data.mediaContentType === 'IMAGE') {
    return (
      <Image
        widths={widths}
        sizes={sizes}
        alt={data.alt || 'Marketing Banner Image'}
        className="block object-cover w-full h-full"
        // @ts-ignore
        data={data.image}
        loading={loading}
        width={width}
        loaderOptions={{scale, crop: 'center'}}
      />
    );
  }

  return null;
}
