"use client";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-60 w-full bg-transparent text-white py-4 text-center">
      <SocialIcons />
      <p>Todos os direitos reservados desse site a Roberto Móveis {year}</p>
    </footer>
  );
}
