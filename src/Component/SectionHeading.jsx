export default function SectionHeading({ title, subtitle, dark = false }) {
  return (
    <div className="text-center mb-16">
      <h2
        className={`font-heading text-4xl md:text-5xl font-bold mb-4 ${
          dark ? "" : "text-amber-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl mx-auto ${
            dark ? "text-amber-200" : "text-gray-700"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-24 h-1 mx-auto ${subtitle ? "mt-4" : ""} ${
          dark ? "bg-amber-400" : "bg-amber-500"
        }`}
      />
    </div>
  );
}
