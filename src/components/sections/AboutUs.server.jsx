import {AboutUsSwiper} from '../index';

export const AboutUs = () => {
  return (
    <section className="py-16 relative flex flex-col xl:flex-row-reverse w-full m-h-screen bg-white">
      <div className="w-full xl:w-1/2 my-auto p-8 xl:p-12 pt-0">
        <p className="text-2xl text-belise align-left font-serif">
          Despre SPARKS
        </p>
        <br />
        <p className="text-lg text-black align-left font-serif opacity-75">
          Bine ați venit la Sparks Beauty & Care, unde îți poți îndeplini cele
          mai sofisticate dorințe de înfrumusețare. Oferim o gamă largă de
          servicii de înaltă calitate, atât pentru femei cât și pentru bărbați,
          inclusiv tunsori și coafuri, vopsit și AirTouch, manichiură și
          pedichiură, îndepărtarea părului prin epilare cu laser, tratamente
          faciale și multe altele.
        </p>
        <br />
        <p className="text-lg text-black align-left font-serif opacity-75">
          Îți vom oferi o experiență relaxantă și rafinată în cadrul salonului
          nostru, cu servicii personalizate, adaptate nevoilor tale individuale.
          Fie că ai nevoie de o îngrijire de bază sau de o transformare
          completă, echipa noastră de specialiști în înfrumusețare va fi
          bucuroasă să îți ofere servicii de calitate superioară pentru a-ți
          satisface nevoile.
        </p>
        <br />
        <p className="text-lg text-black align-left font-serif opacity-75">
          În plus, la Sparks, folosim doar cele mai bune produse de pe piață,
          pentru a-ți oferi cele mai bune rezultate în serviciile noastre de
          înfrumusețare. De la produse profesionale de styling până la
          tratamente cosmetice premium, îți garantăm că vei pleca de la salonul
          nostru cu un aspect și o senzație minunate. Vino să experimentezi
          luxul și rafinamentul într-un mediu confortabil și elegant!
        </p>
      </div>
      <AboutUsSwiper />
    </section>
  );
};
