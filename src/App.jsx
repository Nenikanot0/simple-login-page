import SocialLogin from "./components/socialLogin";
import InputField from "./components/inputField";
const App = () => {
  return (
    <div className="login-container" ><h3>Log in with</h3>
      <SocialLogin/>
      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="example@gmail.com" icon="mail"  /> 
        <InputField type="password" placeholder="jkLm@2123" icon="lock" className="loginPass" /> 
        <a href="#" className="forgot" >Forgot password?</a>

        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don't have an account? <a href="#">Create account</a> </p>
    </div>

  )
}

export default App