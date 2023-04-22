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
    categoryTitle: 'Vopsire / Tonare',
    slug: 'hair-dye',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_1.heic?v=1679946195',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Coafură Femei',
    slug: 'woman-hairstyle',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_hairstyle_2.jpg?v=1679947810',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Tunsori Femei',
    slug: 'woman-haircut',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_3.jpg?v=1679949484',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Tunsori Bărbați',
    slug: 'man-haircut',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_6.heic?v=1679946873',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Cosmetologie',
    slug: 'cosmetology',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/cosmetology_1.jpg?v=1679949151',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Machiaj',
    slug: 'makeup',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/makeup_1.jpg?v=1679950933',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Gene și Sprâncene',
    slug: 'eyes',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1521.jpg?v=1679951293',
    width: 300,
    height: 400,
  },
  {
    categoryTitle: 'Manichiură și Pedichiură',
    slug: 'nails',
    src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-21.jpg?v=1679952298',
    width: 300,
    height: 400,
  },
];

export const GalleryPreview = ({title, subtitle, link, btnLabel}) => {
  return (
    <section
      className="w-full h-full bg-cover bg-center py-4 px-4 sm:px-16 sm:py-16 md:px-20 xl:px-64"
      style={{
        backgroundImage: `url(${Wave})`,
      }}
    >
      <div className="m-auto">
        <div className="text-gray-800 mx-0 lg:mx-20">
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
            targetRowHeight={(containerWidth) => {
              if (containerWidth < 600) return 270;
              if (containerWidth < 800) return 350;
              return 450;
            }}
            renderPhoto={renderPhoto}
          />
        </div>
      </div>
      {link && (
        <div className="flex mt-10 justify-center">
          <Link to={link}>
            <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent group py-2 px-4 border border-black ">
              <span className="w-0 h-0 bg-black absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-black font-semibold transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                {btnLabel}
              </span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

const renderPhoto = ({
  imageProps: {alt, style, ...restImageProps},
  photo: {categoryTitle, slug},
}) => (
  <Link to={`services/${slug}`} style={style}>
    <div className="p-2 sm:p-4">
      <div
        className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover cursor-pointer"
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
            <h5 className="text-md sm:text-lg tracking-wide font-bold text-white ml-2 mb-1 sm:ml-4 sm:mb-2 font-dance drop-shadow-basic">
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
