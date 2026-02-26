"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

const MENU_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Mains" },
  { id: "burgers", name: "Burgers" },
  { id: "pizza", name: "Pizza" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and truffle oil.",
    price: "8,500 FCFA",
    category: "mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "La Marquise Burger",
    description: "Double beef patty, cheddar, caramelized onions, house sauce.",
    price: "5,000 FCFA",
    category: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Tomato sauce, fresh mozzarella, basil.",
    price: "4,500 FCFA",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Grilled Gambas",
    description: "Giant prawns grilled with garlic butter and herbs.",
    price: "12,000 FCFA",
    category: "mains",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, caesar dressing.",
    price: "4,000 FCFA",
    category: "starters",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone.",
    price: "3,500 FCFA",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-400 mb-8">Discover a fusion of flavors.</p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 bg-white shadow-sm z-30 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-4 items-center">
          <Filter className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="w-full border border-amber-600 text-amber-600 py-2 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                  Add to Order (Coming Soon)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
