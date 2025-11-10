import React, { useState, useRef } from 'react'
import assets from '../assets/assets'

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 150, y: 150 })
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleLeave = () => setPosition({ x: 150, y: 150 })

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-white/10 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      {/* Gradient glow */}
      <div
        className='pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 opacity-70 mix-blend-overlay dark:mix-blend-lighten transition-all duration-500'
        style={{ top: `${position.y - 150}px`, left: `${position.x - 150}px` }}
      />

      <div className='flex items-center gap-10 p-8 hover:p-7 hover:m-0.5 transition-all rounded-[10px] z-10 relative'>
        <div>
          <img
            src={service?.icon || assets?.default_icon || ''}
            alt={service?.title || 'service'}
            className='w-24 h-24 bg-white dark:bg-gray-900 rounded-full m-2 object-contain border border-gray-200 dark:border-gray-700'
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold text-gray-800 dark:text-white'>{service?.title}</h3>
          <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>{service?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
