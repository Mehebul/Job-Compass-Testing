import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
        <div className="row">
            <div className="col">
                <img src="logo.png" className="logo" alt="logo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eaque voluptatum officiis quidem.</p>
            </div>
            <div className="col">
             <h3>Office <div className="underline"><span></span></div> </h3>
             <p>Bypass Road</p>
             <p>Kolkata</p>
             <p>PIN- 700046, West Bengal, India</p>
            <p className="email-id">support@jobcompass.com</p> 
            <h4>+91 - 0123456789</h4>
            </div>
            <div className="col">
                <h3>Links <div className="underline"><span></span></div> </h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Servies</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Contact Us !</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Newsletter <div className="underline"><span></span></div> </h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type="email"  placeholder="Enter your email id" required/>
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>
                <div className="social-icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
            </div>    
        </div>
        <hr/>
        <p className="copyright">Job Compass © 2024 - All Rights Reserved</p>
    </footer>
  );
};
