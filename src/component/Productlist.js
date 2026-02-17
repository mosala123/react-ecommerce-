import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Productlist.css';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [catname, setCatname] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 20));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then((data) => setCatname(data.slice(0, 5)))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const fetchProductsByCategory = (categoryId) => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
      .then(res => res.json())
      .then((data) => {
        setProducts(data.slice(0, 20));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products by category:', error);
        setLoading(false);
      });
  };

  const fetchAllProducts = () => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then((data) => {
        setProducts(data.slice(0, 20));
        setLoading(false);
      });
  };

  return (
    <div className="products-container">
      <div className="container">
        <h1 className='products-header text-center mb-4'>📦 Our Products</h1>

        <div className='category-buttons'>
          <button
            className='category-btn'
            onClick={fetchAllProducts}
          >
            All Products
          </button>
          {catname.map((cat) => (
            <button
              className='category-btn'
              onClick={() => fetchProductsByCategory(cat.id)}
              key={cat.id}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading products...</p>
          </div>
        )}

        {!loading && (
          <div className="products-grid">
            {products.length > 0 ? (
              products.map((pro) => (
                <div className="product-card" key={pro.id}>
                  <img
                    className="card-img-top"
                    src={pro.images?.[0] || 'https://via.placeholder.com/300'}
                    alt={pro.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title" title={pro.title}>
                      {pro.title}
                    </h5>
                    <p className="card-text">
                      {pro.description && pro.description.length > 50
                        ? pro.description.slice(0, 50) + '...'
                        : pro.description || 'Premium quality product'}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-success fs-5">${pro.price}</span>
                      <Link to={`/product/${pro.id}`} className="details-btn btn btn-primary">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-info text-center w-100">
                No products available at the moment
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Productlist;
