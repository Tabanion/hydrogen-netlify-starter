import {Image, Link, Video} from '@shopify/hydrogen';
import {HeroSwiper} from '../HeroSwiper.client';

import {Heading} from '~/components';
import {ChevronDown} from '../index';
import Logo from '~/assets/images/S-logo.png';

const images = [
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/laser3.jpg?v=1682179210',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3626.jpg?v=1678739989',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3606_2.jpg?v=1678739326',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3610_2.jpg?v=1678739346',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3611.jpg?v=1678739914',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3613.jpg?v=1678739931',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3618.jpg?v=1678739944',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3619.jpg?v=1678739954',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3620.jpg?v=1678739962',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3623.jpg?v=1678739973',
  'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/IMG_3634.jpg?v=1678740012',
];

export function Hero({top}) {
  return (
    <section
      className={`relative flex flex-col w-full h-screen ${top && '-mt-nav'}`}
    >
      <HeroSwiper
        swiperElements={images.map((src) => (
          <>
            <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
              <div className="animate-scale-image scale-110">
                <img className="block object-cover w-full h-full" src={src} />
              </div>
            </div>
            <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip bg-black opacity-40"></div>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-32">
                <div className="animate-reveal-top-bottom">
                  <div className="pl-16 sm:mt-8 sm:flex sm:justify-center">
                    <img
                      className="object-cover h-64 w-64 sm:h-80 sm:w-80 m-auto drop-shadow-basic"
                      src={Logo}
                    />
                  </div>

                  <div className="text-center text-white">
                    <Heading
                      format
                      as="h2"
                      size="display"
                      className="drop-shadow-basic"
                    >
                      SPARKS
                    </Heading>
                    <h2 className="text-xl sm:text-5xl whitespace-pre-wrap max-w-prose font-bold drop-shadow-basic">
                      BEAUTY & CARE
                    </h2>
                    <p className="tracking-wide hidden sm:block mt-6 text-2xl leading-8 text-white font-bold font-dance drop-shadow-basic">
                      Salon de Frumusețe și Îngrijire Corporală
                    </p>
                  </div>
                  <div className="animate-reveal-bottom-top">
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
                    <ChevronDown withMargin={true} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      />
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
