import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10">
    <div>
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />}
      ]} />
      <Hero />
      <RecentProjects />
    </div>
   </main>
  );
}
