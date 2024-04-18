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
        <div className='bg-[#20285d] w-full flex flex-col'>
            {/* miniNavbar */}
            <div className='flex justify-between w-full  text-white'>
                <ul className='flex gap-4 m-5 lg:ml-16 '>
                    <FaPhoneAlt size={25} />
                    <li>Pozovite nas</li>
                    <CiMail size={25} />
                    <li>Prodaja@gmail.com</li>

                </ul>

            </div>
            {/* mainNavbar */}
            <div className='w-full'>
                <div className='flex lg:flex-row flex-col  items-center relative w-full gap-5'>
                    <img src="/1.webp" alt="Pc Shop" className='w-[200px] h-[80px] m-5 lg:ml-16 rounded-lg' />
                    <div className='flex flex-row justify-center gap-2 lg:w-[800px] md: w-[500px] w-full items-center'>
                        <input type="text" placeholder='Unesite pojam za pretragu...' className='lg:w-[800px] w-[300px] h-[40px] rounded-full lg:p-5' />
                        <IoIosSearch color='white' onClick={() => { console.log('CaoZeki') }} size={25} />
                    </div>
                    <div className=' items-center flex gap-6 mr-10 m-5 justify-center'>
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
                        <ul className='flex gap-2 items-center'>
                            <CiHeart size={25} color='white' />
                            <li className='text-white'> Lista zelja</li>

                        </ul>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Navbar