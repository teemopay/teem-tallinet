"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavbarPage() {
  const navItems = [
    {
      name: "Página Principal",
      link: "/",
    },
    {
      name: "Productos y Servicios",
      link: "/Service",
    },
    {
      name: "Casos de Clientes",
      link: "/Case",
    },
    {
      name: "Contáctanos",
      link: "/About",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname, "pathname==");

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-full flex justify-center items-center h-[80px]  ${
        ["/Case", "/Service"].includes(pathname) ? "bg-white/80" : "bg-white"
      }`}
    >
      <div className="relative w-full max-w-[1296px] h-full px-[40px]">
        <Navbar className="h-full">
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems className="justify-end  h-full" items={navItems} />
          </NavBody>
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-[16px] text-[#333333] hover:text-[#2243FF]"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}
