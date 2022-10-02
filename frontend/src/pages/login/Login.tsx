
import "./login.scss"
import loginImg from "../../assets/images/loginImg.svg"
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import facebooklogo from "../../assets/images/facebook.png"
import googlelogo from "../../assets/images/google.png"
import twitterlogo from "../../assets/images/twitter.png"
import backgroundImg from "../../assets/images/background.png"
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { axiosInstance } from "../../http/axiosRequests";
import loadingGif from "../../assets/gifs/loading.gif"

type formInputs = {
  email: string,
  password: string
}

type loginProps =  {
  setShowNav:  React.Dispatch<React.SetStateAction<boolean>>
}
const Login = ({ setShowNav }: loginProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, dirtyFields }} = useForm({
    defaultValues:{
      email: "",
      password: ""
    }
  })

  useEffect(() => {
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  useEffect(()=>{
    setShowNav(false)
  }, [setShowNav])

  const onSubmit : SubmitHandler<formInputs> = async ( data ) => {
    setLoading(true)  
    try{
        await axiosInstance.post("/auth/login", data)
        setLoading(false)
    }catch(err: any){
      console.log(err?.response?.data?.message)
      setErrorMessage(err?.response?.data?.message)
      setLoading(false)
    }
  }
  return (
    <div className="login">
        <img src={backgroundImg} alt="" className="background" />
        <img src={backgroundImg} alt="" className="background-top" />
        <div className="login-body">
          <div className="login-body-header">
            <h1><span>P</span>izza</h1>
            <div className="header-right">
              <p>New User?</p>
              <Link to="/register" className="link">
                <p className="sign-up">Sign up</p>
              </Link>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group-container">
                    <div className={errors.email ? "input-group input-error" : "input-group"}>
                      <PersonIcon className="input-icon"/>
                      <input type="text" placeholder="username!!@gmail.com" {...register("email", { required: "email is required"})}/>
                    </div>
                    <p className="error">{errors.email?.message}</p>
                  </div>  
                    <div className="input-group-container">
                      <div className={errors.password ? "input-group input-error" : "input-group"}>
                        <LockIcon className="input-icon"/>
                        <input type={passwordVisible === true ? "text" : "password"} placeholder="Enter Password" {...register("password", {required: "password is required"})}/>
                        {dirtyFields.password &&
                          <>
                          {passwordVisible === true ? 
                            <VisibilityOffIcon className="visible-icon" onClick={() => setPasswordVisible(!passwordVisible)}/>
                            :
                            <VisibilityIcon className="visible-icon" onClick={() => setPasswordVisible(!passwordVisible)}/>
                          }
                          </>
                        }
                      </div>
                      <p className="error">{errors.password?.message}</p>
                    </div>  
                    <div className="form-buttons">
                      <button className="login-btn" type="submit">
                        login 
                      </button>
                      {loading && <img src={loadingGif} alt="loading gif" className="loadinggif"/>}
                      <button className="forgot-btn">forgot password</button>
                    </div>
                </form>
                {errorMessage.length > 0 && <p className="errorMessage">{errorMessage}</p>}
                <div className="social-logins">
                    <p>Login with</p>
                    <div className="social-login-icons">
                      <div className="social-logo-container">
                        <img src={googlelogo} alt="" className="social-logo"/>
                      </div>
                      <div className="social-logo-container">
                        <img src={facebooklogo} alt="" className="social-logo"/>
                      </div>
                      <div className="social-logo-container twitter-logo">
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