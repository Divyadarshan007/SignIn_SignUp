import { useState } from "react";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

const App = () => {
  const [signUpMode, setSignUpMode] = useState('');
  return (
    <main className={signUpMode}>
      <div className={`box`}>
        <div className="inner-box">
          <div className="forms-wrap">
            <SignIn signUpMode={signUpMode} setSignUpMode={setSignUpMode} />
            <SignUp signUpMode={signUpMode} setSignUpMode={setSignUpMode}/>
          </div>
          <div className="carousel">
            <div className="images-wrapper">
              <img src="../public/image1.png" className="image img-1 show" />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
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