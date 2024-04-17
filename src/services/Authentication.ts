class Authentication {
  api_url = process.env.REACT_APP_API_URL;
  login() {
    console.log("API URL: " + this.api_url);
  }
}

const authenticationService = new Authentication();
export default authenticationService;
