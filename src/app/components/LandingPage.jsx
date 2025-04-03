const LandingPage = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white text-center ">
      {/* Overlay escuro + efeito de vidro */}
      <div className="absolute inset-0 bg-yellow/10 backdrop-blur-none "></div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Círculo com a imagem da loja */}
        <div className="w-28 h-28 bg-white rounded-full overflow-hidden shadow-lg ml-20">
          <img
            src="/rr.jpg"
            alt="Loja Roberto Móveis"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <h1 className="text-3xl font-bold mt-4">ROBERTO MÓVEIS</h1>
        <p className="text-lg mt-2">Abaixo nossa vitrine virtual</p>

        {/* Seta minimalista */}
        <div className="mt-15 ml-30 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
