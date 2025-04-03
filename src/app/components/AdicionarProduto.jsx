import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gycriyugpnvlvbdltvwf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5Y3JpeXVncG52bHZiZGx0dndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDUzNjIsImV4cCI6MjA1ODIyMTM2Mn0.t93mIb4je86ohTE20FVepBcercuiZGxgk83Qe0iNJogI";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        let { data, error } = await supabase.from("vitrine").select("*");
        if (error) throw error;
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>{produto.preco}</p>
          <img src={produto.imagem} alt={produto.nome} width="200" />
        </div>
      ))}
    </div>
  );
}
