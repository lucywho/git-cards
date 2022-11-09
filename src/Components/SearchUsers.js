import axios from "axios"
import React from "react"
import "../index.css"

class SearchUsers extends React.Component {
    state = {
        userName: "",
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const user = this.state.userName

        const res = await axios.get(`https://api.github.com/users/${user}`)

        this.props.addNewProfile(res.data)
        this.setState({ userName: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={(e) =>
                        this.setState({ userName: e.target.value })
                    }
                    placeholder="GitHub User Name"
                ></input>
                <button>Add User</button>
            </form>
        )
    }
}

export default SearchUsers
