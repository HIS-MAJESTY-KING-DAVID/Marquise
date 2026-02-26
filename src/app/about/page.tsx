export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[40vh] bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">A culinary landmark in the heart of Bonapriso.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">More Than Just a Restaurant</h2>
            <p className="text-gray-600 leading-relaxed">
              La Marquise was born from a simple yet ambitious vision: to create a space where the elegance of fine dining meets the comfort of everyday favorites. Located on Rue Tokoto in the upscale Bonapriso neighborhood, we have become a staple for locals and visitors alike.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our unique **dual-concept** approach sets us apart. Whether you're in the mood for a quick, high-quality burger in our casual section or a multi-course French-Italian dinner in our main dining room, we offer an atmosphere to match your occasion.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">#47</p>
                <p className="text-sm text-gray-500">TripAdvisor Ranking</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">88%</p>
                <p className="text-sm text-gray-500">Recommendation Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3c6227685?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block max-w-xs">
              <p className="italic text-gray-600">"Culinary gem... inviting ambiance."</p>
              <p className="text-sm font-bold mt-2 text-gray-900">- Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
