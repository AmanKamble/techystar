import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./Styles/App.css"
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
