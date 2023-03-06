import {OfferCards} from '../elements/OfferCards.client';

export const Offer = () => {
  return (
    <section className="w-full max-w-full flex justify-center align-center p-4">
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
        <OfferCards />
      </div>
    </section>
  );
};
