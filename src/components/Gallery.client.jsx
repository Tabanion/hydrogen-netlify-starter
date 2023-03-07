import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Wave from '~/assets/images/wave-1.svg';

const images = [
  {
    categoryTitle: 'Manichiură și Pedichiură',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/ali-pazani-3w14X-Yxffk-unsplash.jpg?v=1677877452',
    images: [
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/ali-pazani-3w14X-Yxffk-unsplash.jpg?v=1677877452',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/gallery4.jpg?v=1677881326',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/background2.jpg?v=1677881486',
    ],
  },
  {
    categoryTitle: 'Cuafuri',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/gallery4.jpg?v=1677881326',
    images: [
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/gallery4.jpg?v=1677881326',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/ali-pazani-3w14X-Yxffk-unsplash.jpg?v=1677877452',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/background2.jpg?v=1677881486',
    ],
  },
  {
    categoryTitle: 'Alte lucrări',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/background2.jpg?v=1677881486',
    images: [
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/background2.jpg?v=1677881486',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/ali-pazani-3w14X-Yxffk-unsplash.jpg?v=1677877452',
      'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/gallery4.jpg?v=1677881326',
    ],
  },
];

export const Gallery = () => {
  const [category, setCategory] = React.useState(null);

  return (
    <section
      className="w-full h-full bg-cover bg-center p-4 sm:p-16"
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
          <p className="text-xl text-center font-bold text-belise font-dance">
            Femei
          </p>
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">
            Lucrarile noastre
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {images.map((category) => (
              <div
                key={category.categoryTitle}
                className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover cursor-pointer"
                style={{backgroundPosition: '50%'}}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                onClick={() => setCategory(category)}
              >
                <img
                  src={category.thumbnail}
                  className="w-full transition duration-300 ease-linear align-middle object-cover h-full w-full"
                />
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6 font-dance">
                      {category.categoryTitle}
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
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={Boolean(category)}
        close={() => setCategory(null)}
        slides={category?.images.map((src, index) => ({src, key: index})) || []}
      />
    </section>
  );
};
