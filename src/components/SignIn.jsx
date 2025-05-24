const SignIn = ({ signUpMode, setSignUpMode }) => {

    return (
        <form action="index.html" autoComplete="off" className="sign-in-form">
            <div className="logo">
                <img src="../../public/logo.png" alt="easyclass" />
                <h4>easyclass</h4>
            </div>
            <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" className="toggle" onClick={()=>{
                    setSignUpMode('sign-up-mode')
                   
                }}>Sign up</a>
            </div>
            <div className="actual-form">
                <div className="input-wrap">
                    <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                    <label>Name</label>
                </div>
                <div className="input-wrap">
                    <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                    <label>Password</label>
                </div>
                <input type="submit" defaultValue="Sign In" className="sign-btn" />
                <p className="text">
                    Forgotten your password or you login datails?
                    <a href="#">Get help</a> signing in
                </p>
            </div>
        </form>


    )
}

export default SignIn