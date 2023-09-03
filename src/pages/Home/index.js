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
    } else {
      setCurrentUser("invalid");
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
        {currentUser?.name && currentUser?.name !== "invalid" ? (
          <div className='content'>
            <div className='pageContent'>
              <div className='dataBox'>
                <img
                  src={currentUser.avatar_url}
                  className='profileImg'
                  alt='profile'
                />
                <div className='profileInfo'>
                  <h2>{currentUser.name}</h2>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
              <div className='repoBox'>
                <h2>Repositórios</h2>
                {repos?.length > 0 ? (
                  repos.map((repo) => (
                    <ListItem
                      key={repo.id}
                      title={repo.name}
                      description={repo.description}
                      url={repo.html_url}
                    />
                  ))
                ) : (
                  <h3>Usuário sem repositórios.</h3>
                )}
              </div>
            </div>
          </div>
        ) : currentUser == "invalid" ? (
          <div className='emptySearch'>
            <h2>
              Usuário não encontrado. <br />
              Procure um usuário digitando o @username acima.
            </h2>
          </div>
        ) : (
          <div className='emptySearch'>
            <h2>Procure um usuário o @username acima.</h2>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
