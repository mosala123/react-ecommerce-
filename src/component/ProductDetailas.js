import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './rtk/Slice';
import './ProductDetail.css';

const ProductDetailas = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (details) {
      dispatch(addToCart(details));
      alert('Product added to cart successfully!');
    }
  };

  if (loading) {
    return (
      <div className="product-details-container">
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="product-details-container">
        <div className="alert alert-danger text-center">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="container">
        <div className="product-details-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 product-image-section">
              <img
                src={details.images?.[0] || details.image || 'https://via.placeholder.com/400'}
                alt={details.title}
                className="product-image"
              />
            </div>
            <div className="col-lg-6 product-info-section">
              <h2>{details.title}</h2>

              <div className="product-rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span>(4.5/5)</span>
              </div>

              <p className="product-description">
                {details.description}
              </p>

              <div className="product-price">
                ${details.price.toFixed(2)}
              </div>

              <div className="product-actions">
                <button
                  className="action-button btn-primary-action"
                  onClick={handleAddToCart}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="action-button btn-secondary-action"
                  onClick={() => navigate(-1)}
                >
                  ← Back
                </button>
              </div>

              <div className="alert alert-info mt-3">
                <small>
                  ✓ Free shipping on orders over $100<br />
                  ✓ Money back guarantee<br />
                  ✓ 24/7 customer support
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailas;
