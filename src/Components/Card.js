import React from "react"
import axios from "axios"

class Card extends React.Component {
    // async function getUser() {
    //     axios
    //         .get(`https://api.github.com/users/lucywho`)
    //         .then((res) => console.log(res.data))
    // }

    // getUser()
    render() {
        const profile = this.props
        return (
            <div className="single-card">
                <div className="image">
                    <img
                        src={profile.avatar_url}
                        alt="github avatar of user"
                    ></img>
                </div>
                <div className="info">
                    <p className="name">{profile.name}</p>
                    <p>{profile.company}</p>
                </div>
            </div>
        )
    }
}

export default Card
