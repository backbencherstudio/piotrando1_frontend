import AboutUs from '@/components/AllPages/About-us/AboutUs'
import B2BDistribution from '@/components/AllPages/B2BDistribution/B2BDistribution'
import BannerSection from '@/components/AllPages/BannerSection/BannerSection'
import CustomBranding from '@/components/AllPages/CustomBranding/CustomBaranding'
import DeliveryLogistics from '@/components/AllPages/DeliveryLogistics/DeliveryLogistics'
import { FAQ } from '@/components/AllPages/Faq/Faq'
import OurMission from '@/components/AllPages/OurMission/OurMission'
import OurPackas from '@/components/AllPages/OurPackas'
import OurProduct from '@/components/AllPages/OurProduct/OurProduct'
import Process from '@/components/AllPages/Process/Process'
import Sourch from '@/components/AllPages/Sourch/Sourch'
import GetInTouch from '@/components/AllPages/Testimonials/GetInTouch'
import TestimonialsSection, { } from '@/components/AllPages/Testimonials/Testimonials'
import React from 'react'
import CountrySelect from './flag/page'
import MysteryNotice from '@/components/AllPages/MysteryNotice/MysteryNotice'
import Evaluation from '@/components/AllPages/OurProduct/EvoluationPack'
import UltraPack from '@/components/AllPages/OurProduct/UltraPack'
// import Home from '@/components/AllPages/index/Index'

export default function page() {
  return (
    <div className=''>
      <BannerSection />
      {/* <Home /> */}
      <AboutUs />
      {/* <OurMission /> */}
      {/* <OurProduct /> */}
      <div>
        {/* <Evaluation />
        <UltraPack /> */}
      </div>
      <Process />
      <B2BDistribution />

      {/* <DeliveryLogistics /> */}
      <CustomBranding />
      <Sourch />


      {/* <MysteryNotice /> */}
      {/* <OurPackas /> */}



      <TestimonialsSection />


      <FAQ />
      {/* <GetInTouch /> */}



    </div >
  )
}
