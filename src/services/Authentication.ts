import { OTP } from '../global';

class Authentication {
  api_url = process.env.REACT_APP_API_URL;
  async login(email: string, password: string): Promise<Response> {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    const response = await fetch(`${this.api_url}/login`, {
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
    return response;
  }

  async getEncryptedOTP(publicKey: string): Promise<Response> {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    const otp: OTP = {
      publicKey: publicKey
    };
    console.log('THIS SI WAHT I AM SENDING' + JSON.stringify(otp));
    const response = await fetch(`${this.api_url}/OTP`, {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify(otp)
    });

    return response.json();
  }
}

const authenticationService = new Authentication();
export default authenticationService;
