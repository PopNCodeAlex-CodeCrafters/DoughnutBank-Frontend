import OrderSummary from './OrderSummary';

import { useEffect, useRef, useState } from 'react';
import SuccessPrompt from '../general/SuccessPrompt';
import { LottieRefCurrentProps } from 'lottie-react';
import InsertOTP from './InsertOTP';
import Authentication from '../../services/Authentication';
import DiffieHellman from '../../services/DiffieHellman';
import { OTP } from '../../global';
import { sendMessage } from '../general/ToastMessage';

const OrderCar = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [otpInputShow, setOtpInputShow] = useState(false);

  useEffect(() => {
    stopSuccessAnimation();
  }, [lottieRef]);

  const stopSuccessAnimation = () => {
    if (lottieRef.current !== null) lottieRef.current.stop();
  };

  const playSuccessAnimation = () => {
    lottieRef.current?.play();
    setTimeout(() => {
      stopSuccessAnimation();
    }, 2000);
  };

  const askForOtp = () => {
    askBackendForOTP();

    setOtpInputShow(true);
  };

  const askBackendForOTP = async () => {
    const diffieHellman = new DiffieHellman();
    const authenticationService = new Authentication();
    const otpResponse: OTP = await authenticationService.getEncryptedOTP(diffieHellman.publicKey);
    //would have decrypted using diffieHellman.decrypt(otpResponse.publicKey, otpResponse.otpValue, otpResponse.iv),
    //fields that were supposed to be populated if the creation of the 'shared key' would have worked on the backend
    if (otpResponse.otpValue !== null) sendMessage(otpResponse.otpValue);
  };

  return (
    <div>
      <OrderSummary onPurchaseClick={askForOtp}></OrderSummary>
      <InsertOTP
        show={otpInputShow}
        onHide={() => setOtpInputShow(false)}
        onVerify={() => setOtpInputShow(false)}
        onSuccess={() => playSuccessAnimation()}></InsertOTP>
      <SuccessPrompt forwardedRef={lottieRef} />
    </div>
  );
};

export default OrderCar;
