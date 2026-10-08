import { FaClock, FaLocationDot } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { locations } from "../data/content";

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          dark
          title="Our Locations"
          subtitle="Find your perfect Product spot at one of our beautifully designed locations around the world."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-amber-800 rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{loc.name}</h3>
                <p className="text-amber-200 mb-4">{loc.description}</p>
                <div className="flex items-center text-amber-300 mb-2">
                  <FaLocationDot className="mr-2 shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <FaClock className="mr-2 shrink-0" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
            View All Locations
          </button>
        </div>
      </div>
    </section>
  );
}
