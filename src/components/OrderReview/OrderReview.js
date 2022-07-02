import {Link} from 'react-router-dom';
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        deleteFromDb(key)
    }

const placeOrder = () =>{
    setCart([])
    clearTheCart()
}
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}>
                    <Link to="/inventory">
                    <button className='btn-regular'
                    onClick={placeOrder}>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;