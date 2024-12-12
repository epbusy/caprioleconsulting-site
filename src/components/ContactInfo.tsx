import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-brown-400 mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary-500 mt-1" />
            <div>
              <p className="text-brown-400">123 Innovation Drive</p>
              <p className="text-teal-400">San Francisco, CA 94105</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary-500" />
            <p className="text-brown-400">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary-500" />
            <p className="text-brown-400">contact@caprioleconsulting.com</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-brown-400 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-brown-50 rounded-full hover:bg-brown-100 transition-colors">
            <Linkedin className="w-5 h-5 text-brown-400" />
          </a>
          <a href="#" className="p-2 bg-brown-50 rounded-full hover:bg-brown-100 transition-colors">
            <Twitter className="w-5 h-5 text-brown-400" />
          </a>
          <a href="#" className="p-2 bg-brown-50 rounded-full hover:bg-brown-100 transition-colors">
            <Github className="w-5 h-5 text-brown-400" />
          </a>
        </div>
      </div>
    </div>
  );
}