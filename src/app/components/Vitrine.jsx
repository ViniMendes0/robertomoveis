"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [imagemAberta, setImagemAberta] = useState(null);

  const numeroWhatsApp = "5524992737449"; 

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase.from("vitrine").select("*");
      if (error) {
        console.error("Erro ao buscar produtos:", error);
      } else {
        setProdutos(data);
      }
    }
    fetchProdutos();
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen p-10"
      style={{ backgroundImage: "url('/fundo.jpg')" }}
    >
      <h1 className="text-center text-white text-3xl font-bold mb-10">
        Vitrine
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => {
          
          const mensagemWhatsApp = encodeURIComponent(
            `Olá, me interessei por este móvel: ${produto.nome}. Poderia me passar mais informações?`
          );

          return (
            <div
              key={produto.id}
              className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-center"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-60 object-contain rounded-xl mb-4 cursor-pointer"
                onClick={() => setImagemAberta(produto.imagem)}
              />
              <h2 className="text-xl font-semibold text-white">{produto.nome}</h2>
              <p className="text-white text-lg">R$ {produto.preco}</p>

              {/* Exibir dimensões se existirem */}
              {produto.altura || produto.largura || produto.comprimento ? (
                <p className="text-white text-sm">
                  {produto.altura ? `D-${produto.altura} ` : ""}
                  {produto.largura ? `L-${produto.largura} ` : ""}
                  {produto.comprimento ? `C-${produto.comprimento}` : ""}
                </p>
              ) : null}

          
              <a
                href={`https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition"
              >
                Se interessou? Chama no WhatsApp
              </a>
            </div>
          );
        })}
      </div>

      {imagemAberta && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setImagemAberta(null)}
          >
            &times;
          </button>
          <img src={imagemAberta} className="max-w-full max-h-full" alt="Zoom" />
        </div>
      )}
    </div>
  );
}
