import React from 'react'
import assets from '../assets/assets'
import Title from '../components/Title'
import ServiceCard from '../components/ServiceCard'

const Services = () => {

  const servicesData = [
    {
      title: "Advertising",
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon
    },
    {
      title: "Content Marketing",
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon
    },
    {
      title: "Content Writing",
      description: 'We help you create a marketing strategy that drives results.',
      icon: assets.content_icon
    },
    {
      title: "Social Media",
      description: 'We help you build a strong social media presence and engage with your audience.',
      icon: assets.social_icon
    },
  ]

  return (
    <div
      id='services'
      className='relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white overflow-visible'
    >
      {/* background gradient */}
      <img
        src={assets.bgImage2}
        alt=""
        className='absolute top-[-120px] left-[-120px] sm:top-[-150px] sm:left-[-150px] md:top-[-180px] md:left-[-180px] lg:top-[-200px] lg:left-[-200px] w-[400px] sm:w-[550px] md:w-[700px] lg:w-[850px] xl:w-[950px] -z-10 dark:hidden'
      />

      <Title
        title='How can we help?'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

    </div>
  )
}

export default Services
