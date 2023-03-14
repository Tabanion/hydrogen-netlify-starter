import {Suspense} from 'react';
import {Seo} from '@shopify/hydrogen';

import {PageHeader, Section} from '~/components';
import {Layout} from '~/components/index.server';
import {WomanServices} from '../../components/index';
import {Gallery} from '../../components/Gallery.client';
import {PriceList} from '../../components/sections/Pricelist.server';

export default function Services() {
  return (
    <Layout>
      <Seo type="page" data={{title: 'All Services'}} />
      {/* <PageHeader heading="Servicii" /> */}
      <Suspense>
        <PriceList />
        <Gallery />
      </Suspense>
    </Layout>
  );
}
