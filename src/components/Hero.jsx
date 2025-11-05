import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-visible text-gray-700 dark:text-white relative'>
        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
          Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
        </h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3'>
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </p>

        <div className='relative w-full flex justify-center'>
            <img
              src={assets.bgImage1}
              alt=""
              className='absolute top-[-60px] right-[-60px] sm:top-[-80px] sm:right-[-80px] md:top-[-100px] md:right-[-100px] lg:top-0 lg:right-0 xl:top-0 xl:right-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] z-0 dark:hidden'
            />
            <img src={assets.hero_img} alt="" className='relative w-full max-w-6xl z-10' />
        </div>
    </div>
  )
}

export default Hero
