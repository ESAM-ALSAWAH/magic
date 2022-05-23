import React from 'react'
import Link from 'next/link'
export const HeroHome: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='relative bg-[#040D20] pt-20 pb-10 overflow-hidden'>
      <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className='max-w-[100%] sm:max-w-[40%] w-[100%]' data-aos="zoom-in"
          data-aos-duration="2000">
          <img src='/images/shape_hero.svg' alt='hero_shape' className='w-[90%] sm:w-[100%] ' />
        </div>
        <div className='max-w-[100%] sm:max-w-[40%] w-[100%]' data-aos="zoom-in"
          data-aos-duration="2000">
          <h3 className='text-[#d8ba71] my-10'>Magic Group</h3>
          <p className='text-white'>{text}</p>
        </div>
      </div>
      <div className='flex flex-col my-[100px] gap-y-10 sm:gap-y-20 ltr'>
        <Link href="/group/specialone" >
          <a className='block  relative text-lg sm:text-4xl py-2 sm:py-4  px-4 sm:px-20  w-fit bg-[#d8ba71] text-white hover:text-white' data-aos="fade-left"
            data-aos-duration="3000">
            <img src="/images/contact_specialone.svg" alt="images" className='absolute -right-[65px] -top-[50px] sm:-right-[130px] sm:-top-[100px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' />
            Special One
          </a>
        </Link>
        <Link href="/group/realestate" >
          <a className='block  my-4 relative text-lg sm:text-4xl py-2 sm:py-4  px-4 sm:px-20 self-end w-fit bg-[#d8ba71] text-white hover:text-white' data-aos="fade-right"
            data-aos-duration="3000">
            <img src="/images/contact_realestate.svg" alt="images" className='absolute -left-[65px] -top-[50px] sm:-left-[130px] sm:-top-[100px] w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' />
            Magic Real estate
          </a>
        </Link>
      </div>
    </div>
  )
}
