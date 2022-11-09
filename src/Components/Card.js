import React from "react"

class Card extends React.Component {
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
