import Image from 'next/image';

interface CardProps {
  title: string;
  price?: string;
  category?: string;
  description: string;
  imageSrc: string;
}

export default function Card({ title, price, category, description, imageSrc }: CardProps) {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900">
      
      {/* Next.js Optimized Image */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 384px"
        />
        
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h3>
          <span className="text-lg font-semibold text-blue-600">{price}</span>
        </div>
        
        <p className="mb-6 text-md leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <button className="w-full rounded-xl bg-slate-900 py-3 font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}