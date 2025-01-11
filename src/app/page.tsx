import Arrivals from "@/components/arrivals/Arrivals";
import Hero from "./Hero";
import Browse from "@/components/browse/Browse";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Arrivals />
      <Browse />
      <Reviews />
    </main>
  );
}
