import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import PhotoAlbum from 'react-photo-album';
import 'yet-another-react-lightbox/styles.css';
import Wave from '~/assets/images/wave-1.svg';

export const Gallery = ({images}) => {
  const [index, setIndex] = React.useState(-1);

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
            Galerie
          </p>
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">
            Lucrarile noastre
          </h2>
          <PhotoAlbum
            layout="rows"
            photos={images}
            targetRowHeight={270}
            onClick={({index}) => setIndex(index)}
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
