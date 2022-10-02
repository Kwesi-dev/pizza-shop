import registerImg from "../../assets/images/register.png"
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import facebooklogo from "../../assets/images/facebook.png"
import googlelogo from "../../assets/images/google.png"
import twitterlogo from "../../assets/images/twitter.png"
import backgroundImg from "../../assets/images/background.png"
import "./register.scss"
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { axiosInstance } from "../../http/axiosRequests";
import loadingGif from "../../assets/gifs/loading.gif"
import { useNavigate } from "react-router-dom"
type formInputs = {
  email: string,
  password: string,
}
type registerProps =  {
    setShowNav:  React.Dispatch<React.SetStateAction<boolean>>
  }
const Register = ({ setShowNav }: registerProps) => {
  const [loading, setLoading ] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, dirtyFields } } = useForm<formInputs>({
    defaultValues:{
      email: "",
      password: "",
    }
  })
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [ errorMessage, setErrorMessage ] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if(isSubmitSuccessful){
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit: SubmitHandler<formInputs> = async (data) => {
    setLoading(true)
    try{
      await axiosInstance.post("/auth/register", data)
      setLoading(false)
      navigate("/login")
    }catch(err: any){
      setLoading(false)
      setErrorMessage(err?.response?.data?.message)
    }  

  }
  
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group-container">
                      <div className={errors.email ? "input-group input-error" : "input-group"}>
                        <PersonIcon className="input-icon"/>
                        <input type="email" placeholder="username!!@gmail.com" {...register("email", {
                          required : "email is required"
                        })}/>
                      </div>
                      <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="input-group-container">
                      <div className={errors.password ? "input-group input-error" : "input-group"}>
                        <LockIcon className="input-icon"/>
                        <input type={passwordVisible === true ? "text" : "password"} placeholder="Enter Password" {...register("password", {
                          minLength:{
                            value: 6,
                            message: "password must have atleast 6 characters"
                          },
                          required: "password must have atleast 6 characters"
                        })}/>
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
                    {/* <div className="input-group">
                      <LockIcon className="input-icon"/>
                      <input type="password" placeholder="Confirm Password" { ...register("confirmPassword", {
                        required: true,
                        pattern:{
                          value: "cjajskjsaj"
                        }
                      })}/>
                    </div> */}
                    <div className="form-buttons">
                      <button className="register-btn">Register</button>
                      {loading && <img src={loadingGif} alt="loading gif" className="loadinggif"/>}
                    </div>
                </form>
                {errorMessage.length > 0 && <p className="errorMessage">{errorMessage}</p>}
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