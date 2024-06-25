import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/HeroNav";
import TechStack from "@/components/TechStack";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { navItems } from "@/data";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Home() {
  const links = [
    { href: 'https://github.com/dave-sbs', icon: <FaGithub size={24} />},
    { href: 'https://www.linkedin.com/in/dawit-dave-boku-10b7a6252/', icon: <FaLinkedin size={24} /> },
    { href: 'https://mailto:davesah.bs@gmail.com', icon: <MdEmail size={24} />},
  ];

  return (
    <main className="flex bg-black-100">
      <div className="opacity-0 md:opacity-100">
        <Sidebar links={links} side="left"/>
      </div>
      <div className="ml-2 mr-2 sm:ml-6 sm:mr-6 flex-1 bg-black-100 flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <TechStack />
        <Footer />
      </div>
    </main>  
  );
}

