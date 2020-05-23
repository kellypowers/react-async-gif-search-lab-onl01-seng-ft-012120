import React, { Component } from 'react'


export default class GifList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
        }
    }


    
    render() {
        // const gifCards = this.props.firstThreeGifs.map(gif => (
        //     <li>  </li>
        //   ));
      
        return (
            <div>
                <ul>
                    <li><img src={this.props.firstThreeGifs[0]}></img></li>
                    <li><img src={this.props.firstThreeGifs[1]}></img></li>
                    <li><img src={this.props.firstThreeGifs[2]}></img></li>
                </ul>
            </div>
        )
    }
}
