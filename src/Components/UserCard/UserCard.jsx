import React from 'react'
import './UserCard.style.css'
import Location from '../../Assets/icon-location.svg'
import Website from '../../Assets/icon-website.svg'
import Twitter from '../../Assets/icon-twitter.svg'
import Company from '../../Assets/icon-company.svg'

const UserCard = ({darkMode}) => {

    return (
        <main className={darkMode?"UserContainer UserDark":"UserContainer UserLight"}>
            <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="User" />
            <div>
                <div className="MainInfo">
                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="User" />

                    <div className="InfoUser">
                        <div>
                            <h1>the Octocat</h1>
                            <p>@octocat</p>
                        </div>
                        <p>Joined 25 Jan 2011</p>
                    </div>
                </div>
                <p className="Bio">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                <div className="StatsContainer">
                    <p className="StatsData">Repos<br /><span>8</span></p>
                    <p className="StatsData">Followers<br /><span>3938</span></p>
                    <p className="StatsData">Following<br /><span>9</span></p>
                </div>
                <div className="LinksContainer">
                    <div className="Link LinkTrue">
                        <div>
                            <img src={Location} alt="Location Logo" />
                        </div>
                        <p>San Francisco</p>
                    </div>

                    <div className="Link LinkTrue">
                        <div>
                            <img src={Website} alt="Website Logo" />
                        </div>
                        <a href="https://github.blog">https://github.blog</a>
                    </div>

                    <div className="Link LinkFalse">
                        <div>
                            <img src={Twitter} alt="Twitter Logo" />
                        </div>
                        <p>Not Available</p>
                    </div>

                    <div className="Link LinkTrue">
                        <div>
                            <img src={Company} alt="Company Logo" />
                        </div>
                        <p>@github</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserCard
