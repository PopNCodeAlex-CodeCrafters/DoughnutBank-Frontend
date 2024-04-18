import Cookies from 'universal-cookie';

class CookiesUtil {
  private cookies = new Cookies();

  saveCookie(key: string, value: string) {
    this.cookies.set(key, value);
  }

  getPasswordFromCookie(): string {
    return this.getCookie('password');
  }

  getEmailFromCookie(): string {
    return this.getCookie('email');
  }

  getCookie(key: string): any {
    return this.cookies.get(key);
  }
}

const cookiesUtil = new CookiesUtil();
export default cookiesUtil;
