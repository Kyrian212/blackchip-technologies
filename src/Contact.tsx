import { useState } from 'react';
import { services } from './constants';

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
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded text-slate-200"
              required
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded text-slate-200"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded text-slate-200"
              required
            >
              <option value="">Service Interest</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>{service.title}</option>
              ))}
            </select>
            <textarea
              name="complianceNeeds"
              value={form.complianceNeeds}
              onChange={handleChange}
              placeholder="Compliance Needs"
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded text-slate-200"
              rows={5}
              required
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 p-3 rounded hover:bg-blue-700 transition text-white font-semibold">Book a Consultancy</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;