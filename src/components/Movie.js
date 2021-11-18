import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, year, rate}) { 
    return (
    <div className={styles.movie}>
    <Link to={ `/movie/${id}` }>
      <img src={`https://image.tmdb.org/t/p/w500${coverImg}`} alt={title} className={styles.movie__img} /> 
    </Link>
    <div>
    <h4 className={styles.movie__title}>
      {title.length > 35 ? `${title.slice(0,35)}...` : title}</h4>
      <h3 className={styles.movie__year}>({year.substring(0,4)})</h3>
      <h5 className={styles.movie__rate}>⭐{rate}/10</h5>
    </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
}

export default Movie;
