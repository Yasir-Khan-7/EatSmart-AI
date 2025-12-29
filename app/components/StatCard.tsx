import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  value: string;
  label: string;
  image?: string;
  className?: string;
}

export default function StatCard({ value, label, image, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white rounded-3xl p-6 shadow-sm ${className}`}>
      {image && (
        <div className="mb-4 w-full h-40 relative rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <h3 className="text-4xl lg:text-5xl font-bold text-[#2d3e30] mb-2">{value}</h3>
      <p className="text-sm text-[#2d3e30]/70 font-medium leading-snug">{label}</p>
    </div>
  );
}

