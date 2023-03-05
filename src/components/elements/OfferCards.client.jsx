import {useState} from 'react';
import CardShape from '~/assets/images/card-shape-1.png';
import Woman from '~/assets/images/woman.jpeg';
import Man from '~/assets/images/man.jpeg';
import Products from '~/assets/images/products.png';

export const OfferCards = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-4 md:flex-row m-4">
      {CARDS.map(({title, image, text, tags}) => (
        <div
          onClick={() => console.log('test')}
          className="m-auto pb-4 bg-white max-w-sm rounded overflow-hidden shadow-card transition ease-in-out hover:border hover:border-belise hover:cursor-pointer hover:drop-shadow-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            className={`absolute z-0 transition ease-in-out opacity-${
              hovered ? 100 : 25
            }`}
            src={CardShape}
            alt={title}
          />
          <img
            className="relative z-10 w-1/2 mx-auto mb-4 mt-12 rounded-full bg-belise"
            src={image}
            alt={title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {title.toUpperCase()}
            </div>
            <p className="text-gray-700 text-base text-center justify-center">
              {text}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const CARDS = [
  {
    title: 'Femei',
    text: 'AirTouch, Manichiură, Epilare - descoperă toate serviciile noastre pentru femei',
    image: Woman,
    tags: ['#beauty', '#manicure', '#haircoloring'],
  },
  {
    title: 'Bărbați',
    text: 'Tunsori, Barbă, Tonare - descoperă toate serviciile noastre pentru bărbați',
    image: Man,
    tags: ['#style', '#shaving', '#haircut'],
  },
  {
    title: 'Magazin Online',
    text: 'Nashi, Davines - alege și comandă produsele tale favorite Nashi și Davines',
    image: Products,
    tags: ['#nashi', '#davines', '#sparks'],
  },
];
