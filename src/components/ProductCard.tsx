import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({ title, price, image, description }: ProductCardProps) {
  const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(`Hi! I'm interested in the ${title} hamper.`);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-600">{price}</span>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}