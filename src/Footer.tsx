import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-white font-semibold">Blackchip Technologies</h3>
            <p className="text-sm">Secure Infrastructure & Governed AI for the Enterprise</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          © 2026 Blackchip Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;