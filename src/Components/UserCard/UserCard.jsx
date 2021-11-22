import React from 'react'
import './UserCard.style.css'
import Location from '../../Assets/icon-location.svg'
import Website from '../../Assets/icon-website.svg'
import Twitter from '../../Assets/icon-twitter.svg'
import Company from '../../Assets/icon-company.svg'

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

    const jointedData = jointed.slice(0, 10)
    const jointedArray = jointedData.split("-")
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <main className={darkMode?"UserContainer UserDark":"UserContainer UserLight"}>
            <img src={img} alt="User" />
            <div>
                <div className="MainInfo">
                    <img src={img} alt="User" />

                    <div className="InfoUser">
                        <div>
                            <h1>{name}</h1>
                            <p>@{user}</p>
                        </div>
                        <p>Joined {jointedArray[2]} {months[jointedArray[1] - 1]} {jointedArray[0]}</p>
                    </div>
                </div>
                <p className="Bio">{bio}</p>
                <div className="StatsContainer">
                    <p className="StatsData">Repos<br /><span>{repos?repos:0}</span></p>
                    <p className="StatsData">Followers<br /><span>{followers?followers:0}</span></p>
                    <p className="StatsData">Following<br /><span>{following?following:0}</span></p>
                </div>
                <div className="LinksContainer">
                    <div className={location?"Link LinkTrue":"Link LinkFalse"}>
                        <div>
                            <img src={Location} alt="Location Logo" />
                        </div>
                        <p>{location?location:"Not Avaliable"}</p>
                    </div>

                    <div className={blog?"Link LinkTrue":"Link LinkFalse"}>
                        <div>
                            <img src={Website} alt="Website Logo" />
                        </div>
                        {blog?<a href={blog} target="_blank" rel="noreferrer">{blog}</a>:<p className="LinkFalse">Not Avaliable</p>}
                        
                    </div>

                    <div className={twitter?"Link LinkTrue":"Link LinkFalse"}>
                        <div>
                            <img src={Twitter} alt="Twitter Logo" />
                        </div>
                        <p>{twitter?twitter:"Not Avaliable"}</p>
                    </div>

                    <div className={company?"Link LinkTrue":"Link LinkFalse"}>
                        <div>
                            <img src={Company} alt="Company Logo" />
                        </div>
                        <p>{company?company:"Not Avaliable"}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserCard
