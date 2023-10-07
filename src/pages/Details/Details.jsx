import { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    const details = useLoaderData()
    console.log("Is:",details);

    useEffect(() => {
        const findProduct = details?.find((product) => product.id == id);
        setProduct(findProduct);
    },[id, details])

    return (
        <div>
            <DetailsCard product={product}></DetailsCard>
        </div>
    );
};

export default Details;