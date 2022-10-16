import React, { Component } from "react";
import './Form.css';

class Form extends Component{
    constructor(props){
     super()
     this.state = {
        name: "",
        email: "",
        password: "",
     }
    //  this.handleChange = (e) => {
    //     if(e.target.id === "name"){
    //         this.setState({name: e.target.value});
    //     }else if (e.target.id === "email"){
    //         this.setState({email: e.target.value});
    //     }else if (e.target.id === "password"){
    //         this.setState({password: e.target.value});
    //  }
    }

    render() {
       console.log(this.state.name, "name");
       console.log(this.state.email, "email")
       return(
        <form className="form-container">
            <label className="label">
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange}  />
            </label>
            <label className="label">
                Email:
                <input type="email" ></input>
            </label>
            <label className="label">
                Password:
                <input type="password" ></input>
            </label>
            <button type="submit">submit</button>
            
        </form>
       )
        
    };

    
};

export default Form;