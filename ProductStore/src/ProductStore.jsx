import { useState, useEffect } from "react";

function ProductStore() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    return (
        <div  className="container mt-5">
            <h1 className="text-center mb-5">Product Store</h1>
            <div className="row">
                 {
                    product.map((product) => (

                        <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={product.id}
                        >

                            <div className="card h-100 shadow-sm product-card">

                                <img
                                    src={product.image}
                                    className="card-img-top product-image"
                                    alt={product.title}
                                />

                                <div className="card-body d-flex flex-column">

                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>

                                    <p className="card-text price">
                                        ${product.price}
                                    </p>

                                    <button className="btn btn-dark mt-auto">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}
export default ProductStore;