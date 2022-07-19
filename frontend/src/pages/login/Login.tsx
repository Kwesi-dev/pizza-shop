
import "./login.scss"
import loginImg from "../../assets/images/loginImg.svg"
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import facebooklogo from "../../assets/images/facebook.png"
import googlelogo from "../../assets/images/google.png"
import twitterlogo from "../../assets/images/twitter.png"
import backgroundImg from "../../assets/images/background.png"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  return (
    <div className="login">
        <img src={backgroundImg} alt="" className="background" />
        <img src={backgroundImg} alt="" className="background-top" />

        <div className="login-body">
          <div className="login-body-header">
            <h1><span>C</span>reative</h1>
            <div className="header-right">
              <p>New User?</p>
              <p className="sign-up">Sign up</p>
            </div>
          </div>
          <div className="body">
            <div className="login-left">
                <img src={loginImg} alt="" className="login-img" />
            </div>
            <div className="login-right">
              <div className="form-header">
                <h1>welcome back!</h1>
                <p>Login to continue</p>
              </div>
                <form>
                    <div className="input-group">
                      <PersonIcon className="input-icon"/>
                      <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="username!!@gmail.com"/>
                    </div>
                    <div className="input-group">
                      <LockIcon className="input-icon"/>
                      <input type={passwordVisible === true ? "text" : "password"} name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                      {password.length > 0 &&
                        <>
                        {passwordVisible === true ? 
                          <VisibilityOffIcon className="visible-icon" onClick={() => setPasswordVisible(!passwordVisible)}/>
                          :
                          <VisibilityIcon className="visible-icon" onClick={() => setPasswordVisible(!passwordVisible)}/>
                        }
                        </>
                      }
                    </div>
                    <div className="form-buttons">
                      <button className="login-btn">login</button>
                      <button className="forgot-btn">forgot password</button>
                    </div>
                </form>
                <div className="social-logins">
                    <p>Login with</p>
                    <div className="social-login-icons">
                      <div className="social-logo-container">
                        <img src={googlelogo} alt="" className="social-logo"/>
                      </div>
                      <div className="social-logo-container">
                        <img src={facebooklogo} alt="" className="social-logo"/>
                      </div>
                      <div className="social-logo-container">
                        <img src={twitterlogo} alt="" className="social-logo"/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Login