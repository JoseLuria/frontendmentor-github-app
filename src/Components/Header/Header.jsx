import React from 'react'
import './Header.style.css'
import Sun from '../../Assets/icon-sun.svg'
import Moon from '../../Assets/icon-moon.svg'

const Header = ({darkMode, handleDarkMode}) => {
    return (
        <header className={darkMode?"Header DarkHeader":" Header LightHeader"}>
            <p>devfinder</p>

            <button onClick={handleDarkMode}>
                <p>{darkMode?"Dark":"Light"}</p>
                <img src={darkMode?Sun:Moon} alt={darkMode?"Dark Mode Icon":"Light Mode Icon"} />
            </button>
        </header>
    )
}

export default Header
