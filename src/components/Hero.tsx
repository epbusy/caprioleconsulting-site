import React from 'react';
import { ArrowRight, Bot, Workflow, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-400 text-white font-medium text-sm">
              Innovate with AI & Automation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-400 leading-tight">
              Transform Your Business with Smart Solutions
            </h1>
            <p className="text-xl text-teal-400 max-w-2xl">
              We specialize in creating intelligent automation solutions that streamline your operations and drive growth through AI-powered innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/consultation')}
                className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="px-6 py-3 border border-brown-400 text-brown-400 rounded-lg hover:bg-brown-50 transition-colors"
              >
                View Services
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Bot className="w-10 h-10 text-secondary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-brown-400">AI Solutions</h3>
                <p className="text-teal-400">Custom AI bots and intelligent automation</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Workflow className="w-10 h-10 text-secondary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-brown-400">Workflows</h3>
                <p className="text-teal-400">Streamlined business processes</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Globe className="w-10 h-10 text-secondary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-brown-400">Web Solutions</h3>
                <p className="text-teal-400">Modern web applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}