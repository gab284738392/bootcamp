import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import type { PortfolioData } from "@/lib/actions/portfolio";

type PortfolioProps = {
  portfolio: PortfolioData;
};

export default function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero user={portfolio.user} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} showImages={portfolio.showImages} />
        <Experience
          experiences={portfolio.experiences}
          certifications={portfolio.certifications}
        />
      </main>
      <Footer />
    </div>
  );
}
