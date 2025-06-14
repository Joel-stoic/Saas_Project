import React from 'react'
import { FileText } from 'lucide-react'
import { Button } from '../ui/button';
import { NavLink } from './nav-link';

const Header = () => {
  const isLoggedIn = false;
  return (
    <nav className='container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto'>
        <div className='flex lg:flex-1'>
        <NavLink href="/" className='flex items-center gap-1 lg:gap-2 shrink-0'> 
        <FileText className="w-5 h-5 lg:w-8 lg:h-6 text-gray-900 hover:rotate-12 transform transition duration-300 ease-in-out" />
        <span className='font-extrabold lg:text-xl text-gray-900'>
          Convertify
        </span>
           
           </NavLink>
        </div>
        <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
            <NavLink href="/#pricing ">Pricing</NavLink>
           { isLoggedIn && <NavLink href="/dashboard ">Your Sumaries</NavLink>}
        </div>
        <div className='flex lg:justify-end lg:flex-1'>
          {isLoggedIn ? (<div className="flex gap-2 items-center">
            <NavLink href="/upload" >Upload</NavLink>
            <div>Pro</div>
            <Button>Sign Out</Button>
          </div>) : ( <NavLink href="/sign-in">Sign In</NavLink>)}
          
           
        </div>
    </nav>
  )
}

export default Header