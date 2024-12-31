//app/api/maps/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(q || '')}`;

  return NextResponse.redirect(url);
}