import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import Navbar from '../Navbar/Navbar';


const Products = () => {

    const allproducts = useLoaderData();
    console.log("P:",allproducts);
   

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12'>Our Services</h1>
            <div className="flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        allproducts?.map(Product => <ProductsCard key={Product.id} allproducts={Product}></ProductsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;