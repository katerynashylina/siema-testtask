import classNames from "classnames";
import { useState } from "react";
import { Answer } from "../../types/Answer";
import './Option.scss';

type Props = {
  answer: Answer,
  onClick: (isCorrect: boolean) => void
  index: number,
}

export const Option: React.FC<Props> = ({ answer, onClick, index }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (isCorrect: boolean) => {
    if (!clicked) {
      setClicked(true);
      onClick(isCorrect);
    }
  };

  const correctAnswer = clicked && answer.isCorrect;
  const wrongAnswer = clicked && answer.isCorrect;

  return (
    <div
      className={classNames("option option__border", {
        "option--correct": correctAnswer,
        "option__border--correct": correctAnswer,
        "option--wrong": wrongAnswer,
        "option__border--wrong": wrongAnswer,
      })}
      onClick={() => handleClick(answer.isCorrect)}
    >
      <div className="option__info">
        <p className="option__letter">{String.fromCharCode(65 + index)}</p>
        <p className="option__text">{answer.text}</p>
      </div>
    </div>
  );
}