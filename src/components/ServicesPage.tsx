import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Workflow, Code, Lightbulb, Rocket, Database, ArrowRight } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Testimonial } from './Testimonial';

const services = [
  {
    icon: Bot,
    title: 'Custom AI Bots',
    description: 'Intelligent chatbots and virtual assistants tailored to your business needs',
    features: [
      'Natural language processing',
      'Custom knowledge base integration',
      'Multi-platform deployment',
      'Analytics and performance tracking'
    ]
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'End-to-end automation solutions to streamline your operations',
    features: [
      'Workflow optimization',
      'Process automation',
      'Integration with existing systems',
      'Custom automation scripts'
    ]
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Modern, scalable web applications built with cutting-edge technology',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'API development',
      'Cloud deployment'
    ]
  },
  {
    icon: Database,
    title: 'Micro-SaaS Development',
    description: 'Build and launch your own software-as-a-service products',
    features: [
      'Market research and validation',
      'MVP development',
      'Subscription management',
      'User analytics'
    ]
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting',
    description: 'Strategic guidance for implementing AI in your business',
    features: [
      'AI readiness assessment',
      'Implementation strategy',
      'Team training',
      'ROI analysis'
    ]
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'Comprehensive digital transformation services',
    features: [
      'Technology assessment',
      'Digital strategy development',
      'Implementation roadmap',
      'Change management'
    ]
  }
];

const testimonials = [
  {
    quote: "The AI automation solution they built has transformed our customer service operations. We've seen a 60% reduction in response times.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "TechCorp Inc."
  },
  {
    quote: "Their micro-SaaS development expertise helped us launch our product in record time. The ongoing support has been exceptional.",
    author: "Michael Chen",
    role: "Founder",
    company: "StartupFlow"
  },
  {
    quote: "The business automation consulting we received was invaluable. They helped us identify and implement solutions that saved us countless hours.",
    author: "Emma Rodriguez",
    role: "CEO",
    company: "InnovateNow"
  }
];

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brown-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-400 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-teal-400 max-w-3xl mx-auto">
              Comprehensive solutions to transform your business with AI, automation, and modern technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="bg-accent-400 rounded-2xl p-8 md:p-12 text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals. Schedule a free consultation today.
            </p>
            <button 
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-2 bg-white text-accent-400 px-8 py-4 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-400 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-teal-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}