import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    console.log(service);
    const { id, name, cover, price, services } = service || {};
    return (
        <div>

            <div className="card allserv lg:w-72 bg-base-100 shadow-xl" data-aos="fade-up">
                <figure>
                    <img className='h-40 w-96 lg:w-72' src={cover} alt="" />
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

export default ServicesCard;