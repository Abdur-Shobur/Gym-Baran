import Banner from '@/component/banner/Banner'
import CardAbout from '@/component/card/CardAbout'
import StyleCard from '@/component/card/StyleCard'
import StyleCard2 from '@/component/card/StyleCard2'
import Heading from '@/component/common/Heading'
import Paragraph from '@/component/common/Paragraph'
import Image from 'next/image'
import React from 'react'
import icons from '../../public/assets/icon/crucified-pose.png'
import icons2 from '../../public/assets/icon/dancer-balance-posture-on-one-leg.png'
import icons3 from '../../public/assets/icon/dancer-motion.png'
import bg_img from '../../public/assets/bannerBg/image 78.png'
import Button from '@/component/common/Button'
import { HiOutlineArrowRight } from 'react-icons/hi'
function page() {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Banner />

      <div className="flex flex-col items-center my-28 ">
        <div className="w-[60%]">
          <Heading>
            Healthy in side <br /> fresh out side
          </Heading>
        </div>
        <div className="w-3/4">
          <Paragraph>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home. Healthy life makes you
            more excited to live the day
          </Paragraph>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 bg-primary text-white p-16 rounded-2xl">
          <CardAbout
            img={<Image alt="icons" src={icons} className="w-20" />}
            heading="Get that 11 line in 30 days"
          />
          <CardAbout
            img={<Image alt="icons" src={icons2} className="w-20" />}
            heading="14 Days
            sherd challenge"
          />
          <CardAbout
            img={<Image alt="icons" src={icons3} className="w-20" />}
            heading="Get flat belly in 30 days"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center my-32">
        <div className="flex-1">
          <Image alt="img" src={bg_img} />
        </div>
        <div className="flex-1">
          <div className="">
            <Heading>Best full body workout to lose fat</Heading>
          </div>
          <div className="my-10">
            <Paragraph>
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.
            </Paragraph>
          </div>
          <Button icon={<HiOutlineArrowRight className="text-xl" />} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center my-32">
        <div className="flex-1">
          <div className="">
            <Heading>Best full body workout to lose fat</Heading>
          </div>
          <div className="my-10">
            <Paragraph>
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.
            </Paragraph>
          </div>
          <Button icon={<HiOutlineArrowRight className="text-xl" />} />
        </div>
        <div className="flex-1">
          <Image alt="img" src={bg_img} />
        </div>
      </div>
    </div>
  )
}

export default page
