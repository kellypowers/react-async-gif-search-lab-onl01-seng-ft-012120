import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstThreeGifs: []
        }
    }

    fetchFirstThreeGifs = (search ="dolphins") => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dMoVn353NKLGN2wG2L23kIE8uQ3EQKeX&rating=g`
        fetch(`${url}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                firstThreeGifs: [data.data[0].images.original.url, data.data[1].images.original.url, data.data[2].images.original.url]
            })
        })
    }

    componentDidMount() {
        this.fetchFirstThreeGifs()
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchFirstThreeGifs={this.fetchFirstThreeGifs}/>
                <GifList firstThreeGifs={this.state.firstThreeGifs} />
            </div>
        )
    }
}
