// components/Sidebar.tsx

import React from 'react';

interface SidebarProps {
  links: Array<{ href: string; icon: JSX.Element }>;
  side: string
}

const Sidebar: React.FC<SidebarProps> = ({ links, side }) => {
  return (
    <div className={`fixed left-5 bottom-0 h-full flex flex-col items-center justify-end text-gray-300 p-4 space-y-6 hover:cursor-pointer`}>
      {links.map((link, index) => (
        <a href={link.href} key={index} className="hover:text-white hover:cursor-pointer">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;