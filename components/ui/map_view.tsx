// MapView.tsx
"use client";

export const MapView = () => {
  const location =
    "Turboschmiede, Gustav-Heinemann-Straße 25, 96215 Lichtenfels";

  return (
      <iframe
        className="w-full h-full rounded-xl border"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`/api/maps?q=${encodeURIComponent(location)}`}
      ></iframe>
  );
};
