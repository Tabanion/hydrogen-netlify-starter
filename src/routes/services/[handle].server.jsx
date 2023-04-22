import {Suspense} from 'react';
import {Seo, useRouteParams} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Gallery} from '../../components/Gallery.client';
import {PageIntro} from '../../components/global/PageIntro.server';
import {GalleryPreview} from '../../components/GalleryPreview.client';

const getServiceByHandle = (handle) => SERVICII.find((e) => e?.slug === handle);

export default function Service() {
  const {handle} = useRouteParams();
  const {title, description, images} = getServiceByHandle(handle);

  return (
    <Layout>
      <Seo type="page" data={{title, description}} />
      <PageIntro title={title} description={description} />
      <Suspense>
        <Gallery images={images} />
        <GalleryPreview
          subtitle={'Alte servicii'}
          link={'/services'}
          btnLabel={'TOATE SERVICIILE'}
        />
      </Suspense>
    </Layout>
  );
}

const SERVICII = [
  {
    slug: 'air-touch',
    title: 'AirTouch',
    description: `Dacă ești în căutarea unei tehnici de vopsire a părului care să creeze efectul de adâncime și volum, atunci tehnica AirTouch poate fi alegerea perfectă pentru tine. AirTouch este o metodă de vopsire a părului inovatoare, care își propune să creeze o transiție subtilă între culori și să ofere un aspect natural și plin de viață.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_7.heic?v=1679925314',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_3.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_4.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_6.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_1.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_5.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/airtouch_2.jpg?v=1679925272',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'hair-dye',
    title: 'Vopsire Păr',
    description: `Dacă îți dorești să schimbi look-ul și să obții un păr cu adevărat spectaculos, atunci vopsirea părului poate fi răspunsul la această dorință. Există o varietate de tehnici de vopsire a părului, de la cele clasice și simple la cele mai avansate și inovatoare. Indiferent de alegerea ta, vopsirea părului poate fi o modalitate excelentă de a-ți exprima personalitatea și de a obține un aspect nou și plin de viață.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_1.heic?v=1679946195',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_9.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_8.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_7.heic?v=1679946195',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_6.heic?v=1679946194',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_5.heic?v=1679946195',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_4.heic?v=1679946195',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_3.heic?v=1679946194',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_2.heic?v=1679946195',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_19.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_18.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_17.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_16.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_15.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_14.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_13.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_12.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_11.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/dye_10.jpg?v=1679946193',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'man-haircut',
    title: 'Tunsori Bărbați',
    description: `O tunsoare proaspătă poate face minuni pentru încrederea ta și poate ajuta la îmbunătățirea aspectului general al părului și a stilului tău. De asemenea, o tunsoare bine executată poate evidenția trăsăturile tale și poate accentua linia maxilarului, făcându-te să arăți mai masculin și mai puternic.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_6.heic?v=1679946873',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_5.jpg?v=1679946874',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_1.heic?v=1679946873',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_3.jpg?v=1679946872',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_4.jpg?v=1679946872',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/man_haircut_2.jpg?v=1679946873',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'woman-hairstyle',
    title: 'Coafură Femei',
    description: `O coafură bine executată nu doar că poate îmbunătăți aspectul părului tău, dar poate schimba și modul în care te simți și cum te percep ceilalți.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_hairstyle_2.jpg?v=1679947810',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_hairstyle_1.jpg?v=1679947810',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'cosmetology',
    title: 'Cosmetologie',
    description: `Îți dorești să îți îmbunătățești aspectul și să ai o piele sănătoasă și strălucitoare? Cosmetologia non-invazivă poate fi soluția perfectă pentru tine!
\nAceastă metodă de îngrijire a pielii utilizează tehnici non-invazive și non-chirurgicale pentru a îmbunătăți textura pielii, pentru a reduce ridurile și pentru a estompa semnele de îmbătrânire. De asemenea, tratamentele de cosmetologie non-invazivă pot ajuta la tratarea acneei, la reducerea porilor dilatați și la îmbunătățirea aspectului general al pielii.
    `,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/cosmetology_1.jpg?v=1679949151',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/cosmetology_3.heic?v=1679949151',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/cosmetology_2.heic?v=1679949151',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/cosmetology_4.jpg?v=1679949151',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'woman-haircut',
    title: 'Tunsori Femei',
    description: `Femeile știu că o tunsoare reușită poate fi transformătoare pentru aspectul lor. O tunsoare potrivită poate evidenția frumusețea și trăsăturile lor și poate face o diferență semnificativă în încrederea și starea lor de spirit.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_3.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_2.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_1.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_9.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_4.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_5.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_8.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_6.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/woman_haircut_7.jpg?v=1679949484',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'makeup',
    title: 'Machiaj',
    description: `Un machiaj reușit poate transforma complet aspectul unei persoane și poate evidenția frumusețea trăsăturilor lor. De aceea, este important să apelați la un salon de machiaj pentru a vă asigura că aspectul vostru este impecabil.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/makeup_1.jpg?v=1679950933',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'eyes',
    title: 'Gene și Sprâncene',
    description: `Laminarea sprâncenelor și genelor, împreună cu alungirea genelor, sunt proceduri de înfrumusețare care au devenit din ce în ce mai populare în ultimii ani. Acestea oferă multe beneficii și pot face o diferență semnificativă în aspectul și încrederea ta.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1521.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1.jpg?v=1679951292',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2959.png?v=1679951294',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1552.jpg?v=1679951294',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1556.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1919.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1524.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1920.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1553.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1553.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2296.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2451.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1976.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1957.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2453.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2593.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2297.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2299.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2452.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2298.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_1977.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2507.jpg?v=1679951293',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/eyes_2.jpg?v=1679951292',
        width: 300,
        height: 400,
      },
    ],
  },
  {
    slug: 'nails',
    title: 'Manichiură și Pedichiură',
    description: `Un machiaj reușit poate transforma complet aspectul unei persoane și poate evidenția frumusețea trăsăturilor lor. De aceea, este important să apelați la un salon de machiaj pentru a vă asigura că aspectul vostru este impecabil.`,
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-32.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-28-26.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-29-16.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-28.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-28-05.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-25.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-28-32.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-21.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-26-13.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9598.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-28-36.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-30-12.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9527.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9755.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9533.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9526.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9867.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_16-31-26.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9784.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9655.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9839.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9880.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9879.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9993.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9866.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9812.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9840.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_17-30-26.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_17-30-13.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_17-30-01.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_03-05_17-29-45.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0724/4129/9229/files/nails_9994.jpg?v=1679952298',
        width: 300,
        height: 400,
      },
    ],
  },
];
