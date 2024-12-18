import React, { useEffect, useRef } from "react";
import Wrapper from "./Wrapper";

import { Button, Spinner } from "../Elements";
import { ModalProps } from "../../Interfaces/components";

import style from "./style.module.css";
import { FlexyWrapper } from "../Wrappers";


let timer: any = null;

const ModalBox = ({ isOpen = true, onClose, title, children, footer = false, className = null, successBtn = null, closeBtn = null, onSubmit, isLoading = false }: ModalProps) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        timer = setTimeout(() => {
            if (modalRef.current && isOpen) {
                modalRef.current.classList.add(style.show);
            }
        }, 100);

        return (() => {
            clearTimeout(timer);
        })
    }, [modalRef, isOpen]);

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.classList.remove(style.show);
            timer = setTimeout(() => {
                onClose();
            }, 400);
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <Wrapper className={`modal-box ${style.box}${className ? ` ${className}` : ""}`}>
            <div ref={modalRef} className={`${style.content}`} onClick={(e) => e.stopPropagation()}>
                {
                    title && (
                        <div className={style.header}>
                            <h3 className={style.title}>{title}</h3>
                            <button className={style.close} onClick={handleClose} id="modal-close-btn">
                                &times;
                            </button>
                        </div>
                    )
                }
                <div className={style.body}>
                    {children}
                </div>
                {
                    footer && (
                        <div className={style.footer}>
                            {closeBtn && <Button onClick={handleClose} id="modal-close-btn" type="transparent" >{closeBtn}</Button>}
                            {successBtn && <Button disabled={isLoading} onClick={onSubmit}>
                                {
                                    isLoading ?
                                        <FlexyWrapper gap={4}>
                                            <Spinner color="#fff" />
                                            Submitting...
                                        </FlexyWrapper> :
                                        successBtn
                                }</Button>}
                        </div>
                    )
                }
            </div>
        </Wrapper>
    )
};

export default ModalBox;
