import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./SignIn.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SignIn(props: any) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  function handleClick() {
    setIsLoginMode(!isLoginMode);
  }

  return (
    <div
      className={
        "signInBackground " +
        (isLoginMode
          ? "signInBackground--loginMode"
          : "signInBackground--registerMode")
      }
    >
      {isLoginMode ? (
        <div className="loginHeaderDiv">
          <div className="loginDesign"></div>
          <div>
            <Login hide={props.close} switchMode={handleClick} />
          </div>
        </div>
      ) : (
        <div>
          <div className="registerHeaderDiv">
            <div className="registerDesign"></div>
            <Register hide={props.close} switchMode={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
