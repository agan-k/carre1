import {createBrowserRouter} from 'react-router-dom';
import App from './app';
import {About, Projects, Home} from './pages';

export default routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />, 
      }, 
      {
        path: '/about',
        element: <About />, 
      }, 
      {
        path: '/projects',
        element: <Projects />, 
      }, 
    ],
  },
]);
