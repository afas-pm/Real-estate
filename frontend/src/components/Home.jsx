import Herobanner from './Herobanner'
import GuestStay from './GuestStay'
import TrendingProperties from './TrendingProperties'
import BestProperties from './BestProperties'
import PromotionalBanners from './PromotionalBanners'

export default function Home() {
  return (
    <main>
      <Herobanner />
      <GuestStay />
      <TrendingProperties />
      <BestProperties />
      <PromotionalBanners />
    </main>
  )
}
