import { Component } from "react";
import React from "react";
import '../App.css'

class Contact extends Component {
    render() {
        return (
            <div className="App">
                <h1> Contact</h1>
                <a href="https://www.facebook.com/abdalrahman.abunimer/" target="_blank" className="details_link">Faecbook Page</a>
                <div className="Form">
                    <label className="details_header"></label>
                    <input type="text" className="input" placeholder={`Your Name..`} />
                    <input type="text" className="input" placeholder={`Your Email..`} />
                    <input type="text" className="input" id='Massage' placeholder={`Massage..`} />
                </div>
                <input type="submit" value="Submit" className="details_link" />
            </div>
        )
    }
}

export default Contact