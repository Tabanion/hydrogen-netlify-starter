import {useState} from 'react';

export const OfferCard = ({title, text, image, tags}) => {
  const [hovered, setHovered] = useState(false);

  return (
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
        src="/images/card-shape-1.png"
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
  );
};
