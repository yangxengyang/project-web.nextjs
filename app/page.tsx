import About from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
    <Hero/>
      <About
        title="IT Specialized Company Based in Laos"
        subTitle="We are a Laos-based IT startup aiming for the global market."
        description="We are targeting not only the local market in Laos but also neighboring Southeast Asian countries and the Northeast Asian market, including South Korea."
        image="https://teamplatedev.github.io/iict-lecture/public/images/animation_0.gif"
        type="A"
      />

      <About
        title="IT Specialized Company Based in Laos"
        subTitle="We are a Laos-based IT startup aiming for the global market."
        description="We are targeting not only the local market in Laos but also neighboring Southeast Asian countries and the Northeast Asian market, including South Korea"
        image="https://teamplatedev.github.io/iict-lecture/public/images/animation_1.gif"
        type="B"
      />

      <About
        title="IT Specialized Company Based in Laos"
        subTitle="We are a Laos-based IT startup aiming for the global market."
        description="We are targeting not only the local market in Laos but also neighboring Southeast Asian countries and the Northeast Asian market, including South Korea"
        image="https://teamplatedev.github.io/iict-lecture/public/images/animation_2.gif"
        type="A"
      />
    </main>
  );
}
