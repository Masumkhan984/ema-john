import React from 'react';
import useProducts from '../../hooks/useProducts';

const Inventory = () => {
    const [products] = useProducts();
    return (
        <div>

            <h1>This is inventory page{products.length}</h1>
        </div>
    );
};

export default Inventory;