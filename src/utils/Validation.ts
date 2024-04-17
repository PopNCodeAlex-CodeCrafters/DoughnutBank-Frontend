class Validation {
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  validateEmail(email: string): boolean {
    return this.validateString(this.emailRegex, email);
  }
  validatePassword(password: string): boolean {
    return this.validateString(this.passwordRegex, password);
  }
  validateString(regex: RegExp, value: string): boolean {
    return regex.test(value);
  }
}

const validationUtil = new Validation();
export default validationUtil;
