import { useState } from "react";
import OneInputPopUp from "../general/OneInputPopUp";
interface Input {
  show: boolean;
  onHide: () => void;
}
const InsertOTP = (props: Input) => {
  const [otp, setOtp] = useState<string>("");
  return (
    <OneInputPopUp
      {...props}
      title="Verify"
      description="Your OTP was presented to you via a toast message"
      buttonMessage="verify"
      buttonAction={() => console.log("Verify OTP")}
      inputValue={otp}
      inputPlaceHolder="Your OTP goes here"
      onInputValueChange={(event) => setOtp(event.target.value)}
    ></OneInputPopUp>
  );
};

export default InsertOTP;
