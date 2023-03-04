import {Image, Video} from '@shopify/hydrogen';
import {HeroSwiper} from '../HeroSwiper.client';
import ChvronIcon from '~/assets/icons/chevron.svg';

import {Heading, Text} from '~/components';

export function Hero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  spread,
  spread_2,
  spread_3,
  spreadSecondary,
  top,
}) {
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="animate-reveal-top-bottom">
              <div className="sm:mb-8 sm:flex sm:justify-center">
                <img
                  className="object-cover h-64 w-64 m-auto"
                  src="src/assets/images/sparks logo.png"
                />
              </div>
              <div className="text-center text-white">
                <Heading format as="h2" size="display">
                  SPARKS
                </Heading>
                <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                  BEAUTY & CARE
                </h2>
                <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold">
                  Salon de Frumusețe și Îngrijire Corporală
                </p>
              </div>
              <div className="animate-reveal-bottom-top">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                    <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                      PROGRAMEAZĂ-TE
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-12 sm:mt-48">
                  <div className="animate-bounce">
                    <img
                      className="h-6 w-6 rotate-90 fill-white"
                      src={ChvronIcon}
                    />
                  </div>
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="animate-reveal-top-bottom">
              <div className="sm:mb-8 sm:flex sm:justify-center">
                <img
                  className="object-cover h-64 w-64 m-auto"
                  src="src/assets/images/sparks logo.png"
                />
              </div>
              <div className="text-center text-white">
                <Heading format as="h2" size="display">
                  SPARKS
                </Heading>
                <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                  BEAUTY & CARE
                </h2>
                <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold">
                  Salon de Frumusețe și Îngrijire Corporală
                </p>
              </div>
              <div className="animate-reveal-bottom-top">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                    <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                      PROGRAMEAZĂ-TE
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-12 sm:mt-48">
                  <div className="animate-bounce">
                    <img
                      className="h-6 w-6 rotate-90 fill-white"
                      src={ChvronIcon}
                    />
                  </div>
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="animate-reveal-top-bottom">
              <div className="sm:mb-8 sm:flex sm:justify-center">
                <img
                  className="object-cover h-64 w-64 m-auto"
                  src="src/assets/images/sparks logo.png"
                />
              </div>
              <div className="text-center text-white">
                <Heading format as="h2" size="display">
                  SPARKS
                </Heading>
                <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold">
                  BEAUTY & CARE
                </h2>
                <p className="hidden sm:block mt-6 text-lg leading-8 text-white font-bold">
                  Salon de Frumusețe și Îngrijire Corporală
                </p>
              </div>
              <div className="animate-reveal-bottom-top">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-white ">
                    <span className="w-0 h-0 bg-white absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-white font-semibold transition-colors duration-300 ease-in-out group-hover:text-black z-10">
                      PROGRAMEAZĂ-TE
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-12 sm:mt-48">
                  <div className="animate-bounce">
                    <img
                      className="h-6 w-6 rotate-90 fill-white"
                      src={ChvronIcon}
                    />
                  </div>
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
      {/* {typeof document !== 'undefined' && ( */}
      <HeroSwiper swiperElements={swiperElements} />
      {/* )} */}
    </section>
  );
  // <section
  //   className={`relative justify-end flex flex-col w-full ${
  //     top && '-mt-nav'
  //   } ${
  //     height === 'full'
  //       ? 'h-screen'
  //       : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
  //   }`}
  // >
  //   <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
  //     {spread?.reference && (
  //       <div className="">
  //         <SpreadMedia
  //           scale={2}
  //           sizes={
  //             spreadSecondary?.reference
  //               ? '(min-width: 80em) 700px, (min-width: 48em) 450px, 500px'
  //               : '(min-width: 80em) 1400px, (min-width: 48em) 900px, 500px'
  //           }
  //           widths={
  //             spreadSecondary?.reference ? [500, 450, 700] : [500, 900, 1400]
  //           }
  //           width={spreadSecondary?.reference ? 375 : 750}
  //           data={spread.reference}
  //           loading={loading}
  //         />
  //       </div>
  //     )}
  //   </div>
  // <div class="relative px-6 lg:px-8">
  //   <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
  //     <div class="hidden sm:mb-8 sm:flex sm:justify-center">
  //       <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
  //         Announcing our next round of funding.{' '}
  //         <a href="#" class="font-semibold text-indigo-600">
  //           <span class="absolute inset-0" aria-hidden="true"></span>Read
  //           more <span aria-hidden="true">&rarr;</span>
  //         </a>
  //       </div>
  //     </div>
  //     <div class="text-center">
  //       <Heading format as="h2" size="display" class="">
  //         {heading.value}
  //       </Heading>
  //       <p class="mt-6 text-lg leading-8 text-gray-600">
  //         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
  //         lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
  //         fugiat aliqua.
  //       </p>
  //       <div class="mt-10 flex items-center justify-center gap-x-6">
  //         <a
  //           href="#"
  //           class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //         >
  //           Get started
  //         </a>
  //         <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
  //           Learn more <span aria-hidden="true">→</span>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  //     <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
  //       <svg
  //         class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
  //         viewBox="0 0 1155 678"
  //       >
  //         <path
  //           fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
  //           fill-opacity=".3"
  //           d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
  //         />
  //         <defs>
  //           <linearGradient
  //             id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
  //             x1="1155.49"
  //             x2="-78.208"
  //             y1=".177"
  //             y2="474.645"
  //             gradientUnits="userSpaceOnUse"
  //           >
  //             <stop stop-color="#9089FC" />
  //             <stop offset="1" stop-color="#FF80B5" />
  //           </linearGradient>
  //         </defs>
  //       </svg>
  //     </div>
  //   </div>
  // <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 bg-gradient-to-t dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
  //   {heading?.value && (
  //     <Heading format as="h2" size="display" className="max-w-md">
  //       {heading.value}
  //     </Heading>
  //   )}
  //   {byline?.value && (
  //     <Text format width="narrow" as="p" size="lead">
  //       {byline.value}
  //     </Text>
  //   )}
  //   {cta?.value && <Text size="lead">{cta.value}</Text>}
  // </div>
  // </section>
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
