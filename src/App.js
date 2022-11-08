import React from "react"
import "./index.css"
import Cards from "./Components/Cards"
import SearchUsers from "./Components/SearchUsers"

class App extends React.Component {
    render() {
        return (
            <>
                <header className="header"> Git Hub Cards App </header>
                <SearchUsers />

                <Cards />
            </>
        )
    }
}

export default App
