import React from 'react';
import { Bot, Workflow, Globe, Zap, Users, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Custom AI solutions to automate tasks and enhance decision-making'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline workflows and eliminate repetitive tasks'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic guidance for business modernization'
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Empower your team with technical knowledge'
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description: 'Data-driven insights for business growth'
  }
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-400 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-teal-400 max-w-2xl mx-auto">
            Comprehensive solutions to drive your business forward with cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-secondary-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <service.icon className="w-12 h-12 text-secondary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brown-400">{service.title}</h3>
              <p className="text-teal-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}