import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MovieList = ({apiPath, title}) => {

  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title} | Sinemeka`;
  });


  return (
    <main>
    <section className="max-w-7xl mx-auto py-7">

      <div className="flex justify-start flex-wrap other:justify-evenly">

{ movies.map((movie) => (

<MovieCard key={movie.id} movie={movie} />

)) }

      </div>

    </section>
    </main>
  )
}
 