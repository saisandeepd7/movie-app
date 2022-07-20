import { useState } from "react";
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export function Movie({ movie,id }) {

  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const parastyles = {
    display: show ? "block" : "none"
  };
  const navigate=useNavigate()
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} <IconButton color="primary" onClick={() => setShow(!show)}>
{show ?<ExpandLessIcon/> :<ExpandMoreIcon/>}
      </IconButton>
      <IconButton color="primary" onClick={() => navigate(`/movies/${id}`)} aria-label="Movie Details">
      <InfoOutlinedIcon/> 
      </IconButton></h2>
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      
      {/* <p style={parastyles} className="movie-summary ">{movie.summary}</p> */}
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      <Counter />
    </div>

  );
}
