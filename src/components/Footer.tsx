"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-amber-500">
            La Marquise
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experience the fusion of fine dining and comfort food in the heart of Bonapriso. 
            Where every meal is a celebration of taste.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="https://facebook.com" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/menu" className="hover:text-amber-500 transition-colors">Our Menu</Link></li>
            <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
            <li><Link href="/reservations" className="hover:text-amber-500 transition-colors">Reservations</Link></li>
            <li><Link href="/events" className="hover:text-amber-500 transition-colors">Private Events</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Visit Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span>Rue Tokoto, Bonapriso<br />Douala, Cameroon</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span>+237 6 70 85 85 85</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span>lamarquisedouala@gmail.com</span>
            </div>
          </div>
          <div className="pt-4">
            <p className="text-xs text-gray-500 uppercase font-semibold">Opening Hours</p>
            <p className="text-sm text-gray-300">Daily: 09:00 AM – 12:00 AM</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} La Marquise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
