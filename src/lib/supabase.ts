import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Returns true only when real credentials are configured
export const supabaseEnabled =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co";

export type Inquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "converted" | "closed";
  created_at: string;
};
