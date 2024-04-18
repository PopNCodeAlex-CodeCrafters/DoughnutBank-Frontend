import { useState } from 'react';
import OneInputPopUp from '../general/OneInputPopUp';
import Authentication from '../../services/Authentication';
import { sendMessage } from '../general/ToastMessage';
interface Input {
  show: boolean;
  onHide: () => void;
  onVerify: () => void;
  onSuccess: () => void;
}
const InsertOTP = (props: Input) => {
  const [otp, setOtp] = useState<string>('');

  const verifyOTPonBackend = async () => {
    const authenticationService = new Authentication();

    try {
      const response: Response = await authenticationService.checkOTP(otp);
      if (response.ok) {
        clearInput();
        props.onVerify();
        props.onSuccess();
      } else {
        const errorMessage: string = await response.text();
        sendMessage(errorMessage);
      }
    } catch (error: any) {
      sendMessage(error.message);
    }
  };

  const clearInput = () => {
    setOtp('');
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
