import { useState, useEffect } from "react";

function ProductStore() {

    const [product, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")

            .then((response) => response.json())

            .then((data) => {

                setProducts(data);

            });

    }, []);

    const filteredProducts = product.filter((item) =>

        item.title.toLowerCase().includes(search.toLowerCase())

    );



    return (


        <div className="container py-5">

            <h1 className="text-center mb-4">
                Product Store App
            </h1>

            <div className="mb-4 text-center">

                <input
                    type="text"placeholder="Search Products..."className="form-control search-box"value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>
            <div className="row">
                {
                    filteredProducts.map((product) => (

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