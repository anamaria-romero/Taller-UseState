import { useState } from "react";
import likeIcon from "../../assets/LikeDislike/Like.png";
import dislikeIcon from "../../assets/LikeDislike/Dislike.png";

export const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="like-dislike">
      <button onClick={() => setLikes(likes + 1)}>
        <img src={likeIcon} alt="Like" />
        {likes}
      </button>
      <button onClick={() => setDislikes(dislikes + 1)}>
        <img src={dislikeIcon} alt="Dislike" />
        {dislikes}
      </button>
    </div>
  );
};
