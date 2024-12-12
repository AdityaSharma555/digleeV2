import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80"
          alt="Gift Packaging"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-serif font-bold mb-6">Luxury Gift Packaging</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Create unforgettable moments with our premium gift hampers and bespoke packaging solutions
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700 transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              description: "Handpicked luxury items and premium packaging materials"
            },
            {
              title: "Custom Design",
              description: "Personalized hampers tailored to your preferences"
            },
            {
              title: "Perfect Gifting",
              description: "Make every occasion special with our elegant presentations"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}