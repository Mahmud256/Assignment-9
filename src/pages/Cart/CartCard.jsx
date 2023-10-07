import React from 'react';

const CartCard = ({ product, onRemove }) => {
    const { id, name, cover, price, services } = product || {};

    const handleRemoveClick = () => {
        // Call the onRemove function passed from the parent component (Cart)
        onRemove();
    };

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

                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {price} $
                    </h2>

                    <button
                        className='btn bg-red-500 hover:bg-yellow-400 text-white'
                        onClick={handleRemoveClick}
                    >
                        Remove This Cart
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default CartCard;
