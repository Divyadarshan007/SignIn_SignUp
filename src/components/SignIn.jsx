import { useState } from "react";

const SignIn = ({signUpMode, setSignUpMode}) => {

    return (
        <form action="index.html" autocomplete="off" class="sign-in-form">
            <div class="logo">
                <img src="/public/logo.png" alt="easyclass" />
                <h4>easyclass</h4>
            </div>

            <div class="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" class="toggle" onClick={()=>{
                    setSignUpMode('sign-up-mode')
                    console.log(signUpMode)
                }}>Sign up</a>
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
                        type="password"
                        minlength="4"
                        class="input-field"
                        autocomplete="off"
                        required
                    />
                    <label>Password</label>
                </div>

                <input type="submit" value="Sign In" class="sign-btn" />

                <p class="text">
                    Forgotten your password or you login datails?
                    <a href="#">Get help</a> signing in
                </p>
            </div>
        </form>

    )
}

export default SignIn