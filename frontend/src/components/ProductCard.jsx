import { FiHeart, FiShare2 } from 'react-icons/fi'
import { FaWifi, FaUtensils, FaStar } from 'react-icons/fa6'
import { useState } from 'react'

export default function ProductCard({ property, showExtraAmenities }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-3">
            {/* Image Container */}
            <div className="relative h-48 bg-gray-100 overflow-hidden shrink-0 rounded-xl">
                <img src={property.image} alt={property.type} className="w-full h-full object-cover" />

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">
                    <button className="bg-white hover:bg-white text-primary p-2 rounded-full transition shadow-sm">
                        <FiShare2 size={18} />
                    </button>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className="bg-white hover:bg-white text-primary p-2 rounded-full shadow-sm transition-all"
                    >
                        <FiHeart size={18} fill={isLiked ? 'currentColor' : '#14B8A6'} className="text-primary" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="py-4 flex flex-col flex-1">
                {/* Price and Tag */}
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-xl text-gray-900 truncate">
                        {property.price} <span className="text-gray-400 font-normal text-base">{property.period ? `/ ${property.period}` : ''}</span>
                    </h3>
                    {property.tag && (
                        <span className="bg-[#4192FF] text-white text-[10px] font-bold px-2 py-1 rounded-sm leading-tight shrink-0">
                            {property.tag}
                        </span>
                    )}
                </div>

                {/* Location and Rating */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-base text-gray-500 truncate">
                        {property.location}
                    </p>
                    <div className="flex items-center gap-1">
                        <FaStar size={16} className="text-[#FFB800]" />
                        <span className="text-sm font-bold text-gray-900">{property.rating || '4.8'}</span>
                        <span className="text-sm text-gray-400 shrink-0">(73)</span>
                    </div>
                </div>

                {/* Bottom Amenities/Extra Section */}
                <div className="mt-auto">
                    {showExtraAmenities && (
                        <div className="flex items-center gap-4 pt-1">
                            <div className="flex items-center gap-1.5">
                                <div className="bg-[#6B7280] p-1 rounded">
                                    <FaWifi size={12} className="text-white" />
                                </div>
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Free Wifi</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="bg-[#6B7280] p-1 rounded">
                                    <FaUtensils size={12} className="text-white" />
                                </div>
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Food Included</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
