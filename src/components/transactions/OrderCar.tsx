import OrderSummary from "./OrderSummary";

import { useEffect, useRef, useState } from "react";
import SuccessPrompt from "../general/SuccessPrompt";
import { LottieRefCurrentProps } from "lottie-react";
import InsertOTP from "./InsertOTP";
import authenticationService from "../../services/Authentication";
import DiffieHellman from "../../services/DiffieHellman";

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
    askBackendForOTP()
    
    setOtpInputShow(true);
  }

  const askBackendForOTP = async () => {
    const diffieHellman = new DiffieHellman();
    const response = await authenticationService.getEncryptedOTP(diffieHellman.publicKey);
    console.log("We've got something" + JSON.stringify(response))
  }

  return (
    <div>
      <OrderSummary onPurchaseClick={askForOtp}></OrderSummary>
      <InsertOTP
        show={otpInputShow}
        onHide={() => setOtpInputShow(false)}
      ></InsertOTP>
      <SuccessPrompt forwardedRef={lottieRef} />
    </div>
  );
};

export default OrderCar;
