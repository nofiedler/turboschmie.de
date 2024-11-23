"use client";

export const MapView = () => {
  const location =
    "Turboschmiede, Gustav-Heinemann-Straße 25, 96215 Lichtenfels";

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Anfahrt
      </h1>
      <iframe
        className="w-full h-[450px] border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`/api/maps?q=${encodeURIComponent(location)}`}
      ></iframe>
    </div>
  );
};