import React from 'react';
import Swal from 'sweetalert2'
import Navbar from '../../components/Header/Navbar/Navbar';

const DetailsCard = ({ product }) => {
    console.log(product);
    const { id, name, cover, price, services } = product || {};
    const handleAddToCart = () => {

        const addallproductsArray = [];

        const productItems = JSON.parse(localStorage.getItem('allproducts'))

        if (!productItems) {
            addallproductsArray.push(product)
            localStorage.setItem('allproducts', JSON.stringify(addallproductsArray))
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Product add to Cart Successfully!',
            })
        }

        else {

            const isExits = productItems.find(product => product.id === id)

            if (!isExits) {
                addallproductsArray.push(...productItems, product)
                localStorage.setItem('allproducts', JSON.stringify(addallproductsArray))
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Product add to Cart Successfully!',
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This product has been add to Cart before. A product can be add to cart at most once.....',
                })
            }


        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-2 flex flex-col lg:flex-row justify-around bg-base-100 px-2">
                <div className='meh lg:w-[440px]'>
                    <figure><img className='w-full' src={cover} alt="" /></figure>
                    <div className='mah my-5 flex justify-between'>
                        <div className="card-actions justify-start relative">
                            <button onClick={handleAddToCart} className="btn bg-green-600 border-none normal-case text-xl font-semibold text-[#fff]">Add To Cart</button>
                        </div>
                        <div className="card-actions justify-start relative">
                            <p className="btn bg-red-600 border-none normal-case text-xl font-semibold text-[#fff]">Price: {price} $</p>
                        </div>
                    </div>
                </div>

                <div className="cardbody w-330px lg:w-[730px] pb-10">
                    <h2 className="card-title text-2xl lg:text-4xl font-bold pb-3 capitalize">{name}</h2>
                    <p className='text-base'>{services}</p>
                </div>
            </div>
        </div>

    );
};

export default DetailsCard;