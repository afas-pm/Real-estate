import ProductCard from './ProductCard'

export default function FeatureCards({ properties, showExtraAmenities }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <ProductCard
          key={property.id}
          showExtraAmenities={showExtraAmenities}
          property={{
            ...property,
            period: 'Single Share',
            tag: 'For Men'
          }}
        />
      ))}
    </div>
  )
}
