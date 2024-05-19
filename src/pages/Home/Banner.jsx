import React from 'react'
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-white  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8'>
                    <h1 className='lg:text-6xl text-5xl font-semibold text-black mb-5 lg:leading-tight leading-snug'>Монгол модон барын бүтээлүүдийг <span className='text-custom-blue'> ангилан , бүртгэх систем</span></h1>
                    <p> Одоогоор Монгол улсын хэмжээнд хадгалагдаж буй модон баран бүтээлүүдийг ангилж ялган бүртгэх нэгдсэн систем хараахан байдаггүй бөгөөд уг системийг хэрэгжүүлснээр Монгол улсын хэмжээнд хадгалагдаж буй модон баран бүтээлүүдийн нэгдсэн сан үүсгэж   үүн дээр тулгуурлан ном зохиолуудыг ангилах 
,судалгааны эргэлтэд оруулах , нэгдсэн сан үүсгэж салбар дундын судалгааг өргөжүүлэхэд ашиглах боломжтой .</p>
                    <div>
                        <input type="search" placeholder='бүтээл хайх ' className='py-2 px-2 rounded-s-sm' />
                        <button className='bg-custom-color px-6 py-2 text-white font-medium hover:bg-blue-700 transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
