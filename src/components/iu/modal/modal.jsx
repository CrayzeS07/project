import React from "react";
import { useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";


export const Modal = ({ isOpen, close, children }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="absolute z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center bg-[#1616169d] justify-center shadow-[-1px_7px_25px_4px_rgba(0,0,0,0.52)] p-4">
                <Dialog.Panel className="w-[1087px] rounded-[10px] bg-white p-5">
                    {children}

                </Dialog.Panel>
            </div>
        </Dialog>
    )

}