import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import './HomePage.scss';
import like from '../../images/like.svg';

export const MainPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/game');
  }

  return (
    <section className='home'>
      <div className="home__container page__wrapper">
        <img src={like} alt="like" className='page__image' />

        <div className="page__right">
          <h1 className='home__title'>
            Who wants to be <br /> a millionaire?
          </h1>

          <Button
            onClick={handleButtonClick}
            text='Start'
          />
        </div>
      </div>
    </section>
  );
}