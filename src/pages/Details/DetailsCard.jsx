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
                text: 'Product Donate Successfully!',
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
                    text: 'Product Donate Successfully!',
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This product has been donate before. A product can be donate at most once.....',
                })
            }


        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-100 px-2">
                <figure><img className='w-full' src={cover} alt="" /></figure>
                <div className='mah flex justify-between bg-[#0e0e0e66] relative p-5 top-[-88px]'>
                    <div className="card-actions justify-start relative">
                        <button onClick={handleAddToCart} className="btn bg-green-600 border-none normal-case text-xl font-semibold text-[#fff]">Add To Cart</button>
                    </div>
                    <div className="card-actions justify-start relative">
                        <p className="btn bg-red-600 border-none normal-case text-xl font-semibold text-[#fff]">Price: {price} $</p>
                    </div>
                </div>
                <div className="cardbody pb-10">
                    <h2 className="card-title text-4xl font-bold pb-3 capitalize">{name}</h2>
                    <p className='text-base'>{services}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;