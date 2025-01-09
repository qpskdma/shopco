import Arrivals from "@/components/arrivals/Arrivals";
import Hero from "./Hero";
import Browse from "@/components/browse/Browse";

export default function Home() {
  return (
    <main>
      <Hero />
      <Arrivals />
      <Browse />
    </main>
  );
}
