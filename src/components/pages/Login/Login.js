import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUsingGoogle, setUser, setIsPending } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    loginUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  };
  return (
    <div className="custom-bg py-5 mt-5">
      <div className="container">
        <h2 className="text-center py-3">Travel <span className="text-info">Boss</span> </h2>

        <div className="row w-50 mx-auto">
          <div className="col-md-12">
            <div className="text-center mt-3" id="custom-pd">
              <h3 className="py-2">Login With</h3>
              <button onClick={handleGoogleLogin} className="btn btn-outline-info text-capitalize">
                <FontAwesomeIcon icon={faGoogle} className="fs-5" /> <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
