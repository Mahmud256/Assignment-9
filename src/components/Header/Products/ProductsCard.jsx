import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({allproducts}) => {
    console.log("S:",allproducts);
    const { id, name, cover, price, services } = allproducts || {};
    return (
        <div>

            <div className="card w-72 bg-base-100 shadow-xl">
                <figure>
                    <img className='h-40 w-72' src={cover} alt="" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {name}
                    </h2>

                    <button className='btn bg-red-500 hover:bg-yellow-400 text-white'> <Link to={`/details/${id}`}>
                        Details
                    </Link>

                    </button>
                </div>
            </div>


        </div>
    );
};

export default ProductsCard;