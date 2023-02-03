import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import icons from '../../../public/assets/icon/crucified-pose.png'
import icons2 from '../../../public/assets/icon/dancer-balance-posture-on-one-leg.png'
import icons3 from '../../../public/assets/icon/dancer-motion.png'
function CardAbout({ img, heading }) {
  return (
    <div className="flex gap-5 px-4">
      <div className="bg-white/30 backdrop-blur-lg rounded-xl min-w-[100px] flex items-center justify-center">
        {img}
      </div>
      <div>
        <h2 className="text-xl font-medium">{heading}</h2>
        <p className="flex font-light items-center gap-5 mt-5">
          Learn More <BsArrowRightShort />
        </p>
      </div>
    </div>
  )
}

export default CardAbout
