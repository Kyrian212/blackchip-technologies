import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-2">Blackchip</h3>
            <p className="text-sm">Secure Infrastructure & Governed AI for the Enterprise</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:07823703416" className="hover:text-blue-400 transition">07823703416</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a href="mailto:info@blackchiptech.co.uk" className="hover:text-blue-400 transition">info@blackchiptech.co.uk</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm">16 Wyresdal Road, Bolton, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="/#services" className="hover:text-blue-400 transition">Infrastructure</a>
              <a href="/#ai-governance" className="hover:text-blue-400 transition">AI Governance</a>
              <a href="/#services" className="hover:text-blue-400 transition">Security & Compliance</a>
              <a href="/contact" className="hover:text-blue-400 transition">Book Consultancy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          © 2026 Blackchip Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;