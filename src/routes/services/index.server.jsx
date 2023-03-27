import {Suspense} from 'react';
import {Seo} from '@shopify/hydrogen';

import {Layout} from '~/components/index.server';
import {PriceList} from '../../components/sections/Pricelist.server';
import {GalleryPreview} from '../../components/GalleryPreview.client';

export default function AllServices() {
  return (
    <Layout>
      <Seo type="page" data={{title: 'All Services'}} />
      <Suspense>
        <PriceList withNav={true} />
        <GalleryPreview title={'Galerie'} subtitle={'Lucrarile noastre'} />
      </Suspense>
    </Layout>
  );
}
