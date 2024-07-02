import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='font-[Poppins]  max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out BUNS Out</p>
                <p className='px-2 '>Running 24/7 through your mind</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </  div>
            <img src="https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Daily Diets</p>
                <p className='px-2 '>Newly added .Just for you!.</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </  div>
            <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Thinking of Ending Meal</p>
                <p className='px-2 '>Without sweets. Impossible!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </  div>
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards