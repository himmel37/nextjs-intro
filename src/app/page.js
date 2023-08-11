"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkYzhmYjFlNzM2ZDllOThiZDI2OTk3NjdkNmMyMCIsInN1YiI6IjY0ZDVkZGY3YjZjMjY0MTE1NjliMDIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrLEquuQw0I1j-hLBBHPr1AkVr8yy4Jhy6rTOy6bVtY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, [movies]);
  return (
    <div>
      <h1>Home</h1>
      {!movies && <div>Movies Loading...</div>}
      {movies?.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}

// export async function getServerSideProps(){

// }
