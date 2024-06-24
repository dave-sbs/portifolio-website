import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import { navItems } from "@/data";

import Footer from "@/components/Footer";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Home() {
  const links = [
    { href: 'https://github.com/dave-sbs', icon: <FaGithub size={24} />},
    { href: 'https://www.linkedin.com/in/dawit-dave-boku-10b7a6252/', icon: <FaLinkedin size={24} /> },
    { href: 'https://mailto:davesah.bs@gmail.com', icon: <MdEmail size={24} />},
  ];

  // const email = { href: 'https://mailto:dsboku26@colby.edu', icon: <MdEmail size={24} />}

  return (
    <main className="flex bg-black-100">
      <Sidebar links={links} side="left"/>
      <div className="ml-6 mr-6 flex-1 bg-black-100 flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Footer />
      </div>
    </main>  
  );
}
