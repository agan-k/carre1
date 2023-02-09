import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Pages, Home, About, Projects} from './pages';

export default function App() {
  return (
    <Pages />
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} exact />
    //     <Route path='/about' element={<About />} exact />
    //     <Route path='/projects' element={<Projects />} exact />
    //   </Routes>
    // </Router>
  );
}
