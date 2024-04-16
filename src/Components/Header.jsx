import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGridOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='flex items-center justify-center m-5 font-semibold'>

            <div >
                <ul className='flex gap-5 lg:visible hidden lg:flex'>
                    <Link to={'/Proizvodi'}>Proizvodi</Link>
                    <li>Poslovanje</li>
                    <li>Gaming</li>
                    <li>Kontakt</li>
                </ul>
            </div >
        </div >
    )
}

export default Header