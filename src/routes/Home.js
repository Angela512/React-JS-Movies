import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
const API_KEY = "4c7605a6f5db442eb69c6d3c10be6d36";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        );
        const json = await response.json();
        setMovies(json.results);
        setLoading(false);
    }; 

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <div className={styles.container}>
        {loading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>
            ) : (
                <div className={styles.movies}>
                {movies.map((movie) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date}
                    rate={movie.vote_average}
                />
                ))} 
            </div>
            )}
        </div>
    );
}

export default Home;