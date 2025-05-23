const SignUp = () => {
    return (
        
            <form action="index.html" autocomplete="off" class="sign-up-form">
                <div class="logo">
                    <img src="/public/logo.png" alt="easyclass" />
                    <h4>easyclass</h4>
                </div>

                <div class="heading">
                    <h2>Get Started</h2>
                    <h6>Already have an account?</h6>
                    <a href="#" class="toggle">Sign in</a>
                </div>

                <div class="actual-form">
                    <div class="input-wrap">
                        <input
                            type="text"
                            minlength="4"
                            class="input-field"
                            autocomplete="off"
                            required
                        />
                        <label>Name</label>
                    </div>

                    <div class="input-wrap">
                        <input
                            type="email"
                            class="input-field"
                            autocomplete="off"
                            required
                        />
                        <label>Email</label>
                    </div>

                    <div class="input-wrap">
                        <input
                            type="password"
                            minlength="4"
                            class="input-field"
                            autocomplete="off"
                            required
                        />
                        <label>Password</label>
                    </div>

                    <input type="submit" value="Sign Up" class="sign-btn" />

                    <p class="text">
                        By signing up, I agree to the
                        <a href="#">Terms of Services</a> and
                        <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </form>
        
    )
}

export default SignUp