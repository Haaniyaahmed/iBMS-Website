'use client'
import React from "react";
import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const menuItems = {
      "Home":"/",
      "Team":"/team",
      "Student Life":"/studentlife",
      "Events":"/events",
      "Merchandise":"/merch",
      "Contact":"/contact",
    };
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-mac-dark-red">
        <NavbarContent justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white sm:hidden"
          />
          <NavbarBrand className="lg:pr-40">
            <Image src="/logo.png" alt="IBioMed Society" width={36} height={36} />
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-12" justify="center">
            {Object.entries(menuItems).map(([label, link]) => (
              link === currentPath ?
                <NavbarItem key={label} className="w-full" onClick={() => window.location.href = link} isActive>
                    <Link href={link} className="w-full text-white" aria-current="page">
                        {label}
                    </Link>
                </NavbarItem>
              :
                <NavbarItem key={label} className="w-full transition-color ease-in-out duration-200 hover:border-b-4 hover:border-b-white" onClick={() => window.location.href = link}>
                  <Link href={link} className="w-full text-white">
                      {label}
                  </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
        <NavbarMenu className="lg:mt-44 bg-mac-dark-red gap-8">
            {Object.entries(menuItems).map(([label, link]) => (
                <NavbarMenuItem key={label}>
                <Link href={link} className="w-full text-white">
                    {label}
                </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
      </Navbar>
    );
  }
