import Lottie, { LottieRefCurrentProps } from "lottie-react";
import successAnimation from "../../assets/lotties/success.json";
import { MutableRefObject } from "react";

type Input = {
  forwardedRef: MutableRefObject<LottieRefCurrentProps | null>;
};

const SuccessPrompt = ({ forwardedRef }: Input) => {
  return (
    <Lottie
      lottieRef={forwardedRef}
      className="lottie"
      animationData={successAnimation}
      autoPlay={false}
      loop={false}
    />
  );
};

export default SuccessPrompt;
