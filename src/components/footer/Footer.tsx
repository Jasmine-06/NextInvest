'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight, ChevronUp } from 'lucide-react'
import { Input } from '../ui/input'
import Image from 'next/image'

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex flex-col items-center justify-center mt-10 pt-10 bg-[#ECECEC] pb-16">
      {/* top section */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-6xl px-4">
        {/* 1st column */}
        <div className="flex flex-col gap-1">
          <h1 className='font-bold text-2xl text-gray-700'>NextInvest</h1>
          <p> Copyright © {new Date().getFullYear()} NextInvest. All Rights Reserved.</p>
        </div>
        {/* 2nd column */}
        <div className="ml-[150px]">
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/">
                  Offline
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* 3rd column */}
        <div className="ml-[150px]">
          <h4 className='text-lg font-semibold mb-4'>About</h4>
          <nav>
            <ul>
              <li>
                <Link href="/">
                   Our Story
                </Link>
              </li>
              <li>
                <Link href="/">
                   Benefits
                </Link>
              </li>
              <li>
                <Link href="/">
                   Team
                </Link>
              </li>
              <li>
                <Link href="/">
                   Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* 4th column */}
        <div className="flex justify-end items-start">
          <Button 
            onClick={handleScrollToTop}
            className='bg-emeraldGreen rounded-full w-10 h-10 hover:bg-emeraldGreen'
          >
            <ChevronUp />
          </Button>
        </div>
      </div>
      {/* bottom section */}
      <div className="container mx-auto border-t pt-8 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
            <p className="text-center font-sans text-xl font-bold">Subscribe to our newsletter</p>
            <div className='flex items-center'>
              <Input 
                placeholder="Email Address" 
                className="rounded-r-none min-w-60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button 
                className='bg-rosePink hover:bg-rosePink hover:opacity-80 rounded-l-none flex items-center justify-center'
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/001-facebook.svg"
                alt="Facebook"
                width={10}
                height={10}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/003-twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <Image
                src="/asset/icons/004-instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}