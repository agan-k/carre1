import {Link} from 'react-router-dom';
import router from '../../router';
import social from './social';

export default function Nav() {
  const routes = router.routes[0].children;
  const navLinks = routes.map((item) => 
    <li key={item.id}>
      <Link to={item.path}>
        {item.element.type.name}
      </Link>
    </li>
  );

  const socialLinks = social.map((item) => 
    <li key={item.media}>
      <a href={item.url}>{item.media}</a>
    </li>
  );
  
  return (
    <nav>
      <ul>
        {navLinks}
        {socialLinks}
      </ul>
    </nav>
  );
}
