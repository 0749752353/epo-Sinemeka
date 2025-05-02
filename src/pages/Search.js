import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {

const [searchParams] = useSearchParams();
const query = searchParams.get("query");
const { data: movies } = useFetch(apiPath, query);

useTitle(`Search result for ${query}`);

  return (
    
    <main>
      <section className="py-7 max-w-7xl mx-auto">
        <p className="text-2xl text-gray-700 dark:text-white">{movies.length === 0 ? `No Result Found for '${query}'` : `Result for '${query}'`}</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">

      <div className="flex justify-start flex-wrap">

{ movies.map((movie) => (

<MovieCard key={movie.id} movie={movie} />

)) }

      </div>

    </section>
    </main>

  )
}
 