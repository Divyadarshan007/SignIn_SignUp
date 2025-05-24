const SignUp = ({signUpMode, setSignUpMode }) => {
    return (
        <form action="index.html" autoComplete="off" className="sign-up-form">
            <div className="logo">
                <img src="../../public/logo.png" alt="easyclass" />
                <h4>easyclass</h4>
            </div>
            <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle" onClick={()=>{
                    setSignUpMode('')
                  
                    
                }}>Sign in</a>
            </div>
            <div className="actual-form">
                <div className="input-wrap">
                    <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                    <label>Name</label>
                </div>
                <div className="input-wrap">
                    <input type="email" className="input-field" autoComplete="off" required />
                    <label>Email</label>
                </div>
                <div className="input-wrap">
                    <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                    <label>Password</label>
                </div>
                <input type="submit" defaultValue="Sign Up" className="sign-btn" />
                <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                </p>
            </div>
        </form>


    )
}

export default SignUp