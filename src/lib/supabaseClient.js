import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gycriyugpnvlvbdltvwf.supabase.co"; // Pegue no Supabase
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5Y3JpeXVncG52bHZiZGx0dndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDUzNjIsImV4cCI6MjA1ODIyMTM2Mn0.t93mIb4je86ohTE20FVepBcercuiZGxgk83Qe0iNJog"; // Pegue no Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Testando conexão
(async () => {
  const { data, error } = await supabase.from("vitrine").select("*");
  if (error) console.error("Erro ao conectar ao Supabase:", error.message);
  else console.log("Conexão com Supabase bem-sucedida!", data);
})();
