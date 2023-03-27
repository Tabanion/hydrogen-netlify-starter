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
        <GalleryPreview subtitle={'Alte servicii'} />
      </Suspense>
    </Layout>
  );
}

const SERVICII = [
  {
    slug: 'air-touch',
    title: 'AirTouch',
    description: `Dacă ești în căutarea unei tehnici de vopsire a părului care să creeze efectul de adâncime și volum, atunci tehnica AirTouch poate fi alegerea perfectă pentru tine. AirTouch este o metodă de vopsire a părului inovatoare, care își propune să creeze o transiție subtilă între culori și să ofere un aspect natural și plin de viață.
    \nAceastă tehnică de vopsire a părului implică utilizarea unei perii speciale, care permite aplicarea vopselei într-un mod subtil și precis. Prin crearea de puncte subtile de culoare pe păr, se obține un efect tridimensional care dă părului un aspect mai bogat și mai plin.
    \nAirTouch este perfectă pentru cei care doresc să își îmbunătățească aspectul părului lor fără să apeleze la o schimbare radicală de culoare. De asemenea, tehnica AirTouch este ideală pentru persoanele care caută o metodă de vopsire a părului care să nu necesite o întreținere prea frecventă, deoarece efectul se menține mult timp.
    \nIndiferent de culoarea sau tipul de păr pe care îl ai, tehnica AirTouch poate fi adaptată pentru a se potrivi nevoilor tale individuale. Deci, dacă dorești să îți îmbunătățești aspectul părului și să obții un efect natural și plin de viață, atunci încearcă tehnica AirTouch și vezi diferența!`,
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
];
