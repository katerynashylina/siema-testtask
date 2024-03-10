import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setDefaulCurrentQuestionIndex } from '../../features/currentIndex';
import questionsData from '../../data/questions.json';
import like from '../../images/like.svg';
import './FinalPage.scss';

export const FinalPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentQuestionIndex = useAppSelector(state => state.currentIndex.currentIndex);
  const questions = questionsData.questions;
  const currentQuestion = questions[currentQuestionIndex - 1];
  const currentQuestionMoney = currentQuestion ? currentQuestion.money : 0;
  const isWrongAnswer = currentQuestion && !currentQuestion.answers[currentQuestionIndex - 1]?.isCorrect;

  const handleButtonClick = () => {
    dispatch(setDefaulCurrentQuestionIndex());
    navigate('/');
  }

  return (
    <section className='final'>
      <div className="final__container page__wrapper">
        <img src={like} alt="like" className='page__image' />

        <div className="page__right">
          <div>
            <h1 className='final__score'>Total score:</h1>
            <h1 className='final__earned'>
              ${isWrongAnswer && currentQuestionIndex === 1 ? 0 : currentQuestionMoney} earned
            </h1>
          </div>
          <Button
            onClick={handleButtonClick}
            text='Try again'
          />
        </div>
      </div>
    </section>
  );
}