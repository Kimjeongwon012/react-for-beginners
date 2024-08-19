import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres}) {
    return (
        <div>                  
            <img src={coverImg} alt={title}/> 
            {/* <a href="/movie"><h2>{title}</h2></a> */}
            {/* 일반적인 HTML 의 a 태그를 사용하면 페이지 새로고침이 일어나
            사용자의 경험을 저하시킨다. 그러므로 react-router-dom 에서 제공하는
            Link 를 사용해 새로고침이 없이도 페이지 이동을 할 수 있도록 하자. */}
            <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
            <p>{summary}</p>
            <ul>
                {genres.map((g) =>(                                
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;