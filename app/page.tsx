/* Layouts */
import { Line, AboutMe, HeroSection, Experience, Projects } from "@/layouts";
import { UnderConstruction } from "./underconstruction";
import { Tooling } from "@/layouts/tooling";
import { Footer } from "@/layouts/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative bg-gradient-bg">
        <div className="container">
          <Line />
          <AboutMe />
          <div className="relative">
            <Experience />
            <Projects />
            <Tooling />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
