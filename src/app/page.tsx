import Background from "../components/Background";
import SplashScreen from "../components/SplashScreen";
import Navs from "../components/Navs";
import Home from "../components/Home";
import About from "../components/About";
import ProjectsTeaser from "../components/ProjectsTeaser";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import { GearsProvider, GearDivider } from "../components/gears/GearSystem";

// Server component: About / Projects / Contact / Footer render as real HTML for
// SEO and fast first paint. Only genuinely interactive pieces are client islands
// (Background, SplashScreen, Navs, the hero's 3D prism, and the gear system).
export default function Page() {
  return (
    <GearsProvider>
      <div className="relative mt-2 py-4">
        <Background />
        <SplashScreen />
        <Navs />

        <section id="home" className="content mt-28 md:mt-20 w-full mb-0">
          <Home />
        </section>

        <GearDivider />

        <section
          id="about"
          className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
        >
          <About />
        </section>

        <GearDivider />

        <section
          id="projects"
          className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
        >
          <ProjectsTeaser />
        </section>

        <GearDivider />

        <section
          id="contact"
          className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
        >
          <ContactMe />
        </section>

        <Footer />
      </div>
    </GearsProvider>
  );
}
