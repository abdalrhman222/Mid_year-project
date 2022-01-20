import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      save: "",
      abSaved: "Save",
    };
    this.change = this.change.bind(this);
    this.saved = this.saved.bind(this);
  }
  change(abd) {
    this.setState({ save: abd });
    console.log(this.state.save);
  }
  saved() {
    this.setState({ abSaved: "Saved" });
  }

  render() {
    console.log(this.props.data);

    return (
      <div className="homeMain">
        {this.props.data.map((it) => {
          return (
            <div className="CloDiv">
              <img src={it.image} alt="image" className="image"></img>
              <h2 className="h3">{it.name} </h2>
              <Link to={`/details/${it.id}`} state={it} className="details">
                {" "}
                More{" "}
              </Link>
              <button
                className="details_link"
                onClick={() => this.props.data1(it)}
              >
                {this.state.abSaved}
              </button>
            </div>
          );
        })}
        )
      </div>
    );
  }
}
export default Home;
