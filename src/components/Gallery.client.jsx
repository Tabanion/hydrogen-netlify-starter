import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import PhotoAlbum from 'react-photo-album';
import 'yet-another-react-lightbox/styles.css';
import Wave from '~/assets/images/wave-1.svg';

export const Gallery = ({images}) => {
  const [index, setIndex] = React.useState(-1);

  return (
    <section
      className="w-full h-full bg-cover bg-center px-4 py-8 sm:p-16 2xl:px-96"
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
            Galerie
          </p>
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">
            Lucrarile noastre
          </h2>
          <PhotoAlbum
            layout="rows"
            photos={images}
            targetRowHeight={(containerWidth) => {
              if (containerWidth < 600) return 270;
              if (containerWidth < 800) return 300;
              if (containerWidth < 1200) return 350;
              if (containerWidth < 1400) return 400;
              return 450;
            }}
            onClick={({index}) => setIndex(index)}
            renderPhoto={renderPhoto}
          />
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(({src}, index) => ({src, key: index})) || []}
      />
    </section>
  );
};

const renderPhoto = ({imageProps: {alt, ...restImageProps}}) => (
  <img
    alt={alt}
    {...restImageProps}
    className="shadow-lg rounded-lg overflow-hidden bg-cover cursor-pointer"
  />
);
