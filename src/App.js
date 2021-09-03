import React from "react";
import "./App.css";
import Image from "./img/peoples.svg";

function App() {
  const [comment, setComment] = React.useState();

  const [allComments, setAllComment] = React.useState([]);

  function ICommented(event) {
    setComment(event.target.value);
  }

  function onClickButton() {
    const allPreviousComments = [...allComments, comment];

    setAllComment(allPreviousComments);
  }

  return (
    <div>
      <img src={Image} alt="peoples-imagem" />

      <textarea onChange={ICommented} placeholder=" Your comment here "></textarea>

      <button onClick={onClickButton}>Comment</button>

      <ul>
        {allComments.map((comment) => (
          <li key={comment} placeholder="Comment here">{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
