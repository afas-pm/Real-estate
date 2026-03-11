import houseBanner from '../assets/house_banner.jpg'
import savingsBanner from '../assets/savings_banner.png'

export default function PromotionalBanners() {
    return (
        <section className="py-12 bg-[white] pb-80">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Left Promo - Affordable PG */}
                    <div className="relative bg-gray-900 rounded-[20px] h-[220px] overflow-hidden group">
                        <img
                            src={houseBanner}
                            alt="Affordable PG"
                            className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        {/* Text aligned left, vertically centered */}
                        <div className="relative z-10 h-full flex flex-col justify-center px-8 gap-1">
                            <h3 className="text-[22px] font-black text-white leading-tight">
                                Affordable PG
                            </h3>
                            <p className="text-[15px] font-bold text-white">Extra</p>
                            <p className="text-[15px] font-bold text-white mb-2">10% off</p>
                            <button className="bg-primary hover:bg-teal-700 text-white text-[11px] font-bold px-5 py-2 rounded-md transition w-fit">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Right Promo - Save $200 */}
                    <div className="relative bg-[#F0EFEF] rounded-[20px] h-[220px] overflow-hidden flex items-center">
                        {/* Person image - left side */}
                        <div className="absolute left-0 top-0 h-full w-[50%]">
                            <img
                                src={savingsBanner}
                                alt="Savings"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        {/* Text - right side, vertically centered */}
                        <div className="absolute right-0 w-[70%] h-full flex flex-col items-start justify-center px-8 gap-2">
                            <h3 className="text-[28px] font-black text-primary leading-tight">
                                Save $200
                            </h3>
                            <p className="text-gray-500 font-medium text-[13px]">
                                On Booking Via Credit Card
                            </p>
                            <button className="bg-primary hover:bg-teal-700 text-white text-[11px] font-bold px-5 py-2 rounded-full transition mt-1">
                                View More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}