import { FaMugSaucer } from "react-icons/fa6";

const links = ["Privacy Policy", "Terms of Service", "Careers"];

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center mr-3">
                <FaMugSaucer className="text-amber-100 text-2xl" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-amber-100">
                Khost Super Store
              </h2>
            </div>
            <p className="mt-2 text-amber-400 font-medium">
              Selling exceptional products since 2011
            </p>
          </div>

          <div className="flex space-x-6">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-amber-400 font-normal text-[17px] tracking-wide hover:text-amber-300 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center font-medium tracking-wide text-amber-500">
          <p>
            &copy; {new Date().getFullYear()} Khost Super Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
