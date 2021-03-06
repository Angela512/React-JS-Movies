import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API_KEY = "4c7605a6f5db442eb69c6d3c10be6d36";

function Detail() {
    const {id} = useParams(); 
    const [movies, setMovies] = useState([]);
    const getMovie = async() => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`
            );
        const json = await response.json();
        setMovies(json);
    };

    useEffect(() => {
        getMovie();
    }, []);
    
    return (
        
        <div className={styles.movie}>
            
            <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} className={styles.movie__bgImg}/>
            <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} className={styles.movie__img}/>
            <div className={styles.contents}>
            <h1 className={styles.title}>{movies.title}</h1>
            <h4 className={styles.info}>{movies.release_date} ▪ {movies.runtime}min ▪  
            {movies.genres && movies.genres.map((genre, index) => 
            index === movies.genres.length - 1 ? genre.name : `  ${genre.name} / `)}</h4>
            <p>{movies.overview}</p>
            </div>
            
        </div>  
    );
}
export default Detail;
