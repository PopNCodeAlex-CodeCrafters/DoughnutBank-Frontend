import useLoginForm from '../../hooks/useLoginForm';
import DoughnutBankIcon from '../general/DoughnutBankIcon';

const Login = () => {
  const { loginForm, handleChange, isValid, formSubmit } = useLoginForm();
  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-8 align-items-center justify-content-center background-color-black">
            <DoughnutBankIcon></DoughnutBankIcon>
            <div className="card-body py-5 px-md-5">
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="emailId">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="emailId"
                    className={`form-control ${isValid.email ? 'is-valid' : 'is-invalid'}`}
                    value={loginForm.email}
                    onChange={handleChange}
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="passwordId">
                    Password
                  </label>
                  <input
                    type="password"
                    id="passwordId"
                    className={`form-control ${isValid.password ? 'is-valid' : 'is-invalid'}`}
                    value={loginForm.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="button"
                  onClick={formSubmit}
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-block mb-4">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
