import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Users, Target, Sparkles, ArrowRight } from 'lucide-react';
import { ValueCard } from '../components/ValueCard';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions that drive real business value.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We believe in building long-term relationships and treating your business challenges as our own.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, ensuring quality, reliability, and performance.'
  },
  {
    icon: Sparkles,
    title: 'Continuous Growth',
    description: 'We constantly evolve our skills and knowledge to bring the best solutions to our clients.'
  }
];

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brown-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-400 mb-6">
              Driving Innovation Through Technology
            </h1>
            <p className="text-xl text-teal-400 mb-8">
              We're a team of passionate technologists dedicated to transforming businesses through AI and automation.
            </p>
            <button 
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Join Our Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brown-400 mb-4">Our Values</h2>
            <p className="text-xl text-teal-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative solutions.
          </p>
          <button 
            onClick={() => navigate('/consultation')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-400 rounded-lg font-semibold hover:bg-accent-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}