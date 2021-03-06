import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>{ratings} star</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;