import { ErrorBoundary } from "react-error-boundary";
import { BiErrorCircle } from "react-icons/bi";

interface ErrorCatcherProps extends ReactProps {
  onError?: (error: any, info: any) => any;
  fallback?: ({
    error,
    resetErrorBoundary,
  }: {
    error: any;
    resetErrorBoundary: any;
  }) => JSX.Element;
}
export function ErrorCatcher({
  onError = () => { },
  fallback,
  ...props
}: ErrorCatcherProps) {
  return (
    <ErrorBoundary
      FallbackComponent={fallback || FallbackComponent}
      onError={onError}
    >
      {props.children}
    </ErrorBoundary>
  );
}

function FallbackComponent({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full py-6 col-span-full">
        <i className="text-4xl text-danger">
          <BiErrorCircle />
        </i>
        <div className="mt-3 text-xl font-bold text-gray-700">
          Có lỗi xảy ra
        </div>
        <div className="flex gap-2 mt-2">
          <button onClick={resetErrorBoundary}>Tải lại mục này</button>
        </div>
      </div>
    </>
  );
}
