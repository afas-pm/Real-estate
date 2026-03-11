import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../assets/Banner.png'

export default function Herobanner() {
  return (
    <section className="py-8 bg-[#F1F1F1]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="bg-[#9EE2E1] rounded-[20px] overflow-hidden relative min-h-[260px] flex items-center px-8 md:px-6">

          {/* Left Content */}
          <div className="max-w-[500px] py-6 md:py-10 z-10">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                10% off
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-900">
                On first-month rent for bookings
              </p>
              <div className="pt-4">
                <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold px-10 py-3 rounded-full transition transform hover:scale-105">
                  Explore
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute right-0 top-0 h-full w-[60%] pointer-events-none">
            <img
              src={BannerImage}
              alt="Promotion"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}