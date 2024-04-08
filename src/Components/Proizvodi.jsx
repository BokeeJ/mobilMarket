import React, { useEffect, useState } from 'react';
import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';
function Proizvodi() {
    const [proizvodi, setProizvodi] = useState([])
    useEffect(() => {
        ProductsService.getAllProducts()
            .then((products) => setProizvodi(products.data.products))
            .catch((error) => console.log('error'));
    }, []); // Dodali smo prazan niz zavisnosti da bismo osigurali da se efekat pokrene samo jednom

    return (
        <div className='flex flex-wrap items-center justify-center' >

            {proizvodi.map((product) => {
                return (
                    <div key={product.id} className='items-center w-[200px] h-[300px]'>
                        <h1>{product.name}</h1>
                        <img src={product.thumbnail} className='w-[100px] w-[120px]' alt={product.name} />
                        <p>{product.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Proizvodi;
