import React from "react";
 import './Homepages.css';
import githubIcon from '../../src/image/github.png';
import linkedIcon from '../../src/image/linked.png';
import developerIcon from '../../src/image/developer.jpg';
 function Homepages(){
    return(
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red">Hii</span>My Name is</p>
                <p className="homepage_left_h2">Dnyaneshwari Gaikwad</p> 
                <p className="homepage_left_h3">learning web development from  {"" }
                      <span className="red">Board infinity</span></p>
                <p className="homepage_left_description">I am a full stack web developer. I have a passion for learning new technologies and building web applications.
                </p>
                <div><a href="https://linked.com/GaikwadDnyaneshwari" target="_blank">
                    <img src={githubIcon}
                    alt="githubIcon" className="homopage_logo"
                    ></img>

                    </a>
                    <a href="#"><img src={linkedIcon}
                    alt="githubIcon" className="homopage_logo"
                    ></img></a><br/>
                    <a href=" mailto:dnyaneshwari@gmail.com"><button className="btn">Get in Touch</button></a>
                    </div>
                    <div className="homepage_right">
                        <img src={developerIcon} className="coder"></img></div>  
            </div>
        </div>
    )
 }

 export default Homepages;

