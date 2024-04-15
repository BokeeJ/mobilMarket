import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGridOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='flex items-center'>
            <div className='flex gap-2 ml-20 gap-3 items-center p-3'>
                <GiHamburgerMenu size={20} />
                <Link to={'/Proizvodi'} className='text-xl'>Proizvodi</Link>
                <IoGridOutline size={20} className='ml-10' />
                <h1 className='text-xl '>Pogodnosti</h1>
            </div>
            <div className='ml-20'>
                <ul className='flex gap-5 lg:visible hidden lg:flex'>
                    <Link to={'/singleProizvodi'}>Akcije</Link>
                    <li>Prodavnice</li>
                    <li>Poslovanje</li>
                    <li>Gaming</li>
                    <li>Pravna lica</li>
                    <li>Kontakt</li>
                    <li>Karijera</li>
                </ul>
            </div>
        </div>
    )
}

export default Header