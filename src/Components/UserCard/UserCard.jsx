import React from 'react'

// STYLE
import './UserCard.style.css'

// IMAGES
import Location from '../../Assets/icon-location.svg'
import Website from '../../Assets/icon-website.svg'
import Twitter from '../../Assets/icon-twitter.svg'
import Company from '../../Assets/icon-company.svg'

// COMPONENTS
import Link from '../Link/Link'
import StatsData from '../StatsData/StatsData'
import MainInfo from '../MainInfo/MainInfo'

const UserCard = (props) => {

    const {
        darkMode,
        img,
        name,
        user,
        jointed,
        bio,
        repos,
        followers,
        following,
        blog,
        twitter,
        company,
        location
    } = props

    return (
        <main className={darkMode?"UserContainer UserDark":"UserContainer UserLight"}>
            <img src={img} alt="User" />
            <div>
                <MainInfo darkMode={darkMode} img={img} user={user} name ={name} jointed={jointed} />
                <p className="Bio">{bio?bio:"This profile has no bio"}</p>
                <div className="StatsContainer">
                    <StatsData darkMode={darkMode} title={"Repos"} data={repos}/>
                    <StatsData darkMode={darkMode} title={"Followers"} data={followers}/>
                    <StatsData darkMode={darkMode} title={"Following"} data={following}/>
                </div>
                <div className="LinksContainer">
                    <Link darkMode={darkMode} img={Location} data={location} type={"static"}/> 
                    <Link darkMode={darkMode} img={Website} data={blog} type={"link"}/> 
                    <Link darkMode={darkMode} img={Twitter} data={twitter} type={"static"}/>
                    <Link darkMode={darkMode} img={Company} data={company} type={"static"}/>
                </div>
            </div>
        </main>
    )
}

export default UserCard
