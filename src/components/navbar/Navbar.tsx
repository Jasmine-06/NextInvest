import React from 'react'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center bg-white h-20 shadow-md '>
      <div>    
         <Image 
         src="/asset/images/4.svg"
         height={170}  
         width={170}
         alt="logo"
      />
      </div>
      
      <div className='flex justify-around items-center gap-4'>
        <div>
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Investment Opportunity</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuTrigger>How it works</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <div className='bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'>About Us</div>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <Link href="/login">
         <Button className='bg-emeraldGreen rounded-none w-24 h-11 hover:bg-emeraldGreen hover:opacity-[0.8]'>
          Login
          </Button>
          </Link>
         <Link href="/register">
         <Button className="border border-rosePink text-pink-600 bg-white rounded-none w-24 h-11 hover:bg-rosePink hover:text-white">
          Register
        </Button>
         </Link>

        </div>
      </div>
    </nav>
  )
}
