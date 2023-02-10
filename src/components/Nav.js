import {Link} from "react-router-dom";
import router from "../router";

export default function Nav() {
  const routes = router.routes[0].children;
  const navLinks = routes.map((item) => 
    <li key={item.id}>
      <Link to={item.path}>
        {item.element.type.name}
      </Link>
    </li>
  );
  
  return (
    <nav>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
}
