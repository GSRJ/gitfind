import { useState } from "react";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import "./style.css";

export const App = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    console.log(userData);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser;
      if (newUser.bio === null) {
        newUser.bio = "Sem descrição.";
      }
      setCurrentUser(newUser);

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='inputBox'>
          <input
            value={user}
            onChange={(event) => setUser(event.target.value)}
            name='username'
            placeholder='@username'
          />
          <button
            type='submit'
            onClick={handleGetData}
          >
            Buscar
          </button>
        </div>
        {currentUser?.name ? (
          <div className='content'>
            <div className='pageContent'>
              <div className='dataBox'>
                <img
                  src={currentUser.avatar_url}
                  className='profileImg'
                  alt='profile'
                />
                <div className='profileInfo'>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
              {repos?.length ? (
                <div className='repoBox'>
                  <h3>Repositórios</h3>
                  {repos.map((repo) => (
                    <ListItem
                      key={repo.id}
                      title={repo.name}
                      description={repo.description}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <h1>Procure um usuário digitando o @username acima. </h1>
        )}
      </div>
    </div>
  );
};
