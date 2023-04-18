import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

interface PropsType extends ReactProps {
  icon?: JSX.Element;
}
export function Spinner({ icon = <CgSpinner />, className = "py-12", ...props }: PropsType) {
  return (
    <div className={`w-full flex-col justify-center items-center text-primary main-container ${className}`}>
      <div className="bounce">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
