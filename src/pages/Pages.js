import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, About, Projects} from './index';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/projects' element={<Projects />} exact />
      </Routes>
    </Router>
  );
};
