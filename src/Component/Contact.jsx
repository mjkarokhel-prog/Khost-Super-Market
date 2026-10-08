import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent";

const info = [
  {
    Icon: FaLocationDot,
    title: "Our Main Office",
    lines: ["Station-sabiqa, Kart-e-naw, Kabul, Afghanistan"],
  },
  { Icon: FaPhone, title: "Phone Number", lines: ["+93 77 740 7077"] },
  { Icon: FaEnvelope, title: "Email Address", lines: ["mjkarokhel@gmail.com"] },
  {
    Icon: FaClock,
    title: "Business Hours",
    lines: ["Monday - Friday: 8am - 9pm", "Saturday: 8am - 9pm"],
  },
];

const socials = [
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaTiktok, label: "TikTok" },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form data to your backend / email service
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions about our products, locations, or catering services? We'd love to hear from you."
        />

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-amber-900 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={inputClass}
                  placeholder="Mujahid"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-amber-900 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={inputClass}
                  placeholder="karkhel@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-amber-900 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-amber-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {info.map(({ Icon, title, lines }) => (
                  <div key={title} className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Icon className="text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">{title}</h4>
                      <p className="text-amber-800">
                        {lines.map((line, i) => (
                          <span key={line}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-amber-200">
                <h4 className="font-bold text-amber-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socials.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="bg-amber-100 hover:bg-amber-200 text-amber-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
