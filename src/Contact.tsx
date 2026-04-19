import { useState } from 'react';
import { services } from './constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', service: '', complianceNeeds: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-slate-900 min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Contact Us</h1>
        <p className="text-center text-slate-400 mb-12 text-lg">Get in touch with our team of consultants and architects.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">Get in Touch</h2>
            
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 space-y-8">
              {/* Phone */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-white font-semibold">Phone</h3>
                </div>
                <a href="tel:07823703416" className="text-slate-400 hover:text-blue-400 transition">
                  07823703416
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-white font-semibold">Email</h3>
                </div>
                <a href="mailto:info@blackchiptech.co.uk" className="text-slate-400 hover:text-blue-400 transition">
                  info@blackchiptech.co.uk
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-white font-semibold">Office Location</h3>
                </div>
                <p className="text-slate-400">
                  16 Wyresdal Road<br />
                  Bolton<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">Book a Consultancy</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                required
              />
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                required
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Service Interest</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>{service.title}</option>
                ))}
              </select>
              <textarea
                name="complianceNeeds"
                value={form.complianceNeeds}
                onChange={handleChange}
                placeholder="Tell us about your compliance needs and requirements"
                className="w-full p-4 bg-slate-800 border border-slate-700 rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                rows={5}
                required
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 p-4 rounded hover:bg-blue-700 transition text-white font-semibold text-lg">Book a Consultancy</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;