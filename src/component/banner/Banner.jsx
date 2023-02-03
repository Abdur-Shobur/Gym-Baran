import Image from 'next/image'
import React from 'react'
import bg_img from '../../../public/assets/image 77.png'
import reebok from '../../../public/assets/brand/rebook.png'
import adidas from '../../../public/assets/brand/adidus.png'
import nike from '../../../public/assets/brand/nike.png'
import puma from '../../../public/assets/brand/puma.png'
import rail from '../../../public/assets/bannerBg/Group 3840.png'
import vector from '../../../public/assets/bannerBg/Vector 32.png'
import shape from '../../../public/assets/shape/Group 3867.png'
import shape2 from '../../../public/assets/shape/Group 3868.png'
import {
  IoIosArrowDroprightCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'
import StyleCard from '../card/StyleCard'
import StyleCard2 from '../card/StyleCard2'
import Button from '../common/Button'
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 px-5">
      <div className="flex-1 lg:self-end">
        <h1 className="font-SportingGrotesqueBold text-[56px] text-dark leading-tight max-w-xl">
          Healthy in side <span className="text-primary"> fresh</span> out side
        </h1>
        <p className="text-dark  mt-6 max-w-xl">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.s
        </p>
        <div className="flex gap-7 mt-6">
          <Button icon={<IoIosArrowDroprightCircle className="text-xl" />} />
          <button className="flex justify-between items-center bg-white shadow-lg text-secondary gap-5 py-3 px-5 rounded-md">
            <IoMdArrowDroprightCircle className="text-xl" />
            <span>Get Start</span>
          </button>
        </div>
        <div className="mt-10">
          <h2 className="mb-3 text-dark">Brands:</h2>
          <div className="flex gap-12 items-center">
            <Image className="w-14" src={nike} alt="nike" />
            <Image className="w-14" src={adidas} alt="adidas" />
            <Image className="w-16" src={puma} alt="puma" />
            <Image className="" src={reebok} alt="reebok" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative flex justify-center">
          <Image alt={'abc'} src={bg_img} className="z-20 min-w-[358px]" />
          <Image
            alt={'pic'}
            src={rail}
            className="absolute top-0 bottom-0 my-auto w-96 left-36 -z-20"
          />
          <Image
            alt={'abc'}
            src={vector}
            className="absolute   bottom-0 -z-10"
          />
          <div className="w-[400px] h-[400px] rounded-full -z-40 bg-[#E6E5FF] absolute left-36 bottom-0 m-auto"></div>
          <div className="absolute top-20 left-12 z-30">
            <StyleCard />
          </div>
          <div className="absolute bottom-12 right-28 z-30">
            <StyleCard2 />
          </div>
          <div className="absolute right-32 top-20 z-30">
            <Image alt="sdf" src={shape} />
          </div>
          <div className="absolute left-0 bottom-0 z-30">
            <Image alt="sdf" src={shape2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
