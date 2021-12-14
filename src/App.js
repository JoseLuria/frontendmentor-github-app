// STYLE
import './App.css';

// HOOKS
import { useState } from 'react';

// COMPONENTS
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import UserCard from './Components/UserCard/UserCard';
import UserNotFound from './Components/UserNotFound/UserNotFound';
import Div100vh from 'react-div-100vh';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const [userData, setUserData] = useState(null)

  const [userName, setUserName] = useState("")

  const [error, setError] = useState(false)

  const handleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  const handleUserName = (target) => {
    setUserName(target.value)
  }

  const handleGetData = async e => {
    e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const result = await response.json()
    setUserData(result)
    
    result.message?setError(true):setError(false)
  }

  return (
    <Div100vh>
      <div className={darkMode?"App AppDark":"App AppLight"}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      <SearchBar darkMode={darkMode} handleUserName={handleUserName} handleGetData={handleGetData} error={error}/>
        {
          userData?error?<UserNotFound/>:
          <UserCard 
            darkMode={darkMode}
            img={userData.avatar_url}
            name={userData.name}
            user={userData.login}
            jointed={userData.created_at}
            bio={userData.bio}
            repos={userData.public_repos}
            followers={userData.followers}
            following={userData.following}
            blog={userData.blog}
            twitter={userData.twitter_username}
            company={userData.company}
            location={userData.location}
          />:<UserNotFound/>
        }
      </div>
    </Div100vh>  
  );
}

export default App;
