import React, { useEffect, useState } from 'react'
import Header from './components/header'
import { useParams } from 'react-router-dom'
import { supabase } from '../supabase'
import music from './upload/music.mp3'

import BannerDesktopSection from './container/BannerDesktopSection'
import BannerSection from './container/BannerSection'
import IntroHashTagSection from './container/IntroHashTagSection'
import ShareSection from './container/ShareSection'
import BrideGroomSection from './container/BrideGroomSection'
import TimeLocationSection from './container/TimeLocationSection'
import GallerySection from './container/GallerySection'
import RSVPSection from './container/RSVPSection'
import ThankyouSection from './container/ThankyouSection'
import GiftSection from './container/GiftSection'

export default function MainPages() {
  const { username } = useParams()
  const [userData, setUserData] = useState(null)
  const fetchUserData = async () => {
    const { data: user, error } = await supabase.from('bride').select('*').eq('username', username).single()

    if (error) {
      console.log(error)
    } else {
      setUserData(user)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (userData) {
    return (
      <>
        <audio autoPlay='true'>
          <source src={music} type="audio/mp3" />
        </audio>
        <div div className='flex relative overflow-x-hidden'>
          <div className='h-screen hidden sm:block md:w-7/12 lg:w-8/12 relative'>
            <BannerDesktopSection />
          </div>
          <div className='container size-full md:w-5/12 lg:w-4/12 relative'>
            <section>
              <Header menu={true} logo='I & M' />
            </section>
            <BannerSection />
            <IntroHashTagSection />
            <ShareSection />
            <BrideGroomSection />
            <TimeLocationSection />
            <GallerySection />
            <GiftSection />
            <RSVPSection userData={userData} />
            <ThankyouSection />
          </div>
        </div>
      </>
    )
  }
}
