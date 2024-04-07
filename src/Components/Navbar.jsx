import React from 'react'
// react icons
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
    return (
        <div className='bg-[#20285d]'>
            {/* miniNavbar */}
            <div className='flex justify-between w-full  text-white'>
                <ul className='flex gap-4 m-5 lg:ml-16 '>
                    <FaPhoneAlt size={25} />
                    <li>Pozovite nas</li>
                    <CiMail size={25} />
                    <li>Prodaja@gmail.com</li>

                </ul>
                <ul className='flex gap-3 m-5 lg:mr-16'>
                    <CiHeart size={25} />
                    <li> Lista zelja</li>

                </ul>
            </div>
            {/* mainNavbar */}
            <div>
                <div className='flex items-center relative w-full'>
                    <img src="/1.png" alt="Pc Shop" className='w-[200px] h-[80px] m-5 lg:ml-16 rounded-lg' />
                    <div className='relative w-[800px]'>
                        <input type="text" placeholder='Unesite pojam za pretragu...' className='w-[800px] h-[40px] rounded-full p-5' />
                        <IoIosSearch color='black' onClick={() => { console.log('CaoZeki') }} size={25} className='absolute right-0 mr-5 top-1/2 transform -translate-y-1/2' />
                    </div>
                    <div className=' items-center flex gap-6'>
                        <ul className='flex items-center gap-2 text-white ml-16'>
                            <FaRegUser size={25} />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton afterSignOutUrl='/' />
                            </SignedIn>
                        </ul>

                        <ul className='flex items-center gap-2 text-white '>
                            <FaShoppingCart size={25} />
                            <li>0</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar