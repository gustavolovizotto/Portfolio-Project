import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
// import TechStack from "./sections/TechStack";
import TechStackSimple from "./sections/TechStackSimple";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    {/*Implementar showlogocase */}
    <FeatureCards />
    <Experience />
    <TechStackSimple />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
