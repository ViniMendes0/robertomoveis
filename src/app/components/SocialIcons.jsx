import {  FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-4 mb-2">
      <a
        href="https://www.instagram.com/robertomoveish?igsh=MXVjN2pidXVnaWF6dA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white text-2xl hover:text-orange-500 transition" />
      </a>
    </div>
  );
}
