import { OTPresponse } from '../global';

class Authentication {
  api_url = process.env.REACT_APP_API_URL;
  async login(email: string, password: string) {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    await fetch(`${this.api_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  }

  async getOTP(): Promise<OTPresponse> {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    const response = await fetch(`${this.api_url}/OTP`, {
      method: 'GET',
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    });

    return response.json();
  }
}

const authenticationService = new Authentication();
export default authenticationService;
