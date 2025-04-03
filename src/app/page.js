import Navbar from "@/app/components/Navbar"
import LandingPage from "@/app/components/LandingPage";
import Vitrine from "@/app/components/Vitrine";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";




export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Vitrine />
      <PageTransition />
      <Footer />
    </div>
  );
}
