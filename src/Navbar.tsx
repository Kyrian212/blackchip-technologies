import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 text-white p-4 z-10">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="text-xl font-bold">Blackchip</div>
        <div className="space-x-4 flex items-center">
          <Link to="/#services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/#ai-governance" className="hover:text-blue-400 transition">AI Governance</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
          <Link to="/contact" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Book a Consultancy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;