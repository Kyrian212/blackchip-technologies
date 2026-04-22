import { Server, Shield, Bot, Wrench, Globe, CheckCircle, Star, Layers, Users, Briefcase, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { services, roadmap } from './constants';

const testimonials = [
  {
    name: "Ernest Nnamdi",
    company: "Piron Finance",
    text: "Blackchip transformed our infrastructure, ensuring compliance and boosting efficiency by 40%. Their expertise in ISO standards is unmatched.",
    rating: 5,
    industry: "Financial Services"
  },
  {
    name: "Victoria Ani",
    company: "Boldmann Ltd",
    text: "The AI governance framework they implemented gave us peace of mind. Compliant innovation at its best.",
    rating: 5,
    industry: "Technology"
  },
  {
    name: "Wale Johnson",
    company: "Assets MicroFinance Bank",
    text: "Outstanding SRE services and automated patching saved us countless hours. Highly recommend for enterprise needs.",
    rating: 5,
    industry: "Banking"
  },
  {
    name: "Sarah Chen",
    company: "MediHealth Corp",
    text: "Their ISO 27001 implementation secured our patient data and reduced audit times by 50%. Exceptional service.",
    rating: 5,
    industry: "Healthcare"
  },
  {
    name: "Marcus Rodriguez",
    company: "Global Logistics Inc",
    text: "Cloud-native architecture scaled our operations globally. Blackchip's governance ensured zero downtime.",
    rating: 5,
    industry: "Logistics"
  },
  {
    name: "Aisha Patel",
    company: "EduTech Solutions",
    text: "AI integration with full compliance monitoring transformed our learning platform. Trusted partners.",
    rating: 5,
    industry: "Education"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <motion.section 
        className="bg-slate-900 py-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/80"></div>
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center" 
          alt="Enterprise IT infrastructure visualization" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-200 mb-6">Enterprise IT Consultancy • ISO 27001 & ISO 42001 • Global Delivery</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Secure Infrastructure & Governed AI for Businesses.</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">Achieve 40% efficiency gains and 98% audit readiness with our ISO-certified solutions. We deliver end-to-end IT strategy, cloud-native architecture, and AI governance to help global businesses innovate securely, scale confidently, and stay audit-ready.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 px-8 py-4 rounded hover:bg-blue-700 transition text-white font-semibold text-lg">Book a Free Assessment</a>
            <a href="/#services" className="border border-blue-600 px-8 py-4 rounded hover:bg-blue-500 transition text-blue-200 text-lg">Explore Services</a>
          </div>
        </div>
      </motion.section>

      {/* Core Value Proposition */}
      <motion.section 
        className="bg-slate-950 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Enterprise IT Strategy</h3>
              <p className="text-slate-400">We design aligned roadmaps that connect business objectives with secure, scalable technology platforms, reducing compliance costs by 30%.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-black mb-5">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Governance & Risk</h3>
              <p className="text-slate-400">We embed ISO-grade control frameworks, data privacy architecture, and continuous risk monitoring for zero-trust security.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">AI & Automation</h3>
              <p className="text-slate-400">From LLM integration to agentic workflows, we operationalize AI with accountability, safety, and transparency for ethical innovation.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Outcome Metrics */}
      <motion.section 
        className="bg-slate-900 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">120+</p>
              <p className="mt-3 text-slate-400">Business programs delivered across 15 countries</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">40%</p>
              <p className="mt-3 text-slate-400">Average operational efficiency gain (verified by clients)</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">98%</p>
              <p className="mt-3 text-slate-400">Audit readiness success rate with ISO certifications</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">24/7</p>
              <p className="mt-3 text-slate-400">Global reliability and SRE support with 99.9% uptime</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <section id="services" className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-emerald-400 uppercase tracking-[0.3em] mb-3 text-sm font-semibold">Core Consulting Services</p>
              <h2 className="text-4xl font-bold text-white">End-to-End technology services for regulated businesses.</h2>
            </div>
            <div className="text-slate-400 max-w-xl">
              Our multidisciplinary teams combine engineering, governance, AI, and digital transformation to deliver secure business outcomes across global operations.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 p-8 border border-slate-800 rounded-3xl hover:border-blue-500 transition">
                {index === 0 && <Server className="w-12 h-12 mb-4 text-blue-600" aria-label="Custom Infrastructure icon" />}
                {index === 1 && <Shield className="w-12 h-12 mb-4 text-emerald-500" aria-label="Security and Compliance icon" />}
                {index === 2 && <Bot className="w-12 h-12 mb-4 text-blue-600" aria-label="AI Automation icon" />}
                {index === 3 && <Wrench className="w-12 h-12 mb-4 text-blue-600" aria-label="Infrastructure Maintenance icon" />}
                {index === 4 && <Globe className="w-12 h-12 mb-4 text-blue-600" aria-label="Brand Management icon" />}
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-2 text-slate-400">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Global Delivery</h3>
              <p className="text-slate-400">Our consulting teams support clients across North America, EMEA, and APAC with local compliance and global execution.</p>
            </div>
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-black mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Senior Team</h3>
              <p className="text-slate-400">Delivered by certified architects, compliance officers, SRE leads, and AI governance specialists.</p>
            </div>
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Trusted Results</h3>
              <p className="text-slate-400">Trusted by enterprises to improve cyber resilience, streamline operations, and deliver audit-ready systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance */}
      <section id="ai-governance" className="bg-emerald-500 py-20 text-black relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=400&fit=crop&crop=center" 
          alt="AI and machine learning visualization" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="container mx-auto max-w-7xl text-center px-4 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] mb-4">AI Governance & Compliance</p>
          <h2 className="text-4xl font-bold mb-4">Compliant AI for regulated businesses.</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">We deliver transparent, auditable AI systems that align with ISO 42001 principles, bias controls, safety monitoring, and certification readiness.</p>
          <a href="/contact" className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition">Learn More</a>
        </div>
      </section>

      {/* Roadmap */}
      <motion.section 
        className="bg-slate-950 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Compliance Roadmap</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={index} className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step}</h3>
                <p className="text-slate-400">
                  {index === 0 ? 'Gap analysis and risk assessment across people, process, and technology. Comprehensive audit of current compliance posture.' : 
                   index === 1 ? 'Define ISO 42001 and ISO 27001 policy frameworks with governance controls. Custom implementation roadmap.' : 
                   index === 2 ? 'Implement bias, safety, and security controls for AI-driven systems. Continuous monitoring setup.' : 
                   'Prepare for certification readiness with audit validation and compliance evidence. Final documentation and training.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="bg-slate-900 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-blue-500 transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" aria-label="Star rating" />
                  ))}
                </div>
                <p className="text-slate-400 mb-4">"{testimonial.text}"</p>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-slate-500">{testimonial.company}</div>
                <div className="text-emerald-400 text-sm mt-1">{testimonial.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Signals */}
      <motion.section 
        className="bg-slate-950 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-white">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-2" aria-label="ISO 27001 Certification" />
              <p className="text-slate-400">ISO 27001 Certified</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-2" aria-label="ISO 42001 Certification" />
              <p className="text-slate-400">ISO 42001 Certified</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" aria-label="Global Operations" />
              <p className="text-slate-400">Global Operations</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <Users className="w-12 h-12 text-emerald-500 mx-auto mb-2" aria-label="Enterprise Clients" />
              <p className="text-slate-400">120+ Business Clients</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="bg-slate-950 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-400 mb-8">Limited slots available. Contact us today for a free consultation and discover how we can drive compliant innovation for your business.</p>
          <a href="/contact" className="bg-blue-600 px-8 py-4 rounded hover:bg-blue-700 transition text-white font-semibold text-lg">Book a Free Assessment</a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;