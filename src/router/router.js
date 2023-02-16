import {createBrowserRouter} from 'react-router-dom';
import App from '~src/App';
import {
  Bio, 
  Projects, 
  Home, 
  Music, 
  TourDates, 
  PresskitContact
} from '~src/pages';
import {
  pageCategoriesEnglish as english,
  pageCategoriesFrench as french
} from '~src/pages/constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home name={{french: french.HOME, english: english.HOME}}/>, 
      }, 
      {
        path: '/bio',
        element: <Bio name={{french: french.BIO, english: english.BIO}} />, 
      }, 
      {
        path: '/projects',
        element: <Projects 
          name={{french: french.PROJECTS, english: english.PROJECTS}} />, 
      }, 
      {
        path: '/music',
        element: <Music 
          name={{french: french.MUSIC, english: english.MUSIC}} />, 
      }, 
      {
        path: '/tour-dates',
        element: <TourDates 
          name={{french: french.TOUR_DATES, english: english.TOUR_DATES}} />, 
      }, 
      {
        path: '/booking-press',
        element: <PresskitContact 
          name={{
            french: french.PRESSKIT_CONTACT,
            english: english.PRESSKIT_CONTACT,
          }} />, 
      },
    ],
  },
]);

export const routes = router.routes[0].children;
export default router;
