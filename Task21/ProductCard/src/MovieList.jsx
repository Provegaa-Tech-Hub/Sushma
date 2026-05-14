function MovieList() {

    const movies = [

        {
            id: 1,
            name: "OG",
            year: 2025,
            rating: "9.0",
            image: "/Images/og.jpg"
        },

        {
            id: 2,
            name: "Dhurandhar",
            year: 2026,
            rating: "8.8",
            image: "/Images/dhurandhar.jpg"
        },

        {
            id: 3,
            name: "Jetlee",
            year: 2026,
            rating: "8.0",
            image: "/Images/jetlee.jpg"
        }

    ];

    return (

        <div className="movie-container">

            <h1>Movie List App</h1>

            <div className="movie-cards">

                {
                    movies.map((movie) => (

                        <div
                            className="movie-card"
                            key={movie.id}
                        >

                            <img
                                src={movie.image}
                                alt={movie.name}
                            />

                            <h2>{movie.name}</h2>

                            <p>
                                Year: {movie.year}
                            </p>

                            <p>
                                Rating: ⭐ {movie.rating}
                            </p>

                            <button>
                                Watch Now
                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}

export default MovieList;