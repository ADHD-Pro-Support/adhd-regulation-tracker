import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
export async function GET() {
  const ok = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  return NextResponse.json({ ok, supabaseUrlPresent: ok });
}
