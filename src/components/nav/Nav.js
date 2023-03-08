import {useSinglePrismicDocument} from '@prismicio/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {LanguageSelector} from '../../components/language-selector';

export default function Nav({language, onChange}) {
  const [socialLinksData] = useSinglePrismicDocument('social_links');
  const {data} = socialLinksData || {};
  const navLinks = routes.map((item) => 
    <li key={item.id}>
      <Link to={item.path}>
        {item.element.props.name[`${language}`]}
      </Link>
    </li>
  );

  const socialLinks = data?.social_links.map((item) => {
    return(
      item.spans.length !== 0 ?
        <li key={item.text}>
          <Link to={item.spans[0].data.url}>{item.text}</Link>
        </li> : ''
    );
  });
  
  return (
    <nav style={{border: '1px solid red', padding: '5px', margin: '5px'}}>
      <ul>
        {navLinks}
      </ul>
      <ul>
        {socialLinks}
      </ul>
      <LanguageSelector language={language} onChange={onChange} />
    </nav>
  );
}

Nav.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
