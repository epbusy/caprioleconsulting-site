import React from 'react';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-brown-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-teal-400">
              Have a question or want to discuss a project? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}