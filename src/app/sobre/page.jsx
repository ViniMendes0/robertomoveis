import Navbar from "../components/Navbar";
import Image from "next/image";
import PageTransition from "../components/PageTransition";

const Sobre = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white flex flex-col items-center">
        <Navbar />
        <h1 className="text-3xl font-semibold mt-20">SOBRE NÓS</h1>

        <div className="bg-gray-300 text-black flex items-center mt-20 p-8 rounded-lg max-w-4xl">
          {/* Logo do negócio */}
          <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden bg-gray-500">
            <Image
              src="/rr.jpg" // Substitua pelo caminho real da sua logo
              alt="Logo do Negócio"
              width={96} // Ajuste conforme necessário
              height={96} // Ajuste conforme necessário
              objectFit="cover"
            />
          </div>

          {/* Texto sobre a empresa */}
          <p className="ml-6 text-base leading-relaxed max-w-lg">
            Há mais de 20 anos fabricando móveis e restaurando peças antigas. 
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Sobre;
