import React from "react"
import "./index.css"
import Cards from "./Components/Cards"
import SearchUsers from "./Components/SearchUsers"

class App extends React.Component {
    state = {
        profiles: [],
    }

    addNewProfile = (profileData) => {
        this.setState((prevState) => ({
            profiles: prevState.profiles.concat(profileData),
        }))
    }
    render() {
        return (
            <>
                <header className="header"> Git Hub Cards App </header>
                <SearchUsers addNewProfile={this.addNewProfile} />

                <Cards profiles={this.state.profiles} />
            </>
        )
    }
}

export default App
