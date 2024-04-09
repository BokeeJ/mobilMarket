import React, { useEffect, useState } from 'react';
import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';
function Proizvodi() {
    const [proizvodi, setProizvodi] = useState([])
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

            {proizvodi.map((product) => {
                return (
                    <div key={product.id} className='w-[200px] h-[200px] border-black border-2 m-2 text-center rounded-lg truncate'>
                        <img src={product.thumbnail} className='w-full h-[100px] object-cover overhide truncate' alt={product.name} />
                        <h1 className='p-2'>{product.title}</h1>
                        <hr className='w-[70%]  border-black mx-auto' />
                        <p className='text-[#751f1f] p-5'>{product.price}$</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Proizvodi;
