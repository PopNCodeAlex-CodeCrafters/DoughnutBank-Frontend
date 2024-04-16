import OrderSummary from "./OrderSummary";

import { useEffect, useRef } from "react";
import SuccessPrompt from "../general/SuccessPrompt";
import { LottieRefCurrentProps } from "lottie-react";

const OrderCar = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

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

  return (
    <div>
      <OrderSummary onPurchaseClick={playSuccessAnimation}></OrderSummary>
      <SuccessPrompt forwardedRef={lottieRef} />
    </div>
  );
};

export default OrderCar;
