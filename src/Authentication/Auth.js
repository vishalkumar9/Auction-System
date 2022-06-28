import React from "react";
import auth_image from "../image/undraw_secure_login_pdn4.svg";
import 'font-awesome/css/font-awesome.min.css';
import "./Auth.css";
const Auth = () => {
        return (
            <div className="auth_page">
                  <h2>Log In</h2>
                  <div className="Google_Login" role="button">
                      <div> <img src="https://d2yjqys1j7uhg1.cloudfront.net/images/icons/google-square.jpg" alt="Google"/></div>
                      <div> Continue With Google</div>
                  </div>
                <div className="login_page_divider" ></div>
                <form className="login_page_details">
                    <div className="login_page_input">
                        <input placeholder="Enter Your Email Address"/>
                    </div>
                    <div className="login_page_input">
                        <button type="submit" className="login_btn">Continue With Email</button>
                    </div>
                </form>
            </div>
        );
}

export default Auth;