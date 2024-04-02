import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Responsabilities from "@/components/Responsabilities";
import Section from "@/components/Section";
import Freatures from "@/components/Freatures";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Section level="about">
        <About />
      </Section>
      <Section level="responsabilities">
        <Responsabilities />
      </Section>
      <Section level="contacts">
        <Freatures />
      </Section>
    </main>
  );
}
