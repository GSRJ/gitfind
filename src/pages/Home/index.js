import { Header } from "../../components/Header";
import "./style.css";

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='inputBox'>
          <input
            name='username'
            placeholder='@username'
          />
          <button type='submit'>Buscar</button>
        </div>
        <div className='content'>
          <div className='pageContent'>
            <div className='dataBox'>
              <img
                src='https://avatars.githubusercontent.com/u/108104426?v=4'
                className='profileImg'
                alt='profile'
              />
              <div className='profileInfo'>
                <h3>Gerson Sousa Rocha Junior</h3>
                <span>@username</span>
                <p>
                  Desciption duigdfuefguef ofheihfi8efvbdjvdv bfi8wefubcvjhbvb
                  fniefuiegbufbfjhf qwofjiehfjvcvb
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
