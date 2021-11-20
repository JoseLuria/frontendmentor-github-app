import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import UserCard from './Components/UserCard/UserCard';

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
    <div className={darkMode?"App AppDark":"App AppLight"}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      <SearchBar darkMode={darkMode} handleUserName={handleUserName} handleGetData={handleGetData} error={error}/>
      <UserCard darkMode={darkMode}/>
    </div>
  );
}

export default App;
