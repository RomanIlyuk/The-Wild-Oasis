import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ltrpueouljjgppjljutm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cnB1ZW91bGpqZ3BwamxqdXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4ODMzODEsImV4cCI6MjA4OTQ1OTM4MX0.B4MD4lgk1W-oHpRE_7L9nmRtgmmvMl3FYBVr7xxvgY0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
