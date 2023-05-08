import { Component } from "react";
import "./NavbarStyle.css";

class Navbar extends Component {
    state={clicked: false};
    handleclick = () =>{this.setState({clicked:!this.state.clicked})}
    render(){
    return(
        <>
        <nav>
            <a href="index.html">
            <img src="/images/nav-logo.svg" />
            </a>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Shop</a></li>
                    <li><a href="index.html">Blog</a></li>
                    <li><a href="index.html">Contact</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleclick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>


            </div>
        </nav>
        </>

    );
}
}

export default Navbar;