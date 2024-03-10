import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import questionsData from '../../data/questions.json';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Option } from '../../components/Option/Option';
import { incrementCurrentQuestionIndex } from '../../features/currentIndex';
import { SideBar } from '../../components/SideBar/SideBar';
import { FinalPage } from '../FinalPage/FinalPage';
import burgerMenu from '../../images/burger-menu.svg';
import cross from '../../images/cross.svg';
import './QuestionPage.scss';


export const QuestionPage = () => {
  const currentQuestionIndex = useAppSelector(state => state.currentIndex.currentIndex);
  const currentQuestion = questionsData.questions[currentQuestionIndex];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setTimeout(() => {
        dispatch(incrementCurrentQuestionIndex());

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex >= questionsData.questions.length) {
          navigate('/final');
        }
      }, 1000);
    } else {
      setTimeout(() => navigate('/final'), 1000);
    }
  }

  if (currentQuestionIndex < 0 || currentQuestionIndex >= questionsData.questions.length || !questionsData.questions) {
    return <FinalPage />;
  }

  return (
    <section className="question-page">
      <div className={classNames("question-page__container", {
        "question-page__container--shown": !isMenuOpened, 
        "question-page__container--hidden": isMenuOpened, 
      })}>
        <div className="question-page__wrapper">
          <img
            src={isMenuOpened ? cross : burgerMenu}
            alt="menu"
            className="question-page__icon"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
        </div>

        <h1 className="question-page__title">
          {currentQuestion.question}
        </h1>

        <div className="question-page__answers">
          {currentQuestion.answers.map((answer, index) => (
            <>
            <Option
              answer={answer}
              onClick={handleAnswerClick}
              index={index}
              key={answer.text}
            />
            </>
          ))}
        </div>
      </div>

      <div className={classNames("question-page__side", {
        "question-page__side--shown": isMenuOpened, 
        "question-page__side--hidden": !isMenuOpened, 
      })}>
        <SideBar
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </section>
  );
}