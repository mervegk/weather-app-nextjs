import Image from "next/image";
import { Button } from "@/components/ui/button";
import FavLocations from "@/components/main-page/FavLocations";
import Redwhitebtn from "@/components/ColorClick";

export default function Home() {
  return (
    <main className="h-full">
      <Redwhitebtn />
      {/*  <section className="container mx-auto">
        <FavLocations />
      </section> */}
    </main>
  );
}
