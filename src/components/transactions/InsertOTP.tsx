import { useState } from 'react';
import OneInputPopUp from '../general/OneInputPopUp';
import Authentication from '../../services/Authentication';
interface Input {
  show: boolean;
  onHide: () => void;
}
const InsertOTP = (props: Input) => {
  const [otp, setOtp] = useState<string>('');

  const verifyOTPonBackend = () => {
    const authenticationService = new Authentication();
    authenticationService.checkOTP(otp);
  };
  return (
    <OneInputPopUp
      {...props}
      title="Verify"
      description="Your OTP was presented to you via a toast message"
      buttonMessage="verify"
      buttonAction={verifyOTPonBackend}
      inputValue={otp}
      inputPlaceHolder="Your OTP goes here"
      onInputValueChange={(event) => setOtp(event.target.value)}></OneInputPopUp>
  );
};

export default InsertOTP;
