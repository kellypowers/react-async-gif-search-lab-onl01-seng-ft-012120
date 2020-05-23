import React, { Component } from 'react'

class GifSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            search: ""
        }
    }

    handleChange = event => {
        event.persist();
        this.setState({
            [event.target.id]: event.target.value
        })
        // console.log(this.state.search)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchFirstThreeGifs(this.state.search)
    }
    
    render() {
        return (
            <form >
                <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}> Find Gifs </button>
            </form>
        )
    }
}

export default GifSearch
