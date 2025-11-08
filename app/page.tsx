import Header from "@/components/ui/Header";
import BackToTop from "@/components/ui/BackToTop";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
