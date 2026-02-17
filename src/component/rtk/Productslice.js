import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, fetchproducts } from './Slice';

const Productslice = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Slice.products);

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container mt-3">
            <h1>Products  <span className='text-info'>Cards</span></h1>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card" style={{ overflow: "hidden" }}>
                            <img className="card-img-top" src={product.image} alt={product.title} style={{ height: "210px" }} />
                            <div className="card-body">
                                <h5 className="card-title p-1">{product.title.slice(0, 20)}...</h5>
                                <p className="card-text">
                                    {product.description.slice(0, 39)}...
                                    <span>
                                        <Link to={`/productslice/${product.id}`} className='btn text-primary p-0'>Details</Link>
                                    </span>
                                </p>
                                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productslice;
