import { FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import NavLogo from '../assets/NavLogo.png'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-14">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">

        <div className="flex gap-12 mb-16">

          {/* Brand & Social - takes up ~35% */}
          <div className="flex flex-col gap-8 w-[35%] shrink-0">
            <div className="h-[80px]">
              <img src={NavLogo} alt="POKAK" className="h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:opacity-80 transition"><FiInstagram size={24} /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FiFacebook size={24} /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FaXTwitter size={24} /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FiLinkedin size={24} /></a>
            </div>
          </div>

          {/* Right columns - Quick Links, Customer Care, Newsletter */}
          <div className="flex flex-1 justify-between gap-8">

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:underline transition">Home</a></li>
                <li><a href="#" className="hover:underline transition">Rental</a></li>
                <li><a href="#" className="hover:underline transition">Paying Guest</a></li>
                <li><a href="#" className="hover:underline transition">Buying</a></li>
                <li><a href="#" className="hover:underline transition">Offers</a></li>
                <li><a href="#" className="hover:underline transition">Bookings</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-bold text-lg mb-6">Customer Care</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:underline transition">Help Center</a></li>
                <li><a href="#" className="hover:underline transition">FAQ</a></li>
                <li><a href="#" className="hover:underline transition">Contact Support</a></li>
                <li><a href="#" className="hover:underline transition">Cancellation & Refund Policies</a></li>
                <li><a href="#" className="hover:underline transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline transition">Privacy & Policies</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 min-w-[220px]">
              <h3 className="font-bold text-lg">Stay Connected</h3>
              <p className="text-sm font-medium">Subscribe To Our News Letter</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white placeholder-white/60 outline-none text-sm"
                />
                <button className="w-full bg-white text-primary font-bold py-3 rounded-lg transition hover:bg-gray-100 text-sm uppercase tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium opacity-80">&copy; 2025 Pokak Technologies Pvt Ltd</p>
          <span className="text-sm font-medium opacity-80">Language: [ EN ▼ ]</span>
        </div>

      </div>
    </footer>
  )
}