import { useState } from "react";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

const App = () => {
  const [signUpMode, setSignUpMode ]=useState(false);
  return (
    <main>
      <div className={`box ${signUpMode}`}>
        <div className="inner-box">
          <div className="forms-wrap">
            <SignIn signUpMode={signUpMode} setSignUpMode={setSignUpMode}/>
            <SignUp />
          </div>
          <div class="carousel">
            <div class="images-wrapper">
              <img src="../public/image1.png" class="image img-1 show" alt="" />
            </div>
            <div class="text-slider">
              <div class="text-wrap">
                <div class="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Create your own courses</h2>
                  <h2>Create your own courses</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App