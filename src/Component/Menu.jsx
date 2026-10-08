import SectionHeading from "./SectionHeading";
import { menuItems } from "../data/content";

export default function Menu() {
  return (
    <section id="menu" className="menu-bg bg-cover bg-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            From classic espresso to innovative seasonal creations, every
            product is crafted with precision and passion.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-900">
                    {item.name}
                  </h3>
                  <span className="text-amber-700 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 rounded-lg transition-colors font-medium">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
