function ProductCards() {

    const products = [

        {
            id: 1,
            name: "Shoes",
            price: "₹1200",
            image: "/Images/shoes.png"
        },

        {
            id: 2,
            name: "Watch",
            price: "₹800",
            image: "/Images/watch.webp"
        },

        {
            id: 3,
            name: "Bag",
            price: "₹1500",
            image: "/Images/bag.jpg"
        }

    ];

    return (

        <div className="card-container">

            {
                products.map((product) => (

                    <div className="card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h2>{product.name}</h2>

                        <p>{product.price}</p>

                        <button>
                            Buy Now
                        </button>

                    </div>

                ))
            }

        </div>

    );
}

export default ProductCards;