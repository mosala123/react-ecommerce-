import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteProduct, updateProductInState } from './Slice';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Slice.cart);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleDelete = (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#ff6b35',
            cancelButtonColor: '#004e89',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(productId));
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Product removed from cart successfully.',
                    icon: 'success',
                    confirmButtonColor: '#ff6b35'
                });
            }
        });
    };

    const handleUpdate = (product) => {
        Swal.fire({
            title: 'Update Quantity',
            input: 'number',
            inputLabel: 'Enter new quantity',
            inputPlaceholder: 'Quantity',
            inputValue: 1,
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ff6b35',
            cancelButtonColor: '#004e89',
            inputValidator: (value) => {
                if (!value || isNaN(value) || value <= 0) {
                    return 'Please enter a valid quantity!';
                }
            }
        }).then((result) => {
            if (result.value) {
                const updatedProduct = { ...product, quantity: parseInt(result.value) };
                dispatch(updateProductInState(updatedProduct));
                Swal.fire({
                    title: 'Updated!',
                    text: 'Quantity updated successfully.',
                    icon: 'success',
                    confirmButtonColor: '#ff6b35'
                });
            }
        });
    };

    return (
        <div className="cart-container">
            <div className="container">
                <div className="cart-wrapper">
                    <div className="cart-header">
                        <h2>🛒 Shopping Cart</h2>
                        <p className="text-muted">({cartItems.length} items)</p>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <div className="cart-empty-icon">📭</div>
                            <p className="cart-empty-message">Your cart is empty</p>
                            <Link to="/product" className="btn btn-primary btn-lg">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="cart-table table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className="product-image-cell">
                                                    <img
                                                        src={item.images?.[0] || item.image || 'https://via.placeholder.com/100'}
                                                        alt={item.title}
                                                    />
                                                </td>
                                                <td className="product-title-cell">
                                                    {item.title}
                                                </td>
                                                <td className="product-price-cell">
                                                    ${item.price.toFixed(2)}
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button
                                                            onClick={() => handleUpdate(item)}
                                                            className="btn-update"
                                                        >
                                                            ✏️ Update
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="btn-delete"
                                                        >
                                                            🗑️ Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="cart-summary">
                                <h3>📊 Order Summary</h3>
                                <div className="total-price-section">
                                    <span className="total-label  fs-6 fw-bold">Total : </span>
                                    <span className="total-amount text-sm  "  style={{color:"#ff6b35"}}>   {totalPrice.toFixed(2)} $</span>
                                </div>
                                
                                <Link to="/product" className="btn btn-dark text-light mt-3 w-100">
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
