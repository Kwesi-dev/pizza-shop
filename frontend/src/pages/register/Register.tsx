import registerImg from "../../assets/images/register.png"
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import facebooklogo from "../../assets/images/facebook.png"
import googlelogo from "../../assets/images/google.png"
import twitterlogo from "../../assets/images/twitter.png"
import backgroundImg from "../../assets/images/background.png"
import "./register.scss"
import { Link } from "react-router-dom";

type registerProps =  {
    setShowNav:  React.Dispatch<React.SetStateAction<boolean>>
  }
const Register = ({ setShowNav }: registerProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  return (
    <div className="register">
        <img src={backgroundImg} alt="" className="background" />
        <img src={backgroundImg} alt="" className="background-top" />
        <div className="register-body">
          <div className="register-body-header">
            <h1><span>P</span>izza</h1>
            <div className="header-right">
              <p>Has Account?</p>
              <Link to="/login" className="link">
                  <p className="sign-up">Sign in</p>
              </Link>
            </div>
          </div>
          <div className="body">
            <div className="register-left">
                <img src={registerImg} alt="" className="register-img" />
            </div>
            <div className="register-right">
              <div className="form-header">
                <h1>welcome customer!</h1>
                <p>Register to continue</p>
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
                    <div className="input-group">
                      <LockIcon className="input-icon"/>
                      <input type="password" name="confirm" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                    </div>
                    <div className="form-buttons">
                      <button className="register-btn">Register</button>
                    </div>
                </form>
                <div className="social-logins">
                    <p>Login with</p>
                    <div className="social-register-icons">
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

export default Register