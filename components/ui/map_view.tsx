"use client";

import { useEffect, useState } from 'react';

export const MapView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = "Turboschmiede, Gustav-Heinemann-Straße 25, 96215 Lichtenfels";

  useEffect(() => {
    // Intersection Observer für Lazy Loading
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    const mapElement = document.getElementById('map-container');
    if (mapElement) observer.observe(mapElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="map-container" className="w-full h-full rounded-xl">
      {isVisible ? (
        <iframe
          className="w-full h-full rounded-xl border"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`/api/maps?q=${encodeURIComponent(location)}`}
        />
      ) : (
        <div className="w-full h-full bg-gray-100 animate-pulse" />
      )}
    </div>
  );
};
