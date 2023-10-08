import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import Navbar from '../../components/Header/Navbar/Navbar';
import CartCalculation from './CartCalculation';
//import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
    const [allproducts, setProducts] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [showCongratulations, setShowCongratulations] = useState(false);


    useEffect(() => {
        const productItems = JSON.parse(localStorage.getItem('allproducts'));

        if (productItems) {
            setProducts(productItems);
        } else {
            setNofound('No Data Found');
        }
    }, []);

    const handleRemoveItem = (productId) => {
        // Filter out the item to be removed from the allproducts array
        const updatedProducts = allproducts.filter(product => product.id !== productId);

        // Update state with the filtered array
        setProducts(updatedProducts);

        // Update local storage with the filtered array
        localStorage.setItem('allproducts', JSON.stringify(updatedProducts));
    };

    const handleBuyNow = () => {
        // Show the Congratulations alert
        setShowCongratulations(true);

        // Clear the cart (local storage) and update the state
        localStorage.removeItem('allproducts');
        setProducts([]);
    };

    const handleGoToHome = () => {
        // Redirect to the home page
        window.location.href = '/'; // Replace '/' with home page URL
    };

    return (
        <div>
            <Navbar />
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-5 items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                            {allproducts.map(product => (
                                <CartCard
                                    key={product.id}
                                    product={product}
                                    onRemove={() => handleRemoveItem(product.id)}
                                />
                            ))}
                        </div>

                        <div className="card_body">
                            <CartCalculation allproducts={allproducts} />

                            <div className="cart_box">
                                <button
                                    onClick={handleBuyNow}
                                    className='btn w-36 bg-green-500 hover:bg-yellow-400 text-white'
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showCongratulations && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>Congratulations! Your purchase was successful.</p>
                        <button onClick={handleGoToHome} className='btn bg-blue-500 hover:bg-blue-400 text-white'>
                            Go to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
