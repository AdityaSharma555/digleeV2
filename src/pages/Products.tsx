import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    title: "Luxury Spa Hamper",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    description: "Premium spa essentials packed in an elegant gift box"
  },
  {
    id: 2,
    title: "Gourmet Delight",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1557748362-4e95f0de4f6f?auto=format&fit=crop&q=80",
    description: "Selection of finest chocolates and premium snacks"
  },
  {
    id: 3,
    title: "Wine & Cheese Collection",
    price: "$249.99",
    image: "https://images.unsplash.com/photo-1543363950-c78545037afc?auto=format&fit=crop&q=80",
    description: "Curated selection of wines paired with artisanal cheeses"
  },
  {
    id: 4,
    title: "Birthday Special",
    price: "$179.99",
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&q=80",
    description: "Make their day special with our birthday celebration hamper"
  }
];

export default function Products() {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center mb-12">Our Premium Hampers</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}