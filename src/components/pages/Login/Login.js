import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUsingGoogle, setUser } = useAuth();

  const handleGoogleLogin = () => {
    loginUsingGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-primary py-5">
      <div className="container">
        <h1 className="text-center">login pages</h1>

        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-3">
              <button onClick={handleGoogleLogin} className="btn btn-info">
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
