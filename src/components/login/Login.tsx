import { useEffect, useRef } from "react";
import useLoginForm from "../../hooks/useLoginForm";
import DoughnutBankIcon from "../general/DoughnutBankIcon";
import SuccessPrompt from "../general/SuccessPrompt";
import { sendMessage as sendToastMessage } from "../general/ToastMessage";
import {
  LottieRefCurrentProps,
} from "lottie-react";

const Login = () => {
  const { loginForm, handleChange } = useLoginForm();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // useEffect(() => {
  //   lottieRef.current?.stop();
  // }, [lottieRef])

  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-8 align-items-center justify-content-center background-color-black">
            <DoughnutBankIcon></DoughnutBankIcon>
            <div className="card-body py-5 px-md-5">
              <form className="was-validated">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="emailId"
                    className="form-control"
                    value={loginForm.email}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="emailId">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="passwordId"
                    className="form-control"
                    value={loginForm.password}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="passwordId">
                    Password
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    sendToastMessage("678 965");
                    console.log("LoginForm: " + JSON.stringify(loginForm));
                    console.log("Play animation");
                    lottieRef.current?.play();
                    console.log("Played it");
                  }}
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>
                <SuccessPrompt forwardedRef={lottieRef} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
