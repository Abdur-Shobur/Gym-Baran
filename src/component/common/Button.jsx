import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

function Button({ icon }) {
  return (
    <button className="flex justify-between items-center bg-secondary text-white w-[245px] py-3 px-5 rounded-md">
      <span>Get Start</span>
      {icon}
    </button>
  )
}

export default Button
