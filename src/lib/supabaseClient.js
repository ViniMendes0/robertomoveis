import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



// Testando conexão
(async () => {
  const { data, error } = await supabase.from("vitrine").select("*");
  if (error) console.error("Erro ao conectar ao Supabase:", error.message);
  else console.log("Conexão com Supabase bem-sucedida!", data);
})();
