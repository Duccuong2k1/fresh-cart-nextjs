import React, {
    MouseEventHandler,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react";
import { Button } from "./button";
import { IoClose } from "react-icons/io5";
import { forceCheck } from "react-lazyload";

export interface DialogProps {
    isOpen?: boolean;
    onClose?: () => any;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onOverlayClick?: MouseEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
    dialogFooter?: boolean;
    labelClose?: string;
    labelSubmit?: string;
    bodyClassName?: string;
    maxWidth?: number | string;
    height?: number | string;
};

export function Dialog({ children, ...props }: DialogProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(props.isOpen);

    useEffect(() => {
        let timeout: any;
        if (props.isOpen) {
            setIsOpen(props.isOpen);
            setTimeout(() => forceCheck(), 100);
        } else {
            timeout = setTimeout(() => {
                setIsOpen(props.isOpen);
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [props.isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                dialogRef.current &&
                !dialogRef.current.contains(event.target) &&
                wrapperRef.current &&
                wrapperRef.current.contains(event.target)
            ) {
                if (props.onOverlayClick) {
                    props.onOverlayClick(event);
                } else {
                    props.onClose;
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dialogRef, props.onClose, props.onOverlayClick]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log("click ");
        if (event.target === wrapperRef.current) {
            if (props.onOverlayClick) {
                props.onOverlayClick(event);
            } else {
                props.onClose && props.onClose(); // Gọi hàm đóng dialog nếu onClose được định nghĩa
            }
        }
    };

    return (
        <div
            className={`${isOpen
                ? "h-full opacity-100 translate-y-0 animate-emerge"
                : "h-0 opacity-0 translate-y-full animate-fade"
                } fixed inset-0 z-10 overflow-y-auto transition-all duration-200 ease-in-out transform`}
        >
            <div
                className={`flex items-center justify-center min-h-screen   `}
            >

                <div
                    className="fixed inset-0 z-10 bg-black opacity-50 "
                    ref={wrapperRef}
                    onClick={handleOverlayClick}
                ></div>

                <div
                    className={`relative z-50 w-auto p-5 bg-white rounded-md shadow-lg transition duration-300 ease-in-out transform
                    ${isOpen
                            ? "opacity-100 h-full translate-y-0 animate-emerge"
                            : "opacity-0 h-0 translate-y-full animate-fade"
                        }
                    `}
                    ref={dialogRef}
                >
                    <div
                        className={props.bodyClassName}
                        style={{ width: props.maxWidth, minHeight: props.height || 400 }}
                    >
                        {children}
                    </div>
                    {props.dialogFooter && (
                        <DialogFooter
                            onClose={props.onClose}
                            labelClose={props.labelClose}
                            labelSubmit={props.labelSubmit}
                        />
                    )}
                    <Button
                        icon={<IoClose />}
                        iconPosition="start"
                        iconClassName={"text-2xl text-gray-700 font-semibold "}
                        className={"bg-white absolute right-1 top-1 hover:shadow-none"}
                        onClick={props.onClose}
                    />
                </div>
            </div>
        </div>
    );
}

function DialogFooter({
    labelSubmit,
    labelClose,
    onClose,
}: {
    labelSubmit?: string;
    labelClose?: string;
    onClose?: () => any;
}) {
    return (
        <div className="flex flex-row items-end justify-end gap-3 mt-3">
            <Button
                text={labelClose || "Close"}
                className={"text-gray-500 border  "}
                onClick={onClose}
            />
            <Button
                text={labelSubmit || "Save"}
                className={"text-gray-500 border hover:text-white hover:bg-green-500 "}
                onClick={onClose}
            />
        </div>
    );
}
