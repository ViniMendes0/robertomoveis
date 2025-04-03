import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gycriyugpnvlvbdltvwf.supabase.co"; // Substitua pela URL do seu Supabase
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5Y3JpeXVncG52bHZiZGx0dndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDUzNjIsImV4cCI6MjA1ODIyMTM2Mn0.t93mIb4je86ohTE20FVepBcercuiZGxgk83Qe0iNJog"; // Substitua pela sua chave anônima

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
