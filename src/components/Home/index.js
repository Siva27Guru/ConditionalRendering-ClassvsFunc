import React, { useState } from "react"
//import { Component } from "react"

import Message from "../Message"
import Login from "../Login"
import Logout from "../Logout"

import "./index.css"

//class Home extends Component {

const Home = () => {

    //state = {isLoggedIn: false}

    const [IsLoggedIn, setIsLoggedIn] =  useState(false)

   const onClickButton = () => {
        console.log('logged')

        //this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
        
        setIsLoggedIn( prevIsLoggedIn => !prevIsLoggedIn);
    
    };
    //render() {

 //const {isLoggedIn} = this.state;
//console.log(isLoggedIn,"sdfsdf")
    return (
        <div className="app-container">
            <div className="conatiner-in">
                <div>
                <Message isLoggedIn={IsLoggedIn}/>
                </div>
                <div>
                {
                IsLoggedIn ? 
                (<Logout logout={onClickButton}/>) // (<Logout logout={this.onClickButton}/>) 
                : 
                (<Login login={onClickButton}/>)
                }
                </div>
            </div>
        </div>
        )
   //}
}

export default Home
