import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-row flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-center">


        <div className="z-20 flex w-full flex-col lg:w-[90%]">
          <div className='relative'>

            <h2 className="bold-40 lg:bold-64 justify-center text-start">Our Services</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
                description1={feature.description1}
                description3={feature.description3}
                point1={feature.point1}
                point2={feature.point2}
                point3={feature.point3}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  description1:string;
  description3:string;
  point1:string;
  point2:string;
  point3:string;
}

const FeatureItem = ({ title, icon, description,point1,point2,point3,description1,description3 }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-custom-blue">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        <strong>{point1}</strong>:{description}
      </p>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        <strong>{point2}</strong>:{description1}
      </p>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        <strong>{point2}</strong>:{description3}
      </p>
    </li>
  )
}

export default Features