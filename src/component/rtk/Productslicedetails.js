import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Productslicedetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Convert productId to integer for comparison
    const id = parseInt(productId, 10);

    // Access products from Redux store
    const product = useSelector((state) =>
        state.Slice.products.find((item) => item.id === id)
    );

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="container mt-5 p-3" style={{ marginBottom: "100px" }}>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6 p-4">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h5>Price:<span style={{ color: "green", fontWeight: "700", fontSize: "21px" }}>{product.price}$</span>   </h5>


                    <button onClick={() => navigate(-1)} className='btn btn-info mt-2 text-light'>Back</button>
                    <br />

                    <br />

                </div>
            </div>
        </div>
    );
};

export default Productslicedetails;
