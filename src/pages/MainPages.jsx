import React, { useEffect, useRef, useState } from 'react'
import Header from './components/header'
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import music from '../assets/upload/Can You Feel The Love Tonight (The Lion King) - Elton John (Boyce Avenue ft. Connie Talbot cover).mp3'

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
import OpeningCover from './OpeningCover'

export default function MainPages() {
  const audioRef = useRef(null);
  const [isAnimation, setIsAnimation] = useState('')
  const [isPlaying, setIsPlaying] = useState(true)
  // const fetchUserData = async () => {
  //   const { data: user, error } = await supabase.from('bride').select('*').eq('username', username).single()

  //   if (error) {
  //     console.log(error)
  //   } else {
  //     setUserData(user)
  //   }
  // }

  const handleClose = () => {
    setIsAnimation('animate-scrollTop')
    document.body.style.overflow = 'auto'
    audioRef.current.play();
    window.scrollTo(0, 0)
  }

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <>
      <audio ref={audioRef} src={music}></audio>
      <OpeningCover onClose={handleClose} animationScroll={isAnimation} />
      <div div className='flex relative overflow-x-hidden size-full'>
        <div className='h-screen hidden md:block md:w-7/12 lg:w-8/12 relative'>
          <BannerDesktopSection />
        </div>
        <div className='size-full md:w-5/12 lg:w-4/12 relative'>
          <button onClick={togglePlayPause} className='fixed right-0 bottom-20 m-1 p-2 z-[100] border-4 border-black/70 rounded-full bg-white'>
            {!isPlaying ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
          <section>
            <Header menu={false} logo='I & M' />
          </section>
          <BannerSection />
          <IntroHashTagSection />
          <ShareSection />
          <BrideGroomSection />
          <TimeLocationSection />
          <GallerySection />
          <GiftSection />
          <RSVPSection />
          <ThankyouSection />
        </div>
      </div>
    </>
  )
}
