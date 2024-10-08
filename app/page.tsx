import {
  Articles,
  Destinations,
  Hero,
  LuxuryFootages,
  OurServices,
  PandooWebsite,
} from "@/components/home";
import Separator from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero
        coverImg="/images/hero-image.webp"
        title={"Premium Travel"}
        subTitle="Beyond Expectation"
        paragraph="Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way"
        buttonText="Take me there"
        link="#destination"
      />
      <OurServices />
      <Separator color="brown" />
      <PandooWebsite />
      <Destinations />
      <LuxuryFootages />
      <Articles />
    </main>
  );
}
