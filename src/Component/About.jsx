import SectionHeading from "./SectionHeading";
import { stats } from "../data/content";
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Our Story" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Coffee Beans"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Coffee Roasting"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="font-heading text-3xl font-bold text-amber-800 mb-6">
              Three Generations of Khost Super Store
            </h3>
            <p className="text-gray-700 mb-6">
              In 2011, Khost Super Store Owner opened their first small Grocery
              shop in Kart-e-naw. With a passion for the perfect brew and a
              commitment to quality, they began a journey that would span
              generations.
            </p>
            <p className="text-gray-700 mb-6">
              Today, Khost Super Store operates in over 2 countries, but we
              still roast our Products in small batches using the same
              traditional methods Khost perfected decades ago. Every Crop tells
              our story.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-6 bg-amber-50 rounded-xl"
                >
                  <div className="text-amber-700 text-3xl font-bold mb-2">
                    {s.value}
                  </div>
                  <div className="text-amber-900">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
