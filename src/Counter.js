import { useState } from "react";
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge } from "@mui/material";
export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike=() => setLike(like + 1)
  const incrementDisLike=() => setDisLike(dislike + 1)
  return (
    <div className='counter-container'>
      <IconButton
      color="primary"
      className="like button"
      onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">👍</Badge>
      </IconButton>
      <IconButton
      color="error"
      className="like button"
      onClick={incrementDisLike}>
        <Badge badgeContent={dislike} color="error">👎</Badge>
      </IconButton>
      
      
    </div>
  );
}
