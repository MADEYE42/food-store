import React from 'react'

const Hero = () => {
  return (
    <div className='font-[Poppins] max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/75 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-purple-500'>Best</span> </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Food<span className='text-purple-500'> Delivered</span> </h1>
                
            </div>
            <img className='w-full max-h-[500px]' src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" />
        </div>
    </div>
  )
}

export default Hero