import { Server, Shield, Bot, Wrench, Globe, CheckCircle, Star, Layers, Users, Briefcase, Cpu, Sparkles } from 'lucide-react';
import { services, roadmap } from './constants';

const testimonials = [
  {
    name: "Ernest Nnamdi",
    company: "Piron Finance",
    text: "Blackchip transformed our infrastructure, ensuring compliance and boosting efficiency by 40%. Their expertise in ISO standards is unmatched.",
    rating: 5
  },
  {
    name: "Victoria Ani",
    company: "Boldmann Ltd",
    text: "The AI governance framework they implemented gave us peace of mind. Compliant innovation at its best.",
    rating: 5
  },
  {
    name: "Wale Johnson",
    company: "Assets MicroFinance Bank"
    text: "Outstanding SRE services and automated patching saved us countless hours. Highly recommend for enterprise needs.",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="bg-slate-900 py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-200 mb-6">Enterprise IT Consultancy • ISO 27001 & ISO 42001 • Global Delivery</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Secure Infrastructure & Governed AI for the Enterprise.</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">We deliver end-to-end IT strategy, cloud-native architecture, and AI governance to help global enterprises innovate securely, scale confidently, and stay audit-ready.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 px-8 py-4 rounded hover:bg-blue-700 transition text-white font-semibold">Book a Consultancy</a>
            <a href="/#services" className="border border-blue-600 px-8 py-4 rounded hover:bg-blue-500 transition text-blue-200">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Enterprise IT Strategy</h3>
              <p className="text-slate-400">We design aligned roadmaps that connect business objectives with secure, scalable technology platforms.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-black mb-5">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Governance & Risk</h3>
              <p className="text-slate-400">We embed ISO-grade control frameworks, data privacy architecture, and continuous risk monitoring.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-950/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-5">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">AI & Automation</h3>
              <p className="text-slate-400">From LLM integration to agentic workflows, we operationalize AI with accountability, safety, and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">120+</p>
              <p className="mt-3 text-slate-400">Enterprise programs delivered</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">40%</p>
              <p className="mt-3 text-slate-400">Average operational efficiency gain</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">98%</p>
              <p className="mt-3 text-slate-400">Audit readiness success rate</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
              <p className="text-5xl font-bold text-white">24/7</p>
              <p className="mt-3 text-slate-400">Global reliability and SRE support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-emerald-400 uppercase tracking-[0.3em] mb-3 text-sm font-semibold">Core Consulting Services</p>
              <h2 className="text-4xl font-bold text-white">End-to-End technology services for regulated enterprises.</h2>
            </div>
            <div className="text-slate-400 max-w-xl">
              Our multidisciplinary teams combine engineering, governance, AI, and digital transformation to deliver secure business outcomes across global operations.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 p-8 border border-slate-800 rounded-3xl hover:border-blue-500 transition">
                {index === 0 && <Server className="w-12 h-12 mb-4 text-blue-600" />}
                {index === 1 && <Shield className="w-12 h-12 mb-4 text-emerald-500" />}
                {index === 2 && <Bot className="w-12 h-12 mb-4 text-blue-600" />}
                {index === 3 && <Wrench className="w-12 h-12 mb-4 text-blue-600" />}
                {index === 4 && <Globe className="w-12 h-12 mb-4 text-blue-600" />}
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
      <section id="ai-governance" className="bg-emerald-500 py-20 text-black">
        <div className="container mx-auto max-w-7xl text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] mb-4">AI Governance & Compliance</p>
          <h2 className="text-4xl font-bold mb-4">Compliant AI for regulated enterprises.</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">We deliver transparent, auditable AI systems that align with ISO 42001 principles, bias controls, safety monitoring, and certification readiness.</p>
          <a href="/contact" className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition">Learn More</a>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Compliance Roadmap</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={index} className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step}</h3>
                <p className="text-slate-400">{index === 0 ? 'Gap analysis and risk assessment across people, process, and technology.' : index === 1 ? 'Define ISO 42001 and ISO 27001 policy frameworks with governance controls.' : index === 2 ? 'Implement bias, safety, and security controls for AI-driven systems.' : 'Prepare for certification readiness with audit validation and compliance evidence.'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-400 mb-4">"{testimonial.text}"</p>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-slate-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-slate-400 mb-8">Contact us today for a free consultation and discover how we can drive compliant innovation for your business.</p>
          <a href="/contact" className="bg-blue-600 px-8 py-4 rounded hover:bg-blue-700 transition text-white font-semibold">Book a Consultancy</a>
        </div>
      </section>
    </div>
  );
};

export default Home;