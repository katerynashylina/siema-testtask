import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/HomePage/HomePage';
import { QuestionPage } from './pages/QuestionPage/QuestionPage';
import { FinalPage } from './pages/FinalPage/FinalPage';
import { NotFound } from './pages/NotFound/NotFound';
import './App.scss';
import './styles/reset.scss';
import './styles/normalize.scss';


export const App = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/game' element={<QuestionPage />}/>
          <Route path='/final' element={<FinalPage />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}