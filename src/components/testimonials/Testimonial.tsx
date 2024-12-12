import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-4">
        <svg className="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-teal-400 mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-brown-400">{author}</p>
        <p className="text-accent-400">{role}, {company}</p>
      </div>
    </div>
  );
}