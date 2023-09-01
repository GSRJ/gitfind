import background from "../../assets/background.svg";
import { Header } from "../../components/Header";
import "./style.css";

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <img
          src={background}
          className='background'
          alt='background app'
        />
        <div className='info'>
          <div className='inputBox'>
            <input
              name='username'
              placeholder='@username'
            />
            <button type='submit'>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
