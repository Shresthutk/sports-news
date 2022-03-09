import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        
        return (
            <div className="container my-5 " >
                        <div className="card is-flex dark-bg-secondry" >
                <div className="card-image">
                    <figure className="imgbox ">
                    <img src={this.props.urltoimage} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-5 light-font">{this.props.author}</p>
                    </div>
                    </div>

                    <div className="content title is-4 wheat">
                   {this.props.title}
                    <br/>
                    <time className="title is-6 wheatsmoke">{this.props.time}</time>
                    </div>
                </div>
                </div>
      </div>
    )
  }
}

export default Newsitem
