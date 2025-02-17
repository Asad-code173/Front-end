import React from 'react'
import about from "../../assets/about.webp"

const Aboutus = () => {
  return (
   <>
    <h1 className='text-center text-2xl uppercase text-custom-dark -mb-3 mt-4 md:mt-48 md:mb-12 md:text-[40px]'>
        About us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
        <div className="flex justify-center">
          <img className='rounded-[34px] mt-8 p-3 md:ml-60 md:mb-2 ' src={about} alt='about' />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center p-4">
          <h2 className='text-3xl uppercase  md:mt-12 mb-4 md:mb-4 md:ml-[116px] text-custom-dark text-center md:text-left'>
            Our Brand Story
          </h2>
          <p className='text-sm text-center md:ml-16'>
            Our legacy lies in our root strengths; vibrant colours<br />
            design aesthetics that mirror our emotions, fashion that<br />
            is ever evolving, and an unforgettable retail experience.<br />
            Since its inception, Khaadi has been making it possible<br />
            for women to dress in an inspiring, vibrant, affordable<br />
            way – whilst celebrating their uniqueness with every<br /> style,
            stitch and weave. We recognize the confidence she<br /> has in her
            own individuality by making it possible for her<br /> express everything
            she is. Khaadi believes that culture,<br /> values, mindsets are in a constant
            state of evolution, and<br /> we strive to keep transforming with it.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
        <div className="flex justify-center md:order-1">
          <img className='rounded-[34px] mt-8 p-3 md:mr-36 md:w-full md:mb-4 ' src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw9a8ea507/about-us-new2.jpg" alt='about' />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center p-4">
          <h2 className='text-3xl uppercase font-medium md:mt-12 mb-4 md:mb-4 md:ml-40 text-custom-dark text-center md:text-left'>
          Our Brand Asset Transformation
            
          </h2>
          <p className='text-sm text-center md:ml-32'>
            Our new logo is reflective of our CEO, Shamoon Sultan’s<br />
            vision of growth and expansion. It is to position Khaadi<br />
            as the leading brand in Pakistan with a global footprint.<br />
            Two decades ago, we started off by catering to a<br />
            different customer, now our customer has a new mind<br />
            set and we need to be relevant. There’s a new generation<br />
            of clientele that is looking towards our brand and they<br />
            are more confident, expressive, and empowered in the<br /> way they are thinking.
          </p>
        </div>
      </div>
   </>
  )
}

export default Aboutus