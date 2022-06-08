import { useState } from "react";

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className='counter-container'>
      <button className='like-button'
        onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button className='dislike-button' onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}
