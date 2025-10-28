import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {

  return (
    <main className="mx-auto">
        
      <Navbar ></Navbar>
      <Hero ></Hero>
      <About ></About>
      <Skill ></Skill>
      <Portfolio ></Portfolio>
      <Experience ></Experience>
      <Testimonial></Testimonial>
      
      <Contact ></Contact>
      <Footer ></Footer>

    </main>
  );
}
