// U Proizvodi.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGridOutline } from "react-icons/io5";

function Proizvodi() {
    const [proizvodi, setProizvodi] = useState([]);
    const [gridView, setGridView] = useState(false)


    useEffect(() => {
        ProductsService.getAllProducts()
            .then((products) => {
                setProizvodi(products.data.products);
                toast.success('Podaci su uspešno preuzeti!');
            })
            .catch((error) => {
                console.error('Greška prilikom preuzimanja podataka:', error);
                toast.error('Došlo je do greške prilikom preuzimanja podataka.');
            });
    }, []);



    return (
        <div >
            <div className='flex mx-10 gap-10 text-xl '>
                <button onClick={() => setGridView(false)} className='flex items-center gap-2 font-robot'>List < GiHamburgerMenu /></button>
                <button onClick={() => setGridView(true)} className='flex items-center gap-2 font-robot'>Grid <IoGridOutline /></button>
            </div>

            <div className={gridView ? 'flex flex-wrap m-2 items-center justify-center gap-5 m-4' : 'flex flex-col gap-2 w-full'} >
                {proizvodi.map((product) => (
                    <Link key={product.id} to={`/proizvodi/${product.id}`} className={gridView ? 'w-[200px] h-full p-2 text-center border-[#a1998e] border-2  text-center rounded-lg truncate items-center justify-center relative shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md' : 'flex flex-row gap-2 text-center border border-[#a1998e] transition-transform duration-300 ease-in-out transform hover:scale-105 ml-5 rounded-md'} >
                        <img src={product.thumbnail} className={gridView ? 'h-[200px] w-[200px] object-cover rounded-md' : 'h-[150px] w-[180px] rounded-md'} alt={product.name} />
                        <div className={gridView ? 'w-[200px] h-[200px] rounded-lg absolute bg-black opacity-0 hover:opacity-40 ' : 'w-[180px] h-[150px] rounded-lg absolute bg-black opacity-0 hover:opacity-40 '}></div>
                        <div className='flex-col'>
                            <h3 className='mt-2'>{product.title}</h3>
                            <hr className='w-[70%] m-2 border-black mx-auto' />
                            <p className='text-[#ff3b3b] p-2'>{product.price}$</p>
                        </div>
                    </Link>

                ))
                }
            </div >
        </div >

    );
}

export default Proizvodi;
