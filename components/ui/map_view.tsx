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
          className="w-full h-full border-none"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        />
      ) : (
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(location)}&zoom=14&size=600x300&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          alt="Map placeholder"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};