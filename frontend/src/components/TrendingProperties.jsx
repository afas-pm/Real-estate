import ProductCard from './ProductCard'
import frame5 from '../assets/frame-5.png'
import frame6 from '../assets/frame-6.png'
import frame7 from '../assets/frame-7.png'
import frame8 from '../assets/frame-8.png'
import frame9 from '../assets/frame-9.png'
import frame10 from '../assets/frame-10.png'
import frame11 from '../assets/frame-11.png'
import frame12 from '../assets/frame-12.png'

export default function TrendingProperties() {
  const properties = [
    {
      id: 1,
      price: '₹50 Lac',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame12,
      amenities: ['3 BHK', 'Pool', 'Garden']
    },
    {
      id: 2,
      price: '₹50 Lac',
      type: '3BHK Home',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame5,
      amenities: ['3 BHK', 'Pool', 'Garden']
    },
    {
      id: 3,
      price: '₹50 Lac',
      type: '1BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame6,
      amenities: ['1 BHK', 'Terrace', 'Parking']
    },
    {
      id: 4,
      price: '₹50 Lac',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame7,
      amenities: ['3 BHK', 'Pool', 'Gym']
    },
    {
      id: 5,
      price: '₹50 Lac',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame8,
      amenities: ['3 BHK', 'Gym', 'Security']
    },
    {
      id: 6,
      price: '₹50 Lac',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame9,
      amenities: ['3 BHK', 'Balcony', 'Parking']
    },
    {
      id: 7,
      price: '₹50 Lac',
      type: '1BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame10,
      amenities: ['1 BHK', 'Terrace', 'Garden']
    },
    {
      id: 8,
      price: '₹50 Lac',
      type: '3BHK House',
      location: 'Kakkandi, Kochi',
      rating: '4.8',
      image: frame11,
      amenities: ['3 BHK', 'Pool', 'Gym']
    }
  ]

  return (
    <section
      className="py-12"
      style={{ background: 'linear-gradient(178.36deg, #DBF8F7 -2.17%, #EDFBFB 86.41%, #FFFFFF 98.61%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trending Properties Near You
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
