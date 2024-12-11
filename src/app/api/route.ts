import { NextRequest } from 'next/server'
import { update } from '../home/data'
export async function GET(request: NextRequest) {
  const v = request.nextUrl.searchParams.get('v')
  if (v) {
    await update(0, +v)
    return new Response('success')
  }
  return new Response('error')
}
