import React from 'react';
import { Clock, CheckCircle, MessageSquare } from 'lucide-react';
import MultiStepForm from './consultation/MultiStepForm';

const benefits = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get a response within 24 hours'
  },
  {
    icon: CheckCircle,
    title: 'Expert Analysis',
    description: 'Detailed project evaluation and recommendations'
  },
  {
    icon: MessageSquare,
    title: 'Personalized Approach',
    description: 'Tailored solutions for your specific needs'
  }
];

export function ConsultationPage() {
  return (
    <div className="min-h-screen bg-brown-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-400 mb-4">
              Capriole Consultation Request
            </h1>
            <p className="text-xl text-teal-400">
              Tell us about your project, and we'll help bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <benefit.icon className="w-10 h-10 text-secondary-400 mb-4" />
                <h3 className="text-lg font-semibold text-brown-400 mb-2">{benefit.title}</h3>
                <p className="text-teal-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </div>
  );
}