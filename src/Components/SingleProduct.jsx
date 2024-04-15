import React, { useEffect, useState } from 'react';

import ProductsService from '../Services/productServices';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';


function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((product) => {
                setSingleProduct(product);
                toast.success('Podaci su uspešno preuzeti!');
            })
            .catch((error) => {
                console.error('Greška prilikom preuzimanja podataka:', error);
                toast.error('Došlo je do greške prilikom preuzimanja podataka.');
            });
    }, [id]);



    return (
        <div className='p-5'>
            {singleProduct ? (
                <div className='border-2 border-black w-[60%] mx-auto p-5 shadow-2xl'>
                    <h2>
                        <strong>Name: </strong>{singleProduct.data.title}
                    </h2>
                    <p>
                        <strong>Price:</strong> {singleProduct.data.price}$
                    </p>
                    <p>
                        <strong>Description:</strong> {singleProduct.data.description}</p>

                    <p>
                        <strong>Category:</strong> {singleProduct.data.category}</p>
                    <p><strong>Rating: </strong>{singleProduct.data.rating}</p>
                    <p><strong>Stock: </strong>{singleProduct.data.stock}</p>
                    <img className='w-[200px] h-[100px]' src={singleProduct.data.thumbnail} alt={singleProduct.data.title} />
                    <div></div>

                    {console.log(singleProduct)}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SingleProduct;