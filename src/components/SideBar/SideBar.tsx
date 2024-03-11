import classNames from 'classnames';
import questionsData from '../../data/questions.json';
import { useAppSelector } from '../../app/hooks';
import cross from '../../images/cross.svg';
import burgerMenu from '../../images/burger-menu.svg';
import './SideBar.scss';

type Props = {
  isMenuOpened: boolean,
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SideBar: React.FC<Props> = ({ isMenuOpened, setIsMenuOpened }) => {
  const moneyArray = questionsData.questions.map(question => question.money).reverse();
  const currentQuestionIndex = useAppSelector(state => state.currentIndex.currentIndex);

  return (
    <aside className='side'>
      <div className="question-page__wrapper">
        <img
          src={isMenuOpened ? cross : burgerMenu}
          alt="menu"
          className="question-page__icon"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        />
      </div>

      <div className="side__wrapper">
        {moneyArray.map((money, index) => {
          const reversedIndex = moneyArray.length - 1 - index;
          const currentElement = reversedIndex === currentQuestionIndex;
          const passedElement = currentQuestionIndex > reversedIndex;

          return (
            <div 
              className={classNames("side__element side__border", {
                "side__element--current": currentElement,
                "side__border--current": currentElement,
                "side__element--passed": passedElement,
                "side__border--passed": passedElement,
              })}
              key={money}
            >
              <p className="side__element--text">${money}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}