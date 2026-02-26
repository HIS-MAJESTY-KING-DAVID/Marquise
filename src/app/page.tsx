import Link from "next/link";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Placeholder for Video/Image Background */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Where Fine Dining Meets <br />
            <span className="text-amber-500">Casual Comfort</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Bonapriso's hidden gem for international fusion and gourmet fast food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservations" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Book a Table
            </Link>
            <Link 
              href="/menu" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">A Tale of Two Kitchens</h2>
              <p className="text-gray-600 leading-relaxed">
                At La Marquise, we believe in variety without compromise. Whether you're craving a gourmet burger from our Fast Food kitchen or a delicate truffle pasta from our Fine Dining chefs, we deliver excellence on every plate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Bonapriso, our dual-concept space offers a chic outdoor patio for sunny lunches and an elegant indoor dining room for intimate dinners.
              </p>
              <Link href="/about" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
                Read our story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Outdoor Seating" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <div className="bg-amber-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-2 text-amber-800">4.5/5 Stars</h3>
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-sm text-amber-700">"Best atmosphere in Douala!" - TripAdvisor Review</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-900 text-white p-6 rounded-2xl">
                  <Clock className="h-8 w-8 text-amber-500 mb-4" />
                  <h3 className="font-bold text-xl mb-1">Open Daily</h3>
                  <p className="text-gray-400">09:00 AM - 12:00 AM</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fine Dining Dish" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Taste the Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local Cameroonian favorites to international classics, our menu is designed to delight every palate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gourmet Burgers" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Signature Burgers</h3>
                <p className="text-gray-600 mb-4">Hand-crafted patties, fresh brioche buns, and house-made sauces.</p>
                <Link href="/menu?category=fast-food" className="text-amber-600 font-medium hover:text-amber-700">View Menu &rarr;</Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fine Pasta" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Italian Fusion</h3>
                <p className="text-gray-600 mb-4">Authentic pastas with a local twist. Fresh ingredients, bold flavors.</p>
                <Link href="/menu?category=fine-dining" className="text-amber-600 font-medium hover:text-amber-700">View Menu &rarr;</Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519671482538-518b5c2bf01c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Private Events" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Private Events</h3>
                <p className="text-gray-600 mb-4">Host your birthday, wedding, or corporate dinner in our exclusive spaces.</p>
                <Link href="/events" className="text-amber-600 font-medium hover:text-amber-700">Plan Event &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience La Marquise?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Book your table now and join us for an unforgettable dining experience.
          </p>
          <Link 
            href="/reservations" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors inline-block"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
}
