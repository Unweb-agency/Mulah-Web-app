"use client"

import React, { useState } from 'react'
import Container from '@/containers/Container'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import Waitlist from '@/modals/Waitlist'

const NavigationButtons = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Our Team", href: "#our-team" },
]

const Navbar = () => {

  // Navbar toggle State and function
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavigationBar = () => {
    setIsNavOpen(!isNavOpen);
  }

  // Waitlist Modal form
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <header className='w-full fixed top-0 z-100 bg-white/20 backdrop-blur-md'>
        <Container>
          <nav className='w-full flex flex-row justify-between items-center py-2.5 md:py-3.5'>
            {/* Logo */}
            <div className='flex flex-row justify-center items-center gap-1.5'>
              <Link href={"/"}>
                <p className='font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter'> Mülah </p>
              </Link>
              <div className='h-1.5 md:h-2 w-1.5 md:w-2 bg-brandOrange rounded-full animate-spin'></div>
            </div>

            {/* Desktop */}
            {/* Navigation Bar */}
            <ul className='hidden md:flex flex-row justify-center items-center gap-x-10'>
              {NavigationButtons.map((navButtons, index) => (
                <Link href={`${navButtons.href}`} key={index}>
                  <li className='text-xs md:text-sm font-medium text-neutral-600 hover:text-black transition-all ease-in-out duration-200'>
                    {navButtons.name}
                  </li>
                </Link>
              ))}
            </ul>

            {/* Mobile */}
            {/* Navigation Bar */}
            <div
              className={`absolute top-0 right-0 h-screen w-full z-500 bg-white backdrop-blur-sm transform transition-transform duration-300 ease-in-out p-16
            ${isNavOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
            >
              <div
                className='inline-flex justify-end items-end bg-linear-to-bl from-brandOrange to-brandBlue text-white p-2 rounded-full backdrop-blur-sm cursor-pointer'
                onClick={toggleNavigationBar}
              >
                <X className='h-5 w-5' />
              </div>
              <ul className='flex flex-col justify-start items-start gap-y-10 mt-14'>
                {NavigationButtons.map((navButtons, index) => (
                  <Link
                    href={`${navButtons.href}`}
                    key={index}
                    onClick={() => setIsNavOpen(false)}
                  >
                    <li className='text-2xl text-black font-bold'>
                      {navButtons.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>


            {/* Login & Wishlist button */}
            <div className='flex flex-row justify-center items-center gap-3.5'>
              {/* <Link href={"#login"}> <span className='text-xs md:text-sm lg:text-base'> Log in </span> </Link> */}
              <Button
                variant={'default'}
                className='text-xs md:text-sm rounded-full cursor-pointer bg-linear-to-r from-brandOrange to-brandBlue transition-all ease-in-out duration-200 hover:scale-105'
                onClick={() => {
                  setIsNavOpen(false);
                  setShowWaitlist(true);
                }}
              >
                Join Waitlist
              </Button>
              <div
                className='block md:hidden cursor-pointer bg-zinc-100 p-2 rounded-full'
                onClick={toggleNavigationBar}
              >
                <Menu className='h-4 w-4 sm:h-5 sm:w-5' />
              </div>
            </div>
          </nav>
        </Container>

        <Separator />
      </header>

      {/* Waitlist Modal */}
      {showWaitlist && <Waitlist onClose={() => setShowWaitlist(false)} />}
    </>
  )
}

export default Navbar