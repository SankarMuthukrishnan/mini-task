import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { ModalWrapperProps } from "../../Interfaces/components";

export default function Wrapper({ tag = "div", children, className }: ModalWrapperProps) {
    
    const [element, setElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const newElement = document.createElement(tag);
        if (className)
            newElement.className = className;

        document.body.appendChild(newElement);
        setElement(newElement);

        return () => {
            if (newElement) {
                document.body.removeChild(newElement);
            }
        };
    }, [tag, className]);

    if (!element) return null;

    return ReactDOM.createPortal(children, element);
}