import React from 'react'
import Header from '../components/header/page'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>

      <Header />

      <div className='flex h-[180%] mt-7'>
        <div className='flex flex-col items-start m-16 justify-center w-[496px] left-[176px] top-316px space-y-6'>
          <div className='font-bold font-libreBodoni text-2xl'>
            <p>IMPECCABLE</p>
            <p>CRAFTSMANSHIP AND</p>
            <p>FINESSE</p>
          </div>

          <div className='w-[902px] h-[147px]'>
            <div className='top-[533px] left-[171px] text-[#787054] font-medium text-1xl'>
              <p>An example of intricate workmanship and detail, elegant</p>
              <p>necklaces and long and short chains form a part of our</p>
              <p>desirable collection.</p>
            </div>

            <button className='hover:bg-black bg-customColor text-lg font-libreBodoni rounded-md h-[38px] w-[168px] mt-8 text-white'>
              Explore Now 
            </button>
          </div>
      </div>

        <div className='flex justify-center items-center left-[24px] top-[28px] p-10 '>
          <Image src="/images/img.png"
          width={300}
          height={400}
           alt='picture'
           className='slideIn-pic' />
        </div>
    </div>
    </div>
  )
}

export default HomePage
