import { cookies } from 'next/headers'

/**
 * Supabase Server Client Scaffold
 * 
 * To use this:
 * 1. npm install @supabase/ssr @supabase/supabase-js
 * 2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 * 3. Import createClient from this file in Server Components, Server Actions, or Route Handlers.
 * 
 * Example for Server Components:
 * import { createClient } from '@/lib/supabase/server'
 * const supabase = await createClient()
 * const { data } = await supabase.from('products').select()
 */

// import { createServerClient } from '@supabase/ssr'

export async function createClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn("Supabase URL or Anon Key is missing. Returning null client.");
    return null;
  }

  const cookieStore = await cookies()

  // Uncomment when @supabase/ssr is installed
  // return createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  //   {
  //     cookies: {
  //       getAll() {
  //         return cookieStore.getAll()
  //       },
  //       setAll(cookiesToSet) {
  //         try {
  //           cookiesToSet.forEach(({ name, value, options }) =>
  //             cookieStore.set(name, value, options)
  //           )
  //         } catch {
  //           // The `setAll` method was called from a Server Component.
  //           // This can be ignored if you have middleware refreshing
  //           // user sessions.
  //         }
  //       },
  //     },
  //   }
  // )
}
