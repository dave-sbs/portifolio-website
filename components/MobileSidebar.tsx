import React from 'react';

interface SidebarProps {
  links: Array<{ href: string; icon: JSX.Element }>;
}

const MobileSidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 text-gray-300 p-4 hover:cursor-pointer">
      {links.map((link, index) => (
        <a href={link.href} key={index} target="_blank" className="hover:text-white hover:cursor-pointer">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default MobileSidebar;