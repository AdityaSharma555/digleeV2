import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function About() {
  const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Hi! I'd like to know more about your gift packaging services.");

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We specialize in creating memorable gifting experiences through our premium packaging and custom hamper services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80"
          alt="Gift Packaging Process"
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            With years of experience in luxury gift packaging, we take pride in creating beautiful, personalized gift
            solutions for every occasion. Each hamper is carefully curated and packaged with attention to detail.
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}