import {createBrowserRouter} from 'react-router-dom';
import App from '../app';
import {Bio, Projects, Home, Music, TourDates, Contact} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />, 
      }, 
      {
        path: '/bio',
        element: <Bio />, 
      }, 
      {
        path: '/projects',
        element: <Projects />, 
      }, 
      {
        path: '/music',
        element: <Music />, 
      }, 
      {
        path: '/tour-dates',
        element: <TourDates />, 
      }, 
      {
        path: '/contact',
        element: <Contact />, 
      },
    ],
  },
]);

export const routes = router.routes[0].children;
export default router;
