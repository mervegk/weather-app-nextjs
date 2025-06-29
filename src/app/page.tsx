import Image from "next/image";
import { Button } from "@/components/ui/button";
import FavLocations from "@/components/main-page/FavLocations";

export default function Home() {
  return (
    <main className="">
      <section className="container mx-auto">
        <FavLocations />
      </section>
    </main>
  );
}
