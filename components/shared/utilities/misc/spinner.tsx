import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

interface PropsType extends ReactProps {
  icon?: JSX.Element;
}
export function Spinner({ icon = <CgSpinner />, className = "py-12", ...props }: PropsType) {
  return (
    <div className={`w-full flex-col  flex-center text-primary ${className}`}>
      {/* <Img src="/assets/imgs/logo.png" className="object-cover w-16" alt="logo" /> */}
      <div className="bounce">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
