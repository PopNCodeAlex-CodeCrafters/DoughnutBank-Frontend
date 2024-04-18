import { OTP, User } from '../global';
import cookiesUtil from '../utils/Cookies';

class Authentication {
  api_url = process.env.REACT_APP_API_URL;

  async login(email: string, password: string): Promise<User> {
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
    if (!response.ok) throw new Error('Could not log in');
    const user: User = await response.json();
    return user;
  }

  async getEncryptedOTP(publicKey: string): Promise<OTP> {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    const otpBody: OTP = {
      publicKey: publicKey
    };
    const email = cookiesUtil.getEmailFromCookie();
    const password = cookiesUtil.getPasswordFromCookie();
    const response = await fetch(`${this.api_url}/OTP`, {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
        Authorization: `Basic ${email}:${password}`
      },
      body: JSON.stringify(otpBody)
    });

    const otp: OTP = await response.json();
    return otp;
  }

  async checkOTP(otp: string): Promise<Response> {
    if (!process.env.REACT_APP_API_KEY) throw new Error('No API key specified in .env file');
    const email = cookiesUtil.getEmailFromCookie();
    const password = cookiesUtil.getPasswordFromCookie();
    const user: User = {
      email: email,
      password: password,
      otp: {
        otpValue: otp,
        userEmail: email
      }
    };

    try {
      const response = await fetch(`${this.api_url}/checkOTP`, {
        method: 'POST',
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
          Authorization: `Basic ${email}:${password}`
        },
        body: JSON.stringify(user)
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default Authentication;
