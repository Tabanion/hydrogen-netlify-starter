import {Link} from '@shopify/hydrogen';
import PhotoAlbum from 'react-photo-album';
import Wave from '~/assets/images/wave-2.svg';

const images = [
  {
    categoryTitle: 'AirTouch',
    slug: 'air-touch',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_7.heic?v=1679925314',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'AirTouch',
    slug: 'air-touch',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_7.heic?v=1679925314',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'AirTouch',
    slug: 'air-touch',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_7.heic?v=1679925314',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'AirTouch',
    slug: 'air-touch',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_7.heic?v=1679925314',
    width: 300,
    height: 400,
  },
];

export const GalleryPreview = ({title, subtitle}) => {
  return (
    <section
      className="w-full h-full bg-cover bg-center p-4 sm:p-16 md:px-96"
      style={{
        backgroundImage: `url(${Wave})`,
      }}
    >
      <div className="m-auto">
        <div className="text-gray-800">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    ',
            }}
          />
          {title && (
            <p className="text-xl text-center font-bold text-belise font-dance">
              {title}
            </p>
          )}
          {subtitle && (
            <h2 className="text-3xl font-bold mb-12 text-center font-serif">
              {subtitle}
            </h2>
          )}
          <PhotoAlbum
            layout="rows"
            photos={images}
            targetRowHeight={270}
            renderPhoto={renderPhoto}
          />
        </div>
      </div>
    </section>
  );
};

const renderPhoto = ({
  imageProps: {alt, style, ...restImageProps},
  photo: {categoryTitle, slug},
}) => (
  <Link to={`services/${slug}`}>
    <div className="p-2 sm:p-4">
      <div
        className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover cursor-pointer"
        style={{backgroundPosition: '50%'}}
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <img
          alt={alt}
          {...restImageProps}
          className="w-full transition duration-300 ease-linear align-middle object-cover h-full w-full"
        />
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        >
          <div className="flex justify-start items-end h-full">
            <h5 className="text-xl tracking-wide font-bold text-white ml-2 mb-1 sm:ml-4 sm:mb-2 font-dance drop-shadow-basic">
              {categoryTitle}
            </h5>
          </div>
        </div>
        <div className="hover-overlay">
          <div
            className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}
          />
        </div>
      </div>
    </div>
  </Link>
);
