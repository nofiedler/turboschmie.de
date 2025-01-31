"use client";

import { useEffect, useState, useMemo } from 'react';

export const MapView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = "Turboschmiede, Gustav-Heinemann-Straße 25, 96215 Lichtenfels";

  const mapUrl = useMemo(() => {
    return `/api/maps?q=${encodeURIComponent(location)}`;
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
        observer.disconnect();
      }
    });

    const mapElement = document.getElementById('map-container');
    if (mapElement) observer.observe(mapElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="map-container" className="w-full h-full rounded-xl overflow-hidden">
      {isVisible ? (
        <iframe
          className="w-full md:h-full h-96 border-none"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        />
      ) : null}
    </div>
  );
};