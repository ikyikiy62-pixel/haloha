import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, quantity, service } = body;

    if (!url || !quantity || !service) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    console.log(`[${service}] Processing ${quantity} for ${url}`);

    return NextResponse.json({
      status: 'success',
      message: `Boost ${service} sedang diproses`,
      orderId: `ORD-${Date.now()}`,
      estimatedTime: '5-15 menit'
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
