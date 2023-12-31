import axios from "axios";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const API_URL = process.env.PUBLIC_URL + "/api-response/login.json";
interface User {
  email: string;
  username: string;
  password: string;
}
interface ModalProps {
  CloseModal: () => void;
}
const FlippedModal: React.FC<ModalProps> = ({ CloseModal }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [rotateClass, setRotateClass] = useState("");

  const ToggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setRotateClass("rotate");
  };
  const LoginForm = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const { login } = useContext(AuthContext);
    const Toggle = () => {
      setShowPass((prevShowPass) => !prevShowPass);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

    // const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    //   e.preventDefault();

    //   const isFormValid = email && username && password; // Check if all fields are filled

    //   if (isFormValid) {
    //     try {
    //       const response = await axios.get(API_URL);
    //       const { username: dataUsername, email: dataEmail, password: dataPassword } = response.data.data;

    //       if (email === dataEmail && username === dataUsername && password === dataPassword) {
    //         login(email, username, password);
    //         alert('Login successful!');
    //       } else {
    //         alert('Login failed. Invalid credentials.');
    //       }
    //     } catch (error) {
    //       console.error('Login error:', error);
    //     }
    //   } else {
    //     alert('Please fill all the required fields.');
    //   }
    // };

    const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = async (
      e
    ) => {
      e.preventDefault();

      const isFormValid = email && password; // Check if all fields are filled

      if (isFormValid) {
        try {
          const payload = {
            email: email,
            // username: username,
            password: password,
          };

          const response = await axios.get(API_URL);
          // const { username: dataUsername, email: dataEmail, password: dataPassword } = response.data.data;
          const isSuccess = response.data.status;

          if (isSuccess) {
            login(email, password);
            toast.success("Login successful!"); // Use toastify to show success message
            // Delaying closing the modal
            setTimeout(() => {
              CloseModal();
            }, 1000);
          } else {
            toast.error("Login failed. Invalid credentials."); // Use toastify to show error message
          }
        } catch (error) {
          console.error("Login error:", error);
          toast.error("An error occurred during login."); // Use toastify to show error message
        }
      } else {
        toast.error("Please fill all the required fields."); // Use toastify to show error message
      }
    };

    // Check if the component has already rendered
    // const rotateClass = hasRendered.current ? "rotate" : "";

    return (
      <div className={`left ${rotateClass}`}>
        <h2>Welcome Back</h2>
        <div className="text-span">
          {" "}
          <span>the faster you fill up, the faster you get a ticket</span>
        </div>

        <form className="input-flex">
          <div>
            <div className="input-icons">
              <i className="fa fa-at icon"></i>
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                value={email || ""}
                onChange={handleEmailChange}
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <div className="input-icons">
              <input
                className="input-field password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                autoComplete="Password"
                value={password || ""}
                onChange={handlePasswordChange}
              />
              <i
                className={`fa ${showPass ? "fa-eye-slash" : "fa-eye"} icon`}
                onClick={Toggle}
              ></i>
            </div>
          </div>
          <div className="check-forgot">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div>
              <Link to="/login">Forgot password?</Link>
            </div>
          </div>
          <div>
            <button className="signin-btn" type="submit" onClick={handleSignIn}>
              <Link to={`/`} className="signin-text">
                <strong>Sign In</strong>
              </Link>
            </button>
            {error && <div>{error}</div>}
          </div>
          <div className="google-text-div">
            <img
              className="google"
              src="data:image/png;base64,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"
            />
            <span className="google-signtext">Sign In with Google</span>
          </div>

          <div>
            <span>
              Dont have an account?{" "}
              <strong onClick={ToggleSignUp} className="sign-toggle-text">
                Sign Up
              </strong>
            </span>
          </div>
        </form>
      </div>
    );
  };
  const SignUpForm = () => {
    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [confirmpassword1, setConfirmPassword1] = useState("");
    const [username, setUsername] = useState("");
    const [showPass1, setShowPass1] = useState(false);
    const Toggle1 = () => {
      setShowPass1((prevShowPass) => !prevShowPass);
    };
    const handleEmailChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail1(e.target.value);
    };

    const handlePasswordChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword1(e.target.value);
    };
    const handleConfirmPasswordChange1 = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setConfirmPassword1(e.target.value);
    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };

    // const rotateClass = hasRendered.current ? "reverse-rotate" : "";
    return (
      <div className={`left ${rotateClass}`}>
        <h2 className="register-text">Register Now</h2>

        <form className="input-flex">
          <div>
            <div className="input-icons">
              <i className="fa fa-user icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                autoComplete="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div>
            <div className="input-icons">
              <i className="fa fa-at icon"></i>
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                value={email1}
                onChange={handleEmailChange1}
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <div className="input-icons">
              <input
                className="input-field password"
                type={showPass1 ? "text" : "password"}
                placeholder="Password"
                autoComplete="Password"
                value={password1}
                onChange={handlePasswordChange1}
              />

              {showPass1 ? (
                <i onClick={Toggle1} className="fa fa-eye-slash icon"></i>
              ) : (
                <i onClick={Toggle1} className="fa fa-eye icon"></i>
              )}
            </div>
          </div>
          <div>
            <div className="input-icons">
              <input
                className="input-field password"
                type="password"
                placeholder="Confirm Password"
                autoComplete="Confirm Password"
                value={confirmpassword1}
                onChange={handleConfirmPasswordChange1}
              />
            </div>
          </div>
          <div className="check-forgot">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div>
              <Link to="/login">Forgot password?</Link>
            </div>
          </div>
          <div>
            <button className="signin-btn">
              <Link to={`/`} className="signin-text">
                <strong>Sign Up</strong>
              </Link>
            </button>
          </div>

          <div>
            <span>
              Already have an account?{" "}
              <strong onClick={ToggleSignUp} className="sign-toggle-text">
                Sign In
              </strong>
            </span>
          </div>
        </form>
      </div>
    );
  };
  const RightImage = () => {
    return (
      <div className="right">
        <img src="https://media.istockphoto.com/id/1397823749/photo/person-hand-typing-on-keyboard-with-login-and-password-on-screen-display-cyber-security.webp?b=1&s=170667a&w=0&k=20&c=prgc3zrfEjWStIP9ntGCwJWQ4l0idpN-pZrunlvW26U=" />
      </div>
    );
  };
  return (
    <div className={`signup-container`}>
      <div className={`signup `}>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <RightImage />
      </div>
      <ToastContainer />
    </div>
  );
};

export default FlippedModal;
