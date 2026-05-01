import Header from "@/components/Header";
import Landing from "@/components/Landing";
import TheEngineer from "@/components/TheEngineer";
import TheShift from "@/components/TheShift";
import TheJourney from "@/components/TheJourney";
import TheFamily from "@/components/TheFamily";
import Ending from "@/components/Ending";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-void)]">
      <Header />
      <Landing />
      <TheEngineer />
      <TheShift />
      <TheJourney />
      <TheFamily />
      <Ending />
    </div>
  );
}
