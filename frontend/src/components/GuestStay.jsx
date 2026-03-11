import FeatureCards from './FeatureCards'
import frame1 from '../assets/frame-1.png'
import frame2 from '../assets/frame-2.png'
import frame3 from '../assets/frame-3.png'
import frame4 from '../assets/frame-4.png'

export default function GuestStay() {
  const properties = [
    {
      id: 1,
      price: '₹4,000',
      type: 'Single Stays',
      location: 'Kakkandi, Kochi',
      rating: '4.4',
      image: frame4,
      amenities: ['Bed', 'WiFi']
    },
    {
      id: 2,
      price: '₹4,000',
      type: 'Single Stays',
      location: 'Kakkandi, Kochi',
      rating: '4.4',
      image: frame1,
      amenities: ['Garden', 'WiFi']
    },
    {
      id: 3,
      price: '₹4,000',
      type: 'Single Stays',
      location: 'Kakkandi, Kochi',
      rating: '4.4',
      image: frame2,
      amenities: ['Living', 'WiFi']
    },
    {
      id: 4,
      price: '₹4,000',
      type: 'Single Stays',
      location: 'Kakkandi, Kochi',
      rating: '4.4',
      image: frame3,
      amenities: ['Parking', 'WiFi']
    }
  ]

  return (
    <section className="py-12 bg-[#F1F1F1]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Find Your Ideal Pay Guest Stay
            </h2>
          </div>
          <button className="text-primary font-bold border border-primary px-5 py-1.5 rounded-lg hover:bg-teal-50 transition text-sm">
            View all
          </button>
        </div>

        <FeatureCards properties={properties} showExtraAmenities={true} />
      </div>
    </section>
  )
}
