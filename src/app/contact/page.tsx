import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[30vh] bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <h1 className="relative z-20 text-4xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">Rue Tokoto, Bonapriso<br />Douala, Cameroon</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+237 6 70 85 85 85</p>
                <p className="text-sm text-gray-500 mt-1">Available for reservations</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">lamarquisedouala@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                <p className="text-gray-600">Daily: 09:00 AM – 12:00 AM (Midnight)</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-4 rounded-xl shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.849045766296!2d9.6934!3d4.0483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDInNTMuOSJOIDnCsDQxJzM2LjIiRQ!5e0!3m2!1sen!2scm!4v1620000000000!5m2!1sen!2scm" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
