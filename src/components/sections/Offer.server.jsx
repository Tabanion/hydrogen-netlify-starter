import {OfferCard} from '../elements/OfferCard.client';
import Woman from '/woman.jpeg';
import Man from '/man.jpeg';
import Products from '/products.png';

export const Offer = () => {
  return (
    <section className="w-100 flex justify-center align-center">
      <div className="m-auto">
        <div className="my-16">
          <p
            id="offer-section"
            className="text-belise text-center font-semibold text-lg sm:text-xl font-serif mb-4"
          >
            SPARKS Beauty & Care
          </p>
          <h2 className="text-center font-semibold text-2xl sm:text-4xl font-serif">
            Descoperă Gama Noastră de Servicii și Produse
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4 md:flex-row m-4">
          {CARDS.map((card) => (
            <OfferCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
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
