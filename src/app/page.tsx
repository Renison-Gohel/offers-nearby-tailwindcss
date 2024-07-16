import ComplexCard from '@/components/ComplexCard/CompexCard';
import * as React from 'react';




export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-[rgb(14,20,27)] h-max md:flex-row md:flex-wrap md:gap-2">
      <ComplexCard/>
    </main>
  );
}
