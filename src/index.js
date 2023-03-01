import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
const container = document.getElementById('root');
const root = createRoot(container);
import {PrismicProvider} from '@prismicio/react';
import {client} from './prismic';

root.render(
  <PrismicProvider client={client}>
    <RouterProvider router={router} />
  </PrismicProvider>
);

if (module.hot) {
  module.hot.accept(function () {
    window.location.reload();
  });
}
