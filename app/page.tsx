/* Layouts */
import { Line, AboutMe, HeroSection, Experience, Projects } from "@/layouts";
import { UnderConstruction } from "./underconstruction";

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
            <UnderConstruction />
            {/* <Projects /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
