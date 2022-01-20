import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";



class Save extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1 className="details_header">Saved </h1>
                {this.props.data && this.props.data.map((it) => {
                    return (
                        <div className='CloDiv'>
                            <img src={it.image} className="image"></img>
                            <h2 className="h3">{it.title} </h2>
                            <Link to={`/details/${it.title}`} state={it} className="details" > More Details </Link>
                        </div>
                    )
                })}</>


        )
    }
}

export default Save;