import React from 'react'
import Karavanlar1 from './Components/Karavanlar1';
import { karavanlar } from './karavandata';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Navbar from './Components/Navbar';
import resim from './resim.jpg'

function App() {
  return (
    <div className='w-[100%]'>

      <Navbar />

      <div>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
          <ParallaxBannerLayer image={resim} speed={-35} className='d-flex align-items-center justify-content-center' />
          <ParallaxBannerLayer className='w-100 text-white h-100 d-flex align-items-center justify-content-center'>
            <h1>My Headline</h1>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        <div className='w-100 bg-white'>
          {karavanlar.map(karavan => {
            return <Karavanlar1 karavanImage={karavan} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;