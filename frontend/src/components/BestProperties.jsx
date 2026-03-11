import { FiMapPin, FiStar, FiHeart, FiShare2 } from 'react-icons/fi'
import { useState } from 'react'
import ProductCard from './ProductCard'
import frame13 from '../assets/Frame-13.png'
import frame14 from '../assets/Frame-14.png'
import frame15 from '../assets/Frame-15.png'
import frame16 from '../assets/Frame-16.png'

export default function BestProperties() {
  const [liked, setLiked] = useState({})

  const properties = [
    {
      id: 1,
      price: '₹10,000',
      period: 'Month',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame16
    },
    {
      id: 2,
      price: '₹10,000',
      period: 'Month',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame13
    },
    {
      id: 3,
      price: '₹10,000',
      period: 'Month',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame14
    },
    {
      id: 4,
      price: '₹10,000',
      period: 'Month',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame15
    }
  ]

  return (
    <section className="py-12 bg-[#F1F1F1]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Best Properties For Rent
            </h2>
          </div>
          <button className="bg-primary text-white font-bold px-5 py-1.5 rounded-lg hover:bg-teal-700 transition text-sm">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <ProductCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
