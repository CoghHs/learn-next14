import { API_URL } from "../app/constants";
import styles from "../styles/movie-similar.module.css";

export async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await getSimilar(id);
  console.log(similar);
  return (
    <div className={styles.container}>
      {similar.map((item) => (
        <div key={item.id}>
          <img
            className={styles.poster}
            src={item.poster_path}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
}
