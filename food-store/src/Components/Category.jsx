import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12 font-[Poppins] '>
        <h1 className='text-gray-700 font-bold text-4xl text-center'>Top <span className='text-purple-600'>Rated</span> Menu <span className='text-purple-600'>Items</span></h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '> 
            {categories.map((item,index)=>(
                <div key={index} className='bg-gray-200 rounded-lg p-4 flex justify-between items-center hover:scale-105    '>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} className='w-20'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category