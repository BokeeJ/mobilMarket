// U Proizvodi.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGridOutline } from "react-icons/io5";

function Proizvodi() {
    const [proizvodi, setProizvodi] = useState([]);
    const [listView, setListView] = useState(false);
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
        <div>
            <div className='flex mx-10 gap-10 text-xl'>
                <button onClick={() => setListView(true)} className='flex items-center gap-2 font-robot'>List < GiHamburgerMenu /></button>
                <button onClick={() => setGridView(true)} className='flex items-center gap-2 font-robot'>Grid <IoGridOutline /></button>
            </div>

            <div className={listView ? ' flex-col w-[50%] h-full border-2 border-black gap-2 shadow-2xl m-5' : 'flex flex-wrap items-center justify-center w-[70%] h-full mx-auto gap-2 shadow-2xl m-5'} >
                {proizvodi.map((product) => (
                    <Link key={product.id} to={`/proizvodi/${product.id}`} className='w-[200px] h-[200px] border-black border-2 m-2 text-center rounded-lg truncate items-center' >
                        <div className='w-[199px] h-[199px] rounded-lg absolute bg-black opacity-0 hover:opacity-40'></div>
                        <img src={product.thumbnail} className={listView ? 'w-[200px] h-[200px] object-cover overhide truncate ' : 'w-full h-[100px] object-cover overhide truncate'} alt={product.name} />
                        <h1 className='p-2'>{product.title}</h1>
                        <hr className='w-[70%]  border-black mx-auto' />
                        <p className='text-[#751f1f] p-5'>{product.price}$</p>
                    </Link>
                ))}
            </div >
        </div>
    );
}

export default Proizvodi;
