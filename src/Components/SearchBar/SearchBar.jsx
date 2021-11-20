import React from 'react'
import './SearchBar.style.css'
import Search from '../../Assets/icon-search.svg'

const SearchBar = ({darkMode, error, handleUserName, handleGetData}) => {
    return (
        <form className={darkMode?"BarContainer BarDark":"BarContainer BarLight"} onSubmit={e => handleGetData(e)}>
            <img src={Search} alt="Search Icon" />
            <div className="BarTextContainer">
                <input type="text" className="BarText" placeholder="Search GitHub username…" onChange={({target}) => handleUserName(target)}/>
                <p className={error?"Error-Text":""}>{error?"No result":""}</p>
            </div>
            <input type="submit" value="Search" className="BarButton" />
        </form>
    )
}

export default SearchBar
