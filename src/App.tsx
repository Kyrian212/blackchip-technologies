import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Navbar />
        <main className="transition-opacity duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;