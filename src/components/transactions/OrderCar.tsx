import OrderSummary from "./OrderSummary";

import { useEffect, useRef, useState } from "react";
import SuccessPrompt from "../general/SuccessPrompt";
import { LottieRefCurrentProps } from "lottie-react";
import InsertOTP from "./InsertOTP";

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
    setOtpInputShow(true);
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
