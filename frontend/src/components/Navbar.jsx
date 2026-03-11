import { useState } from 'react'
import { FiChevronDown, FiSearch, FiMenu, FiMapPin } from 'react-icons/fi'
import { FaUser } from "react-icons/fa";
import { TbHomeSearch, TbHomeDollar } from "react-icons/tb"
import { MdOutlineRealEstateAgent } from 'react-icons/md'
import { LuBedSingle } from 'react-icons/lu'
import NavLogo from '../assets/NavLogo.png'

export default function Navbar() {
  const [locationOpen, setLocationOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo + Menu Items */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <img src={NavLogo} alt="Logo" className="h-10" />
            </div>

            {/* Menu Items - Desktop */}
            <div className="hidden lg:flex gap-8">
              <a href="#" className="flex items-center gap-2 text-gray-800 hover:text-primary font-medium transition whitespace-nowrap">
                <TbHomeSearch size={20} />
                Home
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition whitespace-nowrap">
                <TbHomeDollar size={20} />
                Rent
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition whitespace-nowrap">
                <MdOutlineRealEstateAgent size={20} />
                Buy
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition whitespace-nowrap">
                <LuBedSingle size={20} />
                Paying Guest
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            {/* Location Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex items-center gap-1 text-gray-800 font-medium transition"
              >
                <FiMapPin size={18} className="text-gray-800" />
                <span>Kochi</span>
                <FiChevronDown size={14} className={`transform transition ml-1 text-gray-500 ${locationOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-lg px-3 py-1.5 w-64">
              <FiSearch size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none ml-2 text-sm w-full placeholder-gray-400"
              />
            </div>

            {/* Merged Menu + User Button */}
            <div className="flex items-center border border-primary rounded-lg overflow-hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center text-primary px-3 py-2.5 transition hover:bg-primary/5"
              >
                <FiMenu size={20} />
              </button>
              <div className="w-[1px] h-4 bg-primary opacity-40" />
              <button className="flex items-center justify-center bg-primary text-white px-3 py-2.5 transition shadow-sm hover:opacity-90">
                <FaUser size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 bg-white animate-in slide-in-from-top duration-300">
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-gray-800 hover:bg-gray-50 rounded-lg transition font-medium">
              <TbHomeSearch size={20} /> Home
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-gray-500 hover:bg-gray-50 rounded-lg transition font-medium">
              <TbHomeDollar size={20} /> Rent
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-gray-500 hover:bg-gray-50 rounded-lg transition font-medium">
              <MdOutlineRealEstateAgent size={20} /> Buy
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-gray-500 hover:bg-gray-50 rounded-lg transition font-medium">
              <LuBedSingle size={20} /> Paying Guest
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}