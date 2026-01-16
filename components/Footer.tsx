import React from "react";
import { Separator } from "./ui/separator";
import Container from "@/containers/Container";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

// Latest year
const currentYear = new Date().getFullYear();

const FooterButtons = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Services", href: "/terms-of-services" },
  { name: "Contact Us", href: "#contact" },
];

// Social Icons and Links
const socials = [
  { name: "twitter", icon: Twitter, href: "https://x.com/mulah_App" },
  {
    name: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/mulah_app/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full relative">
      <Separator />

      <Container className="w-full">
        <footer className="w-full flex flex-col md:flex-row justify-between items-center py-16 sm:py-20 md:py-5 lg:py-6 gap-8">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center gap-1.5 md:gap-2.5">
            <Link href={"/"}>
              <p className="font-bold text-2xl md:text-3xl tracking-tighter">
                {" "}
                Mülah{" "}
              </p>
            </Link>
            <p className="text-xs md:text-sm text-gray-400">
              &copy; {currentYear}
            </p>
          </div>

          {/* Footer Link Buttons */}
          <ul className="flex flex-row justify-center items-center gap-x-10">
            {FooterButtons.map((footerButtons, index) => (
              <Link href={`${footerButtons.href}`} key={index}>
                <li className="text-xs md:text-sm font-medium text-neutral-600 hover:text-black transition-all ease-in-out duration-200">
                  {footerButtons.name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Social Buttons */}
          <div className="flex flex-row justify-center items-center gap-3.5">
            {socials.map((socialIcon, index) => (
              <Link href={socialIcon.href} key={index}>
                <div className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition group">
                  <socialIcon.icon className="h-4 w-4 text-neutral-700" />
                </div>
              </Link>
            ))}
          </div>
        </footer>
      </Container>
    </footer>
  );
};

export default Footer;
