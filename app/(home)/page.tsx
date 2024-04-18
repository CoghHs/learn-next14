import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default async function HomePage() {
  const movies = await getMovies();
  const randomIndex = getRandomInt(Math.min(movies.length, 10));
  const selectedMovie = movies.length > 0 ? movies[randomIndex] : null;
  const backdropImage = selectedMovie ? selectedMovie.backdrop_path : "";
  const posterPath = selectedMovie ? selectedMovie.poster_path : "";

  return (
    <div>
      <div className={styles.backdropWrap}>
        <img className={styles.backdrop} src={backdropImage} alt="backdrop" />
        <img className={styles.posterPath} src={posterPath} alt="posterPath" />
        <Link href={`/movies/${selectedMovie.id}`}>
          <button className={styles.btn}>
            <span>상세정보</span>
          </button>
        </Link>
      </div>

      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
