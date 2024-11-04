import React from 'react'

export default function Sectionheading({title}) {
  return (
    <div className='bg-black text-center'>
      <h1 className="text-9xl font-bold  text-white -mb-16 opacity-[6%]">
              {title}
            </h1>
            <h2 className="text-8xl font-semibold  text-white fade-in2">
              {title}
            </h2>
    </div>
  )
}
