import Hero from "@/sections/Hero";
import Guardians from "@/sections/Guardians";
import Playlist from "@/sections/Playlist";
import Shop from "@/sections/Shop";
import Teams2 from "@/sections/Teams2";
import Playlist2 from "@/sections/Playlist2";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Guardians />
      <Teams2 />
      <Playlist2 />
      <Playlist />
      <Shop />
    </>
  );
}
