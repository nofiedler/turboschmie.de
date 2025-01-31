import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json({ error: 'Location query parameter is required' }, { status: 400 });
  }

  // Add zoom parameter to the URL to zoom out the map
  const zoomLevel = 15; // Adjust this value to zoom out further
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(q)}&zoom=${zoomLevel}`;

  return NextResponse.redirect(url);
}