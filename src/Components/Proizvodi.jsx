// U Proizvodi.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';

function Proizvodi() {
    const [proizvodi, setProizvodi] = useState([]);


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
        <div className='flex flex-wrap items-center justify-center w-[70%] h-full mx-auto gap-2 shadow-2xl m-5' >
            {proizvodi.map((product) => (
                <Link key={product.id} to={`/proizvodi/${product.id}`} className='w-[200px] h-[200px] border-black border-2 m-2 text-center rounded-lg truncate items-center' >
                    <div className='w-[199px] h-[199px] rounded-lg absolute bg-black opacity-0 hover:opacity-40'></div>
                    <img src={product.thumbnail} className='w-full h-[100px] object-cover overhide truncate' alt={product.name} />
                    <h1 className='p-2'>{product.title}</h1>
                    <hr className='w-[70%]  border-black mx-auto' />
                    <p className='text-[#751f1f] p-5'>{product.price}$</p>
                </Link>
            ))}
        </div >
    );
}

export default Proizvodi;
