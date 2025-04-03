"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Trabalhos = () => {
  const [trabalhos, setTrabalhos] = useState([]);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  useEffect(() => {
    const fetchTrabalhos = async () => {
      const { data, error } = await supabase.from("trabalhos").select("*");

      if (error) {
        console.error("Erro ao buscar trabalhos:", error);
      } else {
        setTrabalhos(data);
      }
    };

    fetchTrabalhos();
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen p-10" style={{ backgroundImage: "url('/fundo.jpg')" }}>
      <h2 className="text-center text-white text-3xl font-bold mb-10">Trabalhos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trabalhos.map((trabalho) => (
          <div key={trabalho.id} className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-center">
            <img
              src={trabalho.imagem}
              alt={trabalho.titulo}
              className="w-full h-60 object-cover rounded-xl mb-4 cursor-pointer"
              onClick={() => setImagemSelecionada(trabalho.imagem)}
            />
            <h3 className="text-xl font-semibold text-white">{trabalho.titulo}</h3>
            <p className="text-white text-lg">{trabalho.descricao}</p>
          </div>
        ))}
      </div>

      {imagemSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setImagemSelecionada(null)}
          >
            &times;
          </button>
          <img src={imagemSelecionada} alt="Zoom" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Trabalhos;