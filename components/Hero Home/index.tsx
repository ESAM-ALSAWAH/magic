import React from 'react'

export const HeroHome:React.FC<{text:string}> = ({text}) => {
  return (
    <div className='relative bg-[#040D20] py-20'>
        <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className='max-w-[100%] sm:max-w-[40%] w-[100%]'>
                <img src='/images/shape_hero.svg' alt='hero_shape' className='w-[90%] sm:w-[100%] '/>
            </div>
            <div className='max-w-[100%] sm:max-w-[40%] w-[100%]'>
                <h3 className='text-[#d8ba71] my-10'>Magic Group</h3>
                <p className='text-white'>{text}</p>
            </div>
        </div>
    </div>
  )
}
