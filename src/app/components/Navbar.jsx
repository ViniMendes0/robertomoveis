// src/components/Navbar.jsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-yellow/100 text-white flex justify-center space-x-8 z-50 backdrop-blur-md">
      <Link href="/" className="hover:text-orange-500 transition">
        Vitrine virtual
      </Link>
      <Link href="/trabalhos" className="hover:text-orange-500 transition">
        Trabalhos
      </Link>
      <Link href="/sobre" className="hover:text-orange-500 transition">
        Sobre nós
      </Link>
    </nav>
  );
};

export default Navbar;
