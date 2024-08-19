import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response =  await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    // 아무것도 주시하지 않고 있기 때문에 한번만 실행된다.
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (<h1>Loading...</h1> 
            ) : (
                <div>
                    {movies.map((movie) =>
                    // Key 는 React 에서 렌더링할때 꼭 필요한 속성이고,
                    // Movie 컴포넌트를 props 를 통해서 값을 전달하고 있다. 
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        summary={movie.summary} 
                        genres={movie.genres}/>)}
                </div>
            )}
        </div>
    );    
}

export default Home;