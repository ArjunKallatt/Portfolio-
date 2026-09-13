import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Currently from "@/components/Currently";
import WorkNucleus from "@/components/WorkNucleus";
import Projects from "@/components/Projects";
import SecurityLearning from "@/components/SecurityLearning";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Currently />
      <WorkNucleus />
      <Projects />
      <SecurityLearning />
      <Skills />
      <Contact />
    </main>
  );
}
