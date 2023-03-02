import React, { useEffect } from 'react'
import KaravanlarOpacity from './Components/KaravanlarOpacity';
import KaravanlarAsagidanYukari from './Components/KaravanlarAsagidanYukari';
import { karavanlar } from './karavandata';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Navbar from './Components/Navbar';
import resim from './resim.jpg'

function App() {

  return (
    <div className='w-100' >

      <Navbar />

      <div className='mt-5'>

        <div className='w-100 bg-white'>
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

        </div>

        <ParallaxBanner style={{ aspectRatio: '3 / 1' }}>
          <ParallaxBannerLayer image={resim} speed={-50} className='d-flex align-items-center justify-content-center' />
          <ParallaxBannerLayer className='w-100 text-white h-100 d-flex align-items-center justify-content-center'>
            <h1>My Headline</h1>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div className='w-100 bg-white'>
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarAsagidanYukari karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarAsagidanYukari karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarAsagidanYukari karavanImage={karavan} />
          })}
          {karavanlar.map(karavan => {
            return <KaravanlarOpacity karavanImage={karavan} />
          })}

          {karavanlar.map(karavan => {
            return <KaravanlarAsagidanYukari karavanImage={karavan} />
          })}

        </div>
      </div>


    </div>
  );
}

export default App;